import {List, ListItem} from "@material-tailwind/react";
import React from "react";


export default function SideBarCollapsibleCategoryItem({item, selectedCategory}) {
    const fontStyle = {
        'fontSize': '0.60rem',
        marginTop: '4px'
    }

    return (
        <>
            <p className="text-xs text-left" style={{ fontSize: '0.5rem' }}>{"< " + selectedCategory}</p>
            <p className="font-bold text-left" style={{ marginTop: '8px' }}>{item.name}</p>

            <List className="flex flex-row justify-center h-full" style={{'pointer-events': 'none', marginTop: '8px'}}>
                {item.items.map((subitem, index) => (
                    <ListItem key={index} className="flex-col items-left" style={{disabled:true}}>
                        <img src={subitem.img} className="h-24 w-24"/>

                        <div className="text" style={fontStyle}>
                            {subitem.name}
                        </div>
                    </ListItem>
                ))}
            </List>
        </>
    )
}