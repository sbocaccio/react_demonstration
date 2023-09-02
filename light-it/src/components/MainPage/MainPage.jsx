import TopBar from "../TopBar/TopBar";
import ActionBar from "../ActionBar";
import MoveButtons from "../Buttons/MoveButtons";
import ZoomButtons from "../Buttons/ZoomButtons";
import Sidebar from "../SideBar/SideBar";

export default function MainPage(){
    return (
    <div style={{ backgroundColor:'#efefef'}}>
        <TopBar/>
        <ActionBar/>
        <MoveButtons/>
        <ZoomButtons/>
        <Sidebar/>
    </div>
    )
}