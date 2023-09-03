import React, {useState} from 'react';

import SideBarMenu from "./SideBarMenu";
import SideBarCollapsible from "./SideBarCollapsible";

export default function Sidebar() {
    const [selectedCategory, setSelectedCaterogy] = useState(null);
    const [clickedOnCategory, setClickedOnCategory] = useState(false)


    return (
        <div className="flex">
            <SideBarMenu setSelectedCaterogy={setSelectedCaterogy} setClickedOnCategory={setClickedOnCategory}/>
            <SideBarCollapsible selectedCategory={selectedCategory} setSelectedCaterogy={setSelectedCaterogy} clickedOnCategory={clickedOnCategory}/>
        </div>
    );
}