import { Invoice } from '../../../invoice/model/types/Invoice';

export interface Goal {
  id?: number;
  name: string;
  description: string;
  currentAmount: number;
  totalAmount: number;
  invoice?: Invoice;
}
