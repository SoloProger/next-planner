import { CustomDate } from "../../../shared/lib/utils";
import { Record } from "../model/types/Record";
import { RecordType } from "../model/types/RecordType";

export const tempDetailRecord: Record = {
  id: 1,
  name: "Покупка хлебушка ",
  category: "Продукты",
  count: 34,
  date: CustomDate.getLocaleDate(),
  description: "Хлебушек хлебушек хлебушек",
  recordType: RecordType.CONSUMPTION,
};
