import React, { useState } from 'react';

import SideBarMenu from "./SideBarMenu";
import SideBarCollapsible from "./SideBarCollapsible";

export default function Sidebar() {
    const [selectedCategory, setSelectedCaterogy] = useState(null);
    return (
        <div className="flex">
            <SideBarMenu setSelectedCaterogy={setSelectedCaterogy}/>
            <SideBarCollapsible selectedCategory={selectedCategory} setSelectedCaterogy={setSelectedCaterogy}/>
        </div>
    );
}