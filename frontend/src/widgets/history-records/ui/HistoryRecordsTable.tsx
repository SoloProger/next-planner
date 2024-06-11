import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getRecords } from "../../../entities/record/api/getRecords";
import { RecordType } from "../../../entities/record/model/types/RecordType";
import { tableColumns } from "../constants/tableColumns";

function HistoryRecordsTable() {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["records"],
    queryFn: () => getRecords(),
  });

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {tableColumns.map((column, idx) => (
              <Th key={idx}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.data.map((record, idx) => (
            <Tr
              key={idx}
              className="pointer"
              onClick={() => navigate(`/detail-record/${record.id}`)}
            >
              <Td>{idx + 1}</Td>
              <Td>{record.attributes.name}</Td>
              <Td>{record.attributes.date}</Td>
              <Td>{record.attributes.category}</Td>
              <Td>
                <span
                  className={`${
                    record.attributes.recordType === RecordType.INCOME
                      ? "bg-green"
                      : "bg-danger"
                  } p-4 border-radius-4`}
                >
                  {record.attributes.recordType}
                </span>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default HistoryRecordsTable;
