import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { FaAlignJustify, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { CustomDate } from "../../lib/utils";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex ai-center jc-space p-25 bg-orange">
      <div className="flex ai-center gap-30">
        <FaAlignJustify />
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
          <MenuItem>Профиль</MenuItem>
          <MenuItem>Выйти</MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
}

export default Navbar;
