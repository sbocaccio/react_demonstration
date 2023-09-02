import myImage from "../../images/logo.jpeg";
import SaveDropDown from "./SaveDropDown";

export default function TopBar(){
    const topBarStyle = {
        backgroundColor: '#333333',
        color: 'white',
    };

    return (
        <div className="bg-gray-800 text-white py-2" style={topBarStyle}>
            <div className="container mx-auto py-2 flex justify-between items-center" >
                <img src={myImage} alt="My Image" className="max-w-xs h-auto" />
                <SaveDropDown/>
            </div>
        </div>
    );
};