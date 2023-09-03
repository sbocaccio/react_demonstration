import Activo from "../../images/activo.png";

export default function CloseSideBarButton({setSelectedCaterogy}) {
        const containerStyle = {
            position: 'absolute',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        };

        const imageContainerStyle = {
            position: 'absolute',
            right: '0',
            transform: 'translateY(30%)',
        };

        const imageStyle = {
            transform: 'rotate(-90deg)',
            width: '50%',
            height: 'auto',
        };

        const CloseSideBarButtonStyle = {
            position: 'absolute',
            top: '400px',
            right: '-486px',
            transformOrigin: 'top right',
            transform: 'rotate(90deg)',
            borderBottom: '30px solid #f7f7f7',
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            height: '0',
            width: '80px',
        };

        return (
            <div style={containerStyle}>
                <div style={CloseSideBarButtonStyle}>
                    <button style={imageContainerStyle} onClick={() => {setSelectedCaterogy(null)}}>
                        <img src={Activo} style={imageStyle}/>
                    </button>
                </div>
            </div>
        );
}
