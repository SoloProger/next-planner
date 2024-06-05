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
import { tempCategories } from "../constants/tempCategories";

function CategoriesTable() {
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
          {tempCategories.map((record, idx) => (
            <Tr>
              <Td>{idx + 1}</Td>
              <Td>{record.name}</Td>
              <Td>{record.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CategoriesTable;
