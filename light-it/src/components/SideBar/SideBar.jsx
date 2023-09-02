import React, { useState } from 'react';

import SideBarMenu from "./SideBarMenu";
import SideBarCollapsible from "./SideBarCollapsible";

export default function Sidebar() {
    const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
    return (
        <div className="flex">
            <SideBarMenu setIsCollapsibleOpen={setIsCollapsibleOpen}/>
            <SideBarCollapsible isCollapsibleOpen={isCollapsibleOpen} setIsCollapsibleOpen={setIsCollapsibleOpen}/>
        </div>
    );
}