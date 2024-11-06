import {Link} from "react-router-dom";
import {sidebarLinks} from "../constants/sidebarLinks";

type SidebarOpenType = { isOpen: boolean };

function Sidebar({isOpen}: SidebarOpenType) {
    return (
        <aside className="p-24">
            <section
                className={`wp-210 hp-550 p-20 shadow bg-white border-radius-5 ${!isOpen && "display-none"}`}
            >
                <div className="flex-col gap-24">
                    {sidebarLinks.map((sidebarLink, idx) => (
                        <Link
                            key={idx}
                            className="headline-hover pointer bg-black-hover text-white-hover border-radius-8-hover p-8"
                            to={sidebarLink.path}
                        >
                            {sidebarLink.name}
                        </Link>
                    ))}
                </div>
            </section>
        </aside>
    );
}

export default Sidebar;
