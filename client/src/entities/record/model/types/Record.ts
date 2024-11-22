import { RecordType } from './RecordType';

export interface Record {
  name: string;
  date: string;
  count: number;
  category: number;
  description: string;
  recordType: RecordType;
}
