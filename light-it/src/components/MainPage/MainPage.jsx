import TopBar from "../TopBar/TopBar";
import ActionBar from "../ActionBar/ActionBar";
import MoveButtons from "../Buttons/MoveButtons";
import ZoomButtons from "../Buttons/ZoomButtons";
import Sidebar from "../SideBar/SideBar";

export default function MainPage(){
    const BACKGROUND_COLOR = '#efefef';
    return (
    <div style={{ backgroundColor: BACKGROUND_COLOR}}>
        <TopBar/>
        <ActionBar/>
        <MoveButtons/>
        <ZoomButtons/>
        <Sidebar/>
    </div>
    )
}