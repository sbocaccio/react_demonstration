import React, { useState, useEffect } from 'react';
import CategoriesClient from './helpers/CategoriesClient';
import {SideBarItems} from "../../constants/SideBarItems";
import {ListItem, ListItemPrefix} from "@material-tailwind/react";
import Activo from '../../images/activo.png'

export default function SideBarCollapsibleCategory({selectedItem}) {
    const [items, setItems] = useState([]);
    const [itemSelected, setItemSelected] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const categoriesClient = new CategoriesClient();
            const itemToClientCalls= {
                [SideBarItems.Aberturas]: categoriesClient.getItemsForAberturas,
                [SideBarItems.Equipamiento]: categoriesClient.getItemsForEquipamiento,
                [SideBarItems.Terminaciones]: categoriesClient.getItemsForTerminaciones,
            };

            const clientCall = itemToClientCalls[selectedItem];
            try {
                const currentItems = await clientCall();
                setItems(currentItems);
            } catch (e) {
                console.error('Error fetching data'); // Should handle error properly.
            }
        };
        fetchData();
    }, [selectedItem]);


    return !itemSelected? (
        <>
            <p className="font-bold text-left">{selectedItem}</p>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <button
                        className="shadow-blue-gray-900/5 text-black active:bg-gray-300 text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mb-4 ease-linear transition-all duration-150 text-left flex items-center justify-between"
                        type="button"
                        onClick={() => { console.log(item); setItemSelected(item); }}
                    >
                        <div className="text-xs text-grey font-semibold">{item.name}</div>
                        <img
                            src={Activo}

                            className="ml-2 cursor-pointer w-3 h-3"
                            style={{ transform: 'rotate(180deg)' }}
                        />
                    </button>
                </React.Fragment>
            ))}
        </>
    ): null;
}