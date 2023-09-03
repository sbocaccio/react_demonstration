import Flechas from "../../images/4Flechas.png";

export default function MoveButtons() {
    const buttonsStyle = {
        width: '50px',
        height: '50px',
        padding: '0px'

    }
    const handleButtonClick = (event) => {
        const buttonRect = event.target.getBoundingClientRect();
        const x = event.clientX - buttonRect.left;
        const y = event.clientY - buttonRect.top;
        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;
        const windowWidth = window.innerWidth;

        if (x < buttonWidth / 2 && y < buttonHeight / 3) {
            console.log('Clickeaste Arriba');
        } else if (x > buttonWidth / 2 && y <= (2 / 3) * buttonHeight) {
            console.log('Clickeaste Derecha');
        } else if (x <= buttonWidth / 2 && y >= buttonHeight / 3 && y <= (2 / 3) * buttonHeight && x <= windowWidth / 2) {
            console.log('Clickeaste Izquierda');
        } else{
            console.log('Clickeaste Abajo');
        }
    };

    return (
        <div className="">
            <div className="absolute right-0  p-4" style={{ bottom: '-60px' }}>
                    <button className="arrow-button" onClick={handleButtonClick}>
                        <img src={Flechas} alt="Left Arrow" style={buttonsStyle} />
                    </button>
            </div>
        </div>
    );
}