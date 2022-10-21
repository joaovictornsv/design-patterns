export interface FileTypeImplementation {
  savePDF(quality: string): void;
  saveJPG(quality: string): void;
  saveMarkdown(quality: string): void;
}

// Implementation
export class Slide implements FileTypeImplementation {
  savePDF(quality: string) {
    console.log(`Saving slide as PDF with ${quality} quality`);
  }

  saveJPG(quality: string) {
    console.log(`Saving slide as JPG with ${quality} quality`);
  }

  saveMarkdown(quality: string) {
    console.log(`Saving slide as Markdown with ${quality} quality`);
  }
}

export class Document implements FileTypeImplementation {
  savePDF(quality: string) {
    console.log(`Saving document as PDF with ${quality} quality`);
  }

  saveJPG(quality: string) {
    console.log(`Saving document as JPG with ${quality} quality`);
  }

  saveMarkdown(quality: string) {
    console.log(`Saving document as Markdown with ${quality} quality`);
  }
}

export class Table implements FileTypeImplementation {
  savePDF(quality: string) {
    console.log(`Saving table as PDF with ${quality} quality`);
  }

  saveJPG(quality: string) {
    console.log(`Saving table as JPG with ${quality} quality`);
  }

  saveMarkdown(quality: string) {
    console.log(`Saving table as Markdown with ${quality} quality`);
  }
}


