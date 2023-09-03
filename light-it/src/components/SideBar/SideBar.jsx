import React, { useState } from 'react';

import SideBarMenu from "./SideBarMenu";
import SideBarCollapsible from "./SideBarCollapsible";

export default function Sidebar() {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <div className="flex">
            <SideBarMenu setSelectedItem={setSelectedItem}/>
            <SideBarCollapsible selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
        </div>
    );
}