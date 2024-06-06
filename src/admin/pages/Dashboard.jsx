import React from 'react';
import {AcademicCap, Archive} from "heroicons-react";

const Dashboard = () => {
    return (
        <div>

            <div className={'bg-white p-4 max-w-sm rounded'}>
                <div className={'text-xl text-center'}>Card Title</div>
                <div className={'mt-2 flex gap-1 text-sm items-center'}>
                    <AcademicCap className={'z-50'}/>
                    <div className={'z-50'}>Card Content</div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
