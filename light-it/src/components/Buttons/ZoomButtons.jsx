import SignoMas from "../../images/SignoMas.png";
import SignoMenos from "../../images/SignoMenos.png";

export default function ZoomButtons() {
        const buttonsStyle = {
            width: '24px',
            height: '24px',
            padding: '0px'
        }
        return (
            <div className="">
                <div className="absolute p-4" style={{ bottom: '-60px', right: '60px' }}>
                    <div className="arrow-button-row" style={{ marginBottom: '-10px', justifyContent: 'center'}}>
                        <button className="arrow-button">
                            <img src={SignoMas} alt="Up Arrow" style={buttonsStyle} />
                        </button>
                    </div>
                    <div className="arrow-button-row" style={{ marginBottom: '0', justifyContent: 'center',  }}>
                        <button className="arrow-button">
                            <img src={SignoMenos} alt="Left Arrow" style={buttonsStyle} />
                        </button>
                    </div>
                </div>
            </div>
        );
}