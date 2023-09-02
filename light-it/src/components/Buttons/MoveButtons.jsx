import myImage from "../../images/logo.jpeg";

export default function MoveButtons() {
    const buttonsStyle = {
        width: '24px',
        height: '24px',
        padding: '0px'

    }
    return (
        <div className="">
            <div className="absolute right-0  p-4" style={{ bottom: '-60px' }}>
                <div className="arrow-button-row" style={{ marginBottom: '-10px', justifyContent: 'space-between', 'row-gap': 0 }}>
                    <button className="arrow-button">
                        <img src={myImage} alt="Up Arrow" style={buttonsStyle} />
                    </button>
                    <button className="arrow-button">
                        <img src={myImage} alt="Down Arrow" style={buttonsStyle} />
                    </button>
                </div>
                <div className="arrow-button-row" style={{ marginBottom: '0', justifyContent: 'space-between',  }}>
                    <button className="arrow-button">
                        <img src={myImage} alt="Left Arrow" style={buttonsStyle} />
                    </button>
                    <button className="arrow-button">
                        <img src={myImage} alt="Right Arrow" style={buttonsStyle} />
                    </button>
                </div>
            </div>
        </div>
    );
}