import React from 'react';
import {Card} from "@material-tailwind/react";
import CloseSideBarButton from "./CloseSideBarButton";
import SideBarCollapsibleCategory from "./SideBarCollapsibleCategory";


export default function SideBarCollapsible({selectedItem, setSelectedItem}){
    return (
        selectedItem ?
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[30rem] p-6 shadow-xl bg-gray-100 ">
            <SideBarCollapsibleCategory selectedItem={selectedItem}/>
            <CloseSideBarButton setSelectedItem={setSelectedItem}/>
        </Card> : null
    )
}