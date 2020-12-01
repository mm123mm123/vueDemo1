type recordItem = {
  NumberPadOutput: string;
  type: string;
  noteValue: string;
  selectedTags: string[];
  createAt: Date;
}
type label =
  {
    id: string;
    name: string;
  }
interface Window {
  labelList: label[];
}
