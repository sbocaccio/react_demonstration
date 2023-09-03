import React from "react";
import Activo from "../../images/activo.png";

export default function SideBarCollapsibleCategoryItems({items, selectedCategory, setSelectedItem}){
    return (<>
        <p className="font-bold text-left">{selectedCategory}</p>
        {items.map((item, index) => (
            <React.Fragment key={index}>
                <button
                    className="shadow-blue-gray-900/5 text-black active:bg-gray-300 text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mb-4 ease-linear transition-all duration-150 text-left flex items-center justify-between"
                    type="button"
                    onClick={() => {setSelectedItem(item); }}
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
    )
}