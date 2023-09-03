import {Card, List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import React from "react";


export default function SideBarCollapsibleCategoryItem({item, selectedCategory}) {
    const fontStyle = {
        'fontSize': '0.60rem',
    }

    return (
        <>
            <p className="font-semibold text-left" style={{ fontSize: '0.5rem' }}>{"< " + selectedCategory}</p>
            <p className="font-bold text-left" style={{ marginTop: '8px' }}>{item.name}</p>

            <List className="flex flex-row justify-center h-full">
                {item.items.map((subitem, index) => (
                    <ListItem key={index} className="flex flex-col items-center">
                        <img src={subitem.img} className="h-25 w-20"/>

                        <div className="text-xs" style={fontStyle}>
                            {subitem.name}
                        </div>
                    </ListItem>
                ))}
            </List>
        </>
    )
}