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
import { getCategories } from "../../../entities/category";
import { tableColumns } from "../constants/tableColumns";

function CategoriesTable() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
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
            <Tr>
              <Td>{idx + 1}</Td>
              <Td>{record.attributes.name}</Td>
              <Td>{record.attributes.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CategoriesTable;
