'use client'

import Link from 'next/link';
import { BsPlus, BsGearFill, BsFillPersonFill } from 'react-icons/bs';
import { FaFire, FaBug, FaLightbulb, FaBookOpen, FaTools } from 'react-icons/fa';
import { GiPodium } from 'react-icons/gi';
import { Fragment, useState } from 'react';
import Modal from './Modal';
import Switch from './Switch';

const SideBar = () => {
    const menuItems = [
        { href: "/content", icon: <FaBookOpen size="20" />, subItems: ["units", "items", "augments", "portals", "traits", "legends"] },
        { href: "/tips", icon: <FaLightbulb size="20" />, subItems: ["beginner", "advanced"] },
        { href: "/bugs", icon: <FaBug size="20" />, subItems: ["current", "report"] },
        { href: "/player", icon: <GiPodium size="20" />, subItems: ["leaderboards", "rising"] },
        { href: "/tools", icon: <FaTools size="20" />, subItems: ["team planner", "tables", "shop sim", "archive"] }
    ];
    const [showModal, setModal] = useState(false);

    return (
        <Fragment>
            <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-light-accent text-white shadow-lg">
                <Link href="/">
                    <div className="sidebar-icon">
                        <FaFire size="28" />
                    </div>
                </Link>
                {menuItems.map((item) => (
                    <div className='relative flex group' key={item.href}>
                        <Link href={item.href}>
                            <div className="sidebar-icon-menu group">
                                {item.icon}
                            </div>
                        </Link>
                        <div className="sidebar-menu group-hover:w-32">
                            {item.subItems.map((subItem) => (
                                <Link className="sidebar-link group-hover:w-32" href={`${item.href}/${subItem}`} key={subItem}>{subItem.toUpperCase()}</Link>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="sidebar-icon absolute bottom-0 group hover:cursor-pointer" onClick={() => setModal(true)}>
                    <BsGearFill size="22" />
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setModal(false)} title="Settings">
                <div className='flex'>Hello</div>
                
                <label htmlFor="countries" className="block mb-2 text-sm font-medium">Theme</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>

            </Modal>
        </Fragment>
        
    )
};

export default SideBar;
