import { List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../constants/sidebarLinks";

type SidebarOpenType = { isOpen: boolean };

function Sidebar({ isOpen }: SidebarOpenType) {
  return (
    <aside
      className={`wp-250 p-20 h-vh-100 shadow ${!isOpen && "display-none"}`}
    >
      <List spacing={10} className="flex-col mb-35-rem">
        {sidebarLinks.map((sidebarLink, idx) => (
          <ListItem
            key={idx}
            className="pointer"
            as={Link}
            to={sidebarLink.path}
          >
            {sidebarLink.name}
          </ListItem>
        ))}
      </List>
      <span className="text-small text-center ">
        <strong>version: 0.1</strong>
      </span>
    </aside>
  );
}

export default Sidebar;
