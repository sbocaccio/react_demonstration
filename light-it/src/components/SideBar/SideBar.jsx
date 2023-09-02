import React, { useState } from 'react';

import SideBarMenu from "./SideBarMenu";
import SideBarCollapsible from "./SideBarCollapsible";

export default function Sidebar() {
    const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);
    return (
        <div className="flex">
            <SideBarMenu/>
            <SideBarCollapsible isCollapsibleOpen={isCollapsibleOpen} setIsCollapsibleOpen={setIsCollapsibleOpen}/>
        </div>
    );
}