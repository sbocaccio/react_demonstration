import {Card, List, ListItem, ListItemPrefix} from "@material-tailwind/react";


export default function SideBarCollapsibleCategoryItem({item, selectedCategory}) {

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[6rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <List className="flex flex-col justify-center h-full">
                {item.items.map((subitem, index) => (
                    <ListItem key={index} className="flex flex-col items-center" onClick={()=>{}}>
                        <ListItemPrefix>
                        Aca estoy
                        </ListItemPrefix>
                    </ListItem>
                ))}
            </List>
        </Card>
    )

}