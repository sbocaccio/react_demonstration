import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function SaveDropDown() {
    const menuItems = [
        { label: "Guardar y salir"},
        { label: "Salir sin guardar"},
        { label: "Guardar y continuar"},
    ];

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
                    {menuItems.map((item, index) => (
                        <Menu.Item key={index}>
                            {({ active }) =>
                                    <button
                                        type="submit"
                                        className={`block w-full px-4 py-2 text-left text-sm text-gray-700`}
                                    >
                                        {item.label}
                                    </button>
                            }
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Menu>
    );
}