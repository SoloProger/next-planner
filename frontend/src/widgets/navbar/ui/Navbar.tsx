import {Input} from "../../../shared/ui";

type NavbarMethod = { openSidebar: () => void };

function Navbar({openSidebar}: NavbarMethod) {
    return (
        <nav className="flex ai-center jc-space p-25 gap-32">
            <div className="flex wp-250 jc-center ai-center gap-10 bg-white p-10 border-radius-5 shadow">
                <span className="title-3 pointer" onClick={openSidebar}>Planner</span>
            </div>
            <div className="w-100 bg-white flex ai-center gap-16 p-12 border-radius-5 shadow">
                <Input inputSize="small" placeholder="Поиск..." blockStyles="w-100"/>
                <img src="/img/person.png" alt="avatar"/>
            </div>
        </nav>
    );
}

export default Navbar;
