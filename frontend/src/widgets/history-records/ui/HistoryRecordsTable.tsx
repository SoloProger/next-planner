import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { tableColumns } from "../constants/tableColumns";
import { tempRecords } from "../constants/tempRecords";

function HistoryRecordsTable() {
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
            <Tr>
              <Td>{idx + 1}</Td>
              <Td>{record.name}</Td>
              <Td>{record.date}</Td>
              <Td>{record.category}</Td>
              <Td>
                <span className="bg-danger p-4 border-radius-4">
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
