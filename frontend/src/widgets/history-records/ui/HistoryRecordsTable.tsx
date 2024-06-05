import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RecordType } from "../../../entities/record/model/types/RecordType";
import { tableColumns } from "../constants/tableColumns";
import { tempRecords } from "../constants/tempRecords";

function HistoryRecordsTable() {
  const navigate = useNavigate();

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
          {tempRecords.map((record, idx) => (
            <Tr
              key={idx}
              className="pointer"
              onClick={() => navigate(`/detail-record/${record.id}`)}
            >
              <Td>{idx + 1}</Td>
              <Td>{record.name}</Td>
              <Td>{record.date}</Td>
              <Td>{record.category}</Td>
              <Td>
                <span
                  className={`${
                    record.recordType === RecordType.INCOME
                      ? "bg-green"
                      : "bg-danger"
                  } p-4 border-radius-4`}
                >
                  {record.recordType}
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
