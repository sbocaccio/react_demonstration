export default function ActionBar(){
    return (
        <div className="relative">
            <div className="absolute right-0 p-4">
                <button className="bg-white text-black px-7 py-2 rounded mb-2" style={{margin: '1em'}} onClick={() => {console.log('Click Fijar')}}>Fijar</button>
                <button className="bg-white text-black px-7 py-2 rounded mb-2" onClick={() => {console.log('Click Borrar')}}>Borrar</button>
            </div>
        </div>
    );
}