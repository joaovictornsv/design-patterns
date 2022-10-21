import { FileTypeImplementation } from './implementation';

export interface AbstractSaveMode {
  save(quality: string): void;
}

export class SavePDFMode implements AbstractSaveMode {
  constructor(
    private readonly file: FileTypeImplementation
  ) {}

  save(quality: string) {
    this.file.savePDF(quality)
  }
}

export class SaveJPGMode implements AbstractSaveMode {
  constructor(
    private readonly file: FileTypeImplementation
  ) {}

  save(quality: string) {
    this.file.saveJPG(quality)
  }
}

export class SaveMarkdownMode implements AbstractSaveMode {
  constructor(
    private readonly file: FileTypeImplementation
  ) {}

  save(quality: string) {
    this.file.saveMarkdown(quality)
  }
}