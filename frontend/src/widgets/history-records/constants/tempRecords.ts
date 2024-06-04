import { Record } from "../../../entities/record/model/types/Record";
import { RecordType } from "../../../entities/record/model/types/RecordType";
import { CustomDate } from "../../../shared/lib/utils";

export const tempRecords: Record[] = [
  {
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    recordType: RecordType.CONSUMPTION,
  },
  {
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    recordType: RecordType.CONSUMPTION,
  },
  {
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    recordType: RecordType.CONSUMPTION,
  },
  {
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    recordType: RecordType.CONSUMPTION,
  },
  {
    name: "Покупка хлебушка ",
    category: "Продукты",
    count: 34,
    date: CustomDate.getLocaleDate(),
    recordType: RecordType.CONSUMPTION,
  },
];
