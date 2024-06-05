import { Record } from "../../../entities/record/model/types/Record";
import { RecordType } from "../../../entities/record/model/types/RecordType";
import { CustomDate } from "../../../shared/lib/utils";

export const tempRecords: Record[] = [
  {
    id: 1,
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    description: "Хлебушек хлебушек хлебушек",
    recordType: RecordType.CONSUMPTION,
  },
  {
    id: 2,
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    description: "Хлебушек хлебушек хлебушек",
    recordType: RecordType.CONSUMPTION,
  },
  {
    id: 3,
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    description: "Хлебушек хлебушек хлебушек",
    recordType: RecordType.CONSUMPTION,
  },
  {
    id: 4,
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    description: "Хлебушек хлебушек хлебушек",
    recordType: RecordType.CONSUMPTION,
  },
  {
    id: 5,
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    description: "Хлебушек хлебушек хлебушек",
    recordType: RecordType.INCOME,
  },
];
