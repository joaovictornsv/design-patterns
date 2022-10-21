import { SaveJPGMode, SaveMarkdownMode, SavePDFMode } from './abstraction';
import { Document, Slide, Table } from './implementation';

const doc = new Document()
const slide = new Slide()
const table = new Table()

const saveDocAsPdf = new SavePDFMode(doc)
const saveSlideAsJPG = new SaveJPGMode(slide)
const saveTableAsMarkdown = new SaveMarkdownMode(table)


saveDocAsPdf.save('good')
saveSlideAsJPG.save('bad')
saveTableAsMarkdown.save('medium')