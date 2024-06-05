import { RecordType } from "./RecordType";

export interface Record {
  id?: number;
  name: string;
  date: string;
  count: number;
  category: string;
  description: string;
  recordType: RecordType;
}
