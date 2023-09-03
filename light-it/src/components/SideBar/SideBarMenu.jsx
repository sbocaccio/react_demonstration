import {Card, List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import aberturas from "../../images/Aberturas.png";
import equipamiento from "../../images/Equipamiento.png";
import terminaciones from "../../images/Terminaciones.png";
import { SideBarItems } from '../../constants/SideBarItems';

export default function SideBarMenu({setSelectedItem}) {

    const menuItems = [{image: aberturas, text: SideBarItems.Aberturas }, {image: equipamiento, text: SideBarItems.Equipamiento }, {image: terminaciones, text: SideBarItems.Terminaciones}]

    const fontStyle = {
        'fontSize': '0.60rem',
        'lineHeight': '1rem'
    }
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[6rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <List className="flex flex-col justify-center h-full">
                {menuItems.map((menuItem, index) => (
                    <ListItem key={index} className="flex flex-col items-center" onClick={()=>{
                        setSelectedItem(menuItems[index].text)} }>
                        <ListItemPrefix>
                            <img src={menuItem.image} className="h-6 w-6"/>
                        </ListItemPrefix>
                        <div className="text-xs" style={fontStyle}>
                            {menuItem.text}
                        </div>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}