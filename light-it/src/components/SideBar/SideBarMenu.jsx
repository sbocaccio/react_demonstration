import {Card, List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import aberturas from "../../images/Aberturas.png";
import equipamiento from "../../images/Equipamiento.png";
import terminaciones from "../../images/Terminaciones.png";
import Client from "../../utils/Client";

export default function SideBarMenu() {

    const client = new Client()
    const aberturasContent = client.fetchAberturas();
    const menuItems = [{image: aberturas, text: 'Aberturas'}, {image: equipamiento, text: 'Equipamiento' }, {image: terminaciones, text: 'Terminaciones'}]

    const fontStyle = {
        'font-size': '0.60rem',
        'line-height': '1rem'
    }
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[6rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <List className="flex flex-col justify-center h-full">
                {menuItems.map((menuItem, index) => (
                    <ListItem key={index} className="flex flex-col items-center">
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