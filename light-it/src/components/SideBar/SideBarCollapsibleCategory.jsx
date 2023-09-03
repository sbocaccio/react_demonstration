import React, { useState, useEffect } from 'react';
import CategoriesClient from './helpers/CategoriesClient';
import {SideBarItems} from "../../constants/SideBarItems";
import SideBarCollapsibleCategoryItem from "./SideBarCollapsibleCategoryItem";
import SideBarCollapsibleCategoryItems from "./SideBarCollapsibleCategoryItems";

export default function SideBarCollapsibleCategory({selectedCategory, clickedOnCategory }) {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)


    useEffect(() => {
        setSelectedItem(null);

        const fetchData = async () => {
            const categoriesClient = new CategoriesClient();
            const itemToClientCalls= {
                [SideBarItems.Aberturas]: categoriesClient.getItemsForAberturas,
                [SideBarItems.Equipamiento]: categoriesClient.getItemsForEquipamiento,
                [SideBarItems.Terminaciones]: categoriesClient.getItemsForTerminaciones,
            };

            const clientCall = itemToClientCalls[selectedCategory];
            try {
                const currentItems = await clientCall();
                setItems(currentItems);
            } catch (e) {
                console.error('Error fetching data'); // Should handle error properly.
            }
        };
        fetchData();
    }, [clickedOnCategory]);


    return !selectedItem? ( // TODO: Show a Spinner while fetching data.
        <SideBarCollapsibleCategoryItems items={items} setSelectedItem={setSelectedItem} selectedCategory={selectedCategory}/>
    ): <SideBarCollapsibleCategoryItem item={selectedItem} selectedCategory={selectedCategory}/>;
}
