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
  getLabel: () => label[];
  editLabel: (id: string, inputData: string) => 'null' | 'duplicate' | 'success';
  removeLabel: (label: label) => void;
  createLabel: () => void;
  findLabel: (id: string) => label;
}
