import {Link} from "react-router-dom";
import {sidebarLinks} from "../constants/sidebarLinks";
import {icons} from "../constants/icons.ts";
import {ReactNode} from "react";

type SidebarOpenType = { isOpen: boolean };


function Sidebar({isOpen}: SidebarOpenType) {

    const renderIcon = (iconName: string) => {
        const Icon: ReactNode = icons[iconName];
        return <Icon/>
    }

    return (
        <aside className="p-24">
            <section
                className={`wp-210 hp-550 p-20 shadow bg-white border-radius-5 ${!isOpen && "display-none"}`}
            >
                <div className="flex-col gap-24">
                    {sidebarLinks.map((sidebarLink, idx) => (
                        <Link
                            key={idx}
                            className="flex svg-fill-hover ai-center gap-8 headline-hover pointer bg-black-hover text-white-hover border-radius-8-hover p-8"
                            to={sidebarLink.path}

                        >
                            {renderIcon(sidebarLink.iconName)}
                            {sidebarLink.name}
                        </Link>
                    ))}
                </div>
            </section>
        </aside>
    );
}

export default Sidebar;
