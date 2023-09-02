import {Card, List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import aberturas from "../../images/Aberturas.png";
import equipamiento from "../../images/Equipamiento.png";
import terminaciones from "../../images/Terminaciones.png";

export default function SideBarMenu() {
    const fontStyle = {
        'font-size': '0.60rem',
        'line-height': '1rem'
    }
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[6rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <List className="flex flex-col justify-center h-full">
                <ListItem className="flex flex-col items-center">
                    <ListItemPrefix>
                        <img src={aberturas} alt="My Image" className="h-6 w-6" />
                    </ListItemPrefix>
                    <div className="text-xs" style={fontStyle}>Aberturas</div>
                </ListItem>
                <ListItem className="flex flex-col items-center">
                    <ListItemPrefix>
                        <img src={equipamiento} alt="My Image" className="h-6 w-6" />
                    </ListItemPrefix>
                    <div className="text-xs" style={fontStyle}>Equipamiento</div>

                </ListItem>
                <ListItem className="flex flex-col items-center ">
                    <ListItemPrefix>
                        <img src={terminaciones} alt="My Image" className="h-6 w-6" />
                    </ListItemPrefix>
                    <div className="text-xs" style={fontStyle}>Terminaciones</div>
                </ListItem>
            </List>
        </Card>
    )
}