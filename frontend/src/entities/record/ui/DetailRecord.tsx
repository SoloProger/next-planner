import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecord } from "../api/getRerord";
import { RecordType } from "../model/types/RecordType";

function DetailRecord() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["record"],
    queryFn: () => getRecord(id),
  });

  return (
    <div
      className={`flex-col gap-34 p-16 border-radius-4 w-50 ${
        data?.data?.attributes?.recordType === RecordType.INCOME
          ? `bg-green`
          : `bg-danger text-white`
      }`}
    >
      <div className="flex ai-center jc-space">
        <h2 className="header-semibold-6">
          Наименование: {data?.data.attributes.name}
        </h2>
        <h2 className="header-semibold-6">
          Категория: {data?.data.attributes.category}
        </h2>
      </div>
      <p>Описание: {data?.data.attributes.description}</p>
      <div className="flex ai-center jc-space">
        <span className="subtitle-semibold-1">
          Сумма: {data?.data.attributes.count}
        </span>
        <span className="subtitle-semibold-1">
          Дата: {data?.data.attributes.date}
        </span>
      </div>
    </div>
  );
}

export default DetailRecord;
