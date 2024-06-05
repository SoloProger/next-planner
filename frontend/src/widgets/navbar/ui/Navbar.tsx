import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { FaAlignJustify, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CustomDate } from "../../../shared/lib/utils";

type NavbarMethod = { openSidebar: () => void };

function Navbar({ openSidebar }: NavbarMethod) {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex ai-center jc-space p-25 bg-orange shadow">
      <div className="flex ai-center gap-30">
        <FaAlignJustify className="pointer" onClick={openSidebar} />
        <span>{CustomDate.getLocaleDate()}</span>
      </div>
      <Menu>
        <MenuButton onClick={() => setOpen(!isOpen)}>
          <span className="flex ai-center gap-8">
            User Name
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to="profile">
            Профиль
          </MenuItem>
          <MenuItem>Выйти</MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
}

export default Navbar;
