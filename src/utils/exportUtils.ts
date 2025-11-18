import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import saveAs from 'file-saver';

// Export to HTML
export async function exportToHTML(markdown: string): Promise<void> {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown Export</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      color: #333;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }
    h1 { font-size: 2em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
    h2 { font-size: 1.5em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
    h3 { font-size: 1.25em; }
    code {
      background-color: #f6f8fa;
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    pre {
      background-color: #f6f8fa;
      padding: 16px;
      border-radius: 6px;
      overflow-x: auto;
    }
    pre code {
      background-color: transparent;
      padding: 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 16px 0;
    }
    th, td {
      border: 1px solid #dfe2e5;
      padding: 6px 13px;
    }
    th {
      background-color: #f6f8fa;
      font-weight: 600;
    }
    blockquote {
      border-left: 4px solid #dfe2e5;
      padding-left: 16px;
      color: #6a737d;
      margin: 16px 0;
    }
  </style>
</head>
<body>
  <div id="content">
${markdown}
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'markdown-export.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Export to PDF
export async function exportToPDF(element: HTMLElement): Promise<void> {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const imgWidth = 210; // A4 width in mm
  const pageHeight = 297; // A4 height in mm
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save('markdown-export.pdf');
}

// Export to Word
export async function exportToWord(markdown: string): Promise<void> {
  const lines = markdown.split('\n');
  const paragraphs: Paragraph[] = [];

  for (const line of lines) {
    if (line.startsWith('# ')) {
      paragraphs.push(
        new Paragraph({
          text: line.substring(2),
          heading: HeadingLevel.HEADING_1,
        })
      );
    } else if (line.startsWith('## ')) {
      paragraphs.push(
        new Paragraph({
          text: line.substring(3),
          heading: HeadingLevel.HEADING_2,
        })
      );
    } else if (line.startsWith('### ')) {
      paragraphs.push(
        new Paragraph({
          text: line.substring(4),
          heading: HeadingLevel.HEADING_3,
        })
      );
    } else if (line.trim() === '') {
      paragraphs.push(new Paragraph({ text: '' }));
    } else {
      // Handle bold and italic
      const children: TextRun[] = [];
      let text = line;
      
      // Simple bold/italic handling (basic implementation)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const italicRegex = /\*(.*?)\*/g;
      
      // Replace bold
      text = text.replace(boldRegex, (match, content) => {
        return `|||BOLD|||${content}|||BOLD|||`;
      });
      
      // Replace italic
      text = text.replace(italicRegex, (match, content) => {
        return `|||ITALIC|||${content}|||ITALIC|||`;
      });
      
      const parts = text.split('|||');
      let isBold = false;
      let isItalic = false;
      
      for (const part of parts) {
        if (part === 'BOLD') {
          isBold = !isBold;
        } else if (part === 'ITALIC') {
          isItalic = !isItalic;
        } else if (part) {
          children.push(
            new TextRun({
              text: part,
              bold: isBold,
              italics: isItalic,
            })
          );
        }
      }
      
      paragraphs.push(new Paragraph({ children }));
    }
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: paragraphs,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, 'markdown-export.docx');
}

// Export to Image
export async function exportToImage(
  element: HTMLElement,
  format: 'png' | 'jpg'
): Promise<void> {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: format === 'jpg' ? '#ffffff' : null,
  });

  canvas.toBlob((blob) => {
    if (blob) {
      saveAs(blob, `markdown-export.${format}`);
    }
  }, `image/${format === 'jpg' ? 'jpeg' : 'png'}`);
}

