import { List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../constants/sidebarLinks";

type SidebarOpenType = { isOpen: boolean };

function Sidebar({ isOpen }: SidebarOpenType) {
  return (
    <aside
      className={`wp-250 p-20 h-vh-100 shadow ${!isOpen && "display-none"}`}
    >
      <List spacing={10}>
        {sidebarLinks.map((sidebarLink, idx) => (
          <ListItem key={idx} className="pointer">
            <Link to={sidebarLink.path}>{sidebarLink.name}</Link>
          </ListItem>
        ))}
      </List>
    </aside>
  );
}

export default Sidebar;
