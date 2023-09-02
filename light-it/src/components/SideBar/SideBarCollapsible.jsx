import React from 'react';
import {Card} from "@material-tailwind/react";
import activo_derecha from "../../images/activo_derecha.png";
import CloseSideBarButton from "./CloseSideBarButton";


export default function SideBarCollapsible({isCollapsibleOpen, setIsCollapsibleOpen}){
    return (
        isCollapsibleOpen ?
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[30rem] p-6 shadow-xl bg-gray-100 ">
            <p className="font-bold text-left">Aberturas</p>

            <button
                className="shadow-blue-gray-900/5 text-black active:bg-gray-300 text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mb-4 ease-linear transition-all duration-150 text-left flex items-center justify-between"
                type="button" onClick={() => {
                console.log('algo')
            }}
            >
                <div className="text-xs text-grey font-semibold">Ventanas</div>
                <img
                    src={activo_derecha}
                    alt="Image Description"

                    className="ml-2 cursor-pointer w-3 h-3"
                />
            </button>
            <button
                className="shadow-blue-gray-900/5 text-black active:bg-gray-300 text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mb-4 ease-linear transition-all duration-150 text-left flex items-center justify-between"
                type="button"
            >
                <div className="text-xs text-grey font-semibold">Ventanas</div>
                <img
                    src={activo_derecha}
                    alt="Image Description"
                    onClick={() => {
                        console.log('entre')
                    }}
                    className="ml-2 cursor-pointer w-3 h-3"
                />
            </button>
            <CloseSideBarButton setIsCollapsibleOpen={setIsCollapsibleOpen}/>
        </Card> : null
    )
}