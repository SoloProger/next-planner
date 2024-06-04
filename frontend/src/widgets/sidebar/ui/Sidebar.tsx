import { List, ListItem } from "@chakra-ui/react";
import { sidebarLinks } from "../constants/sidebar-links";

type SidebarOpenType = { isOpen: boolean };

function Sidebar({ isOpen }: SidebarOpenType) {
  return (
    <aside
      className={`wp-250 p-20 h-vh-100 shadow ${!isOpen && "display-none"}`}
    >
      <List spacing={10}>
        {sidebarLinks.map((sidebarLink) => (
          <ListItem className="pointer">{sidebarLink.name}</ListItem>
        ))}
      </List>
    </aside>
  );
}

export default Sidebar;
