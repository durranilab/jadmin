import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Briefcase, ChartSquareBar, Cog, Logout,
    ShoppingCart,
    UserGroup
} from "heroicons-react";
import MenuItems from "../comps/MenuItems";
import TextInput from "../comps/TextInput";
import Dashboard from "./Dashboard";

const Navigation = () => {

    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const menuItems = [
        {
            title: 'Dashboard',
            icon: <ChartSquareBar/>,
            onClick: () => {
            },
            link: "/admin",
            isActive: true
        },
        {
            title: 'Customers',
            icon: <UserGroup/>,
            onClick: () => {
            },
            link: "/admin/customers",
            isActive: true
        },
        {
            title: 'Orders',
            icon: <ShoppingCart/>,
            onClick: () => {
            },
            link: "/admin/orders",
            isActive: false
        },
        {
            title: 'Products',
            icon: <Briefcase/>,
            onClick: () => {
            },
            link: "/admin/products",
            isActive: false
        },
        {
            title: 'Settings',
            icon: <Cog/>,
            onClick: () => {
            },
            link: "/admin/settings",
            isActive: false
        },

    ]

    return (
        <div className={'flex'}>

            <div
                className={showSidebar ? 'transition-all w-64  h-screen' : 'transition-all -translate-x-60 w-0  h-screen'}>
                <div className={'p-6 text-3xl font-bold flex items-center gap-1'}>
                    J<span className={'text-indigo-500'}>ADMIN</span>

                    <ArrowLeft className={'transition-all w-12 h-8 cursor-pointer'} onClick={toggleSidebar}/>
                </div>

                {menuItems.map((item) =>
                    <MenuItems
                        key={item.title}
                        icon={item.icon}
                        onClick={item.onClick()}
                        title={item.title}
                        link={item.link}
                        isActive={item.isActive}
                    />
                )}

                <MenuItems
                    icon={<Logout/>}
                    onClick={() => {
                    }}
                    title={'Logout'}
                    isActive={false}
                />


            </div>

            <div className={'flex-1 bg-gray-100 '}>
                <ArrowRight className={showSidebar ? 'hidden' : 'absolute transition-all w-12 h-12 cursor-pointer m-4'}
                            onClick={toggleSidebar}/>

                <div className={'h-20 bg-white'}>

                    <div className={'p-6'}>
                        <TextInput
                            name={'search'}
                            id={'search'}
                            type={'text'}
                            placeholder={'Search...'}
                        />


                    </div>

                </div>

                <div className={'p-6'}>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default Navigation;
