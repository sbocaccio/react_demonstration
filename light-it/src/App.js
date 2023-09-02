import logo from './logo.svg';
import './App.css';
import myImage from './images/logo.jpeg';
import aberturas from './images/Aberturas.png';
import equipamiento from './images/Equipamiento.png';
import terminaciones from './images/Terminaciones.png';
import activo from './images/activo.png'
import {useState} from "react";

import activo_derecha from './images/activo_derecha.png';
import SignoMas from './images/SignoMas.png'
import SignoMenos from './images/SignoMenos.png'
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
import { Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function App() {
  return (

    <div className="App">
        <div style={{ backgroundColor:'#efefef'}}> {/* Set your desired background color here */}
            {/* Your content goes here */}

            <TopBar/>
      {/*<header className="App-header">*/}
            <FijarButton/>
            <CustomArrowButtons/>
            <CustomArrowButtons2/>



            <DefaultSidebar/>
            {/*<FijarButton/>*/}


            {/*<PlusMinusButton/>*/}


        {/*<Expansible/>*/}

      {/*</header>*/}
        </div>
    </div>
  );
}

function CustomArrowButtons() {
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
};

function CustomArrowButtons2() {
    const buttonsStyle = {
        width: '24px',
        height: '24px',
        padding: '0px'
    }
    return (
        <div className="">
            <div className="absolute p-4" style={{ bottom: '-60px', right: '60px' }}>
                <div className="arrow-button-row" style={{ marginBottom: '-10px', justifyContent: 'center', 'row-gap': 0 }}>
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
};

function Trapezoid() {
    const containerStyle = {
        position: 'relative',
        height: '100vh', // Adjust the height as needed
        display: 'flex',
        justifyContent: 'flex-end', // Align to the right
        alignItems: 'center', // Center vertically

    };

    const imageContainerStyle = {
        position: 'absolute', // Set to absolute positioning
        right: '0', // Align to the right
        transform: 'translateY(30%)', // Center vertically
    };

    const imageStyle = {
        transform: 'rotate(-90deg)', // Rotate the image back by -90 degrees
        width: '50%', // Make sure the image fits within the container
        height: 'auto', // Maintain aspect ratio
    };


    const trapezoidStyle = {
        position: 'absolute',
        top: '300px',
        right: '-54px', // Adjust this value for precise positioning
        transformOrigin: 'top right',
        transform: 'rotate(90deg)', // Rotate by 90 degrees
        borderBottom: '30px solid #f7f7f7', // Adjust height here
        borderLeft: '15px solid transparent', // Adjust width here
        borderRight: '15px solid transparent', // Adjust width here
        height: '0',
        width: '80px', // Adjust width here
    };

    return (
        <div style={containerStyle}>
            <div style={trapezoidStyle}>
                <div style={imageContainerStyle} >
                    <img src={activo} style={imageStyle}/>
                </div>
            </div>
        </div>
    );
};

function FijarButton() {
    return (
        <div className="relative">
            <div className="absolute right-0 p-4">
                <button className="bg-white text-black px-7 py-2 rounded mb-2" style={{margin: '1em'}}>Fijar</button>
                <button className="bg-white text-black px-7 py-2 rounded mb-2">Borrar</button>
            </div>
        </div>
    );
}


const TopBar = () => {
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



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function SaveDropDown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
        <div className="flex">

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

            <Card className="h-[calc(100vh-2rem)] w-full max-w-[30rem] p-6 shadow-xl bg-gray-100">
                <p className="font-bold text-left">Aberturas</p>

                <button
                    className="shadow-blue-gray-900/5 text-black active:bg-gray-300 text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mb-4 ease-linear transition-all duration-150 text-left flex items-center justify-between"
                    type="button"
                >
                    <div className="text-xs text-grey font-semibold">Ventanas</div>
                    <img
                        src={activo_derecha}
                        alt="Image Description"
                        onClick={() => {
                            console.log('algo')
                        }}
                        className="ml-2 cursor-pointer w-3 h-3"
                    />
                </button>
                <button
                    className="shadow-blue-gray-900/5 text-black active:bg-gray-300 text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mb-4 ease-linear transition-all duration-150 text-left flex items-center justify-between"
                    type="button"
                >
                    <div className="text-xs text-grey font-semibold">Ventanas</div>
                    <img
                        src={activo_derecha}
                        alt="Image Description"
                        onClick={() => {
                            console.log('algo')
                        }}
                        className="ml-2 cursor-pointer w-3 h-3"
                    />
                </button>
                <Trapezoid/>
            </Card>
        </div>
    );
}

export default App;
