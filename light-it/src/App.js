import logo from './logo.svg';
import './App.css';
import myImage from './images/logo.jpeg';
import aberturas from './images/Aberturas.png';
import equipamiento from './images/Equipamiento.png';
import terminaciones from './images/Terminaciones.png';
import {useState} from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";


function App() {
  return (
    <div className="App">
      <TopBar/>
      {/*<header className="App-header">*/}
        <FijarButton/>

        <DefaultSidebar/>

        <FijarButton/>

        {/*<Expansible/>*/}

      {/*</header>*/}
    </div>
  );
}


function FijarButton() {
    return (
        <div className="relative">
            <div className="absolute top-0 right-0 p-4">
                <button className="bg-white text-black px-4 py-2 rounded mb-2" style={{margin: '1em'}}>Fijar</button>
                <button className="bg-white text-black px-4 py-2 rounded mb-2">Borrar</button>
            </div>
        </div>
    );
}

const TopBar = () => {
    const topBarStyle = {
        backgroundColor: '#333333', // Set the background color to #333333
        color: 'white', // Set the text color to white or any desired color

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



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function SaveDropDown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Guardar y salir
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

                </Menu.Button>
            </div>

                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Guardar y salir
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Salir sin guardar
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type="submit"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    Guardar y continuar
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
        </Menu>
    )
}


function DefaultSidebar() {
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
    );
}

function Expansible() {
    const [openSubmenu, setOpenSubmenu] = useState('ecommerce');

    const handleItemClick = (item) => {
        if (openSubmenu === item) {
            // If the same item is clicked again, close the submenu
            setOpenSubmenu(null);
        } else {
            // Open the submenu for the clicked item
            setOpenSubmenu(item);
        }
    };

    return (
        <div className="bg-gray-900 text-white h-screen w-1/4">
            <ul className="py-4">
                <li
                    className={`px-4 py-2 cursor-pointer ${
                        openSubmenu === 'dashboard' ? 'bg-blue-500' : ''
                    }`}
                    onClick={() => handleItemClick('dashboard')}
                >
                    Dashboard
                </li>
                <li
                    className={`px-4 py-2 cursor-pointer ${
                        openSubmenu === 'ecommerce' ? 'bg-blue-500' : ''
                    }`}
                    onClick={() => handleItemClick('ecommerce')}
                >
                    E-Commerce
                </li>
                {/* Add more items here */}
            </ul>
            {openSubmenu === 'dashboard' && (
                <div className="bg-gray-800 p-4">
                    {/* Content for the Dashboard submenu */}
                </div>
            )}
            {openSubmenu === 'ecommerce' && (
                <div className="bg-gray-800 p-4">
                    {/* Content for the E-Commerce submenu */}
                </div>
            )}
            {/* Add more submenu content as needed */}
        </div>
    );
}

export default App;
