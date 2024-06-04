import { RecordType } from "./RecordType";

export interface Record {
  id?: number;
  name: string;
  date: string;
  count: number;
  category: string;
  recordType: RecordType;
}
