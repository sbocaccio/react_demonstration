import logo from './logo.svg';
import './App.css';
import myImage from './images/logo.jpeg';
import { Select, Option } from "@material-tailwind/react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function App() {
  return (
    <div className="App">
      <TopBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chupame la ponga <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const TopBar = () => {
    return (
        <div className="bg-gray-800 text-white py-2">
            <div className="container mx-auto py-2 flex justify-between items-center">
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

export default App;
