import { tempDetailRecord } from "../constants/tempDetailRecord";
import { RecordType } from "../model/types/RecordType";

function DetailRecord() {
  return (
    <div
      className={`flex-col gap-34 p-16 border-radius-4 w-50 ${
        tempDetailRecord.recordType === RecordType.INCOME
          ? `bg-green`
          : `bg-danger text-white`
      }`}
    >
      <div className="flex ai-center jc-space">
        <h2 className="header-semibold-6">
          Наименование: {tempDetailRecord.name}
        </h2>
        <h2 className="header-semibold-6">
          Категория: {tempDetailRecord.category}
        </h2>
      </div>
      <p>Описание: {tempDetailRecord.description}</p>
      <div className="flex ai-center jc-space">
        <span className="subtitle-semibold-1">
          Сумма: {tempDetailRecord.count}
        </span>
        <span className="subtitle-semibold-1">
          Дата: {tempDetailRecord.date}
        </span>
      </div>
    </div>
  );
}

export default DetailRecord;
