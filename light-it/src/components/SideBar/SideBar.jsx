import SideBarMenu from "./SideBarMenu";
import SideBarCollapsible from "./SideBarCollapsible";

export default function Sidebar() {

    return (
        <div className="flex">
            <SideBarMenu/>
            <SideBarCollapsible/>
        </div>
    );
}