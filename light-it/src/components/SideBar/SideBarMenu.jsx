import {Card, List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import aberturas from "../../images/Aberturas.png";
import equipamiento from "../../images/Equipamiento.png";
import terminaciones from "../../images/Terminaciones.png";
import { SideBarItems } from '../../constants/SideBarItems';
import {useEffect} from "react";

export default function SideBarMenu({setSelectedCaterogy, setClickedOnCategory}) {

    useEffect(() => {
        setClickedOnCategory(false);
    })

    const menuCategories = [{image: aberturas, text: SideBarItems.Aberturas }, {image: equipamiento, text: SideBarItems.Equipamiento }, {image: terminaciones, text: SideBarItems.Terminaciones}]
    const fontStyle = {
        'fontSize': '0.60rem',
        'lineHeight': '1rem'
    }


    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[6rem] p-1 shadow-xl shadow-blue-gray-900/5">
            <List className="flex flex-col justify-center h-full">
                {menuCategories.map((menuItem, index) => (
                    <ListItem key={index} className="flex-col items-center" style={{marginTop: '5px'}} onClick={()=>{
                        setClickedOnCategory(true);
                        setSelectedCaterogy(menuCategories[index].text)} }>
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