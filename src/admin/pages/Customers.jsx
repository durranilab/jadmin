import React, {useState} from 'react';
import PrimaryButton from "../comps/PrimaryButton";
import {Pencil, Trash} from "heroicons-react";
import CustomerModal from "../comps/CustomerModal";
import AlertModal from "../comps/AlertModal";

const Customers = () => {

    const [customerData, setCustomerData] = useState([
        {
            id: 1,
            name: 'Name',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            pinCode: 'Pin Code',
            city: 'City',
            state: 'State',
        },
        {
            id: 2,
            name: 'Name',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            pinCode: 'Pin Code',
            city: 'City',
            state: 'State',
        },
        {
            id: 3,
            name: 'Name',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            pinCode: 'Pin Code',
            city: 'City',
            state: 'State',
        }
    ])
    const [openModal, setModal] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        pinCode: '',
        city: '',
        state: '',
    })

    const [openAlert, setAlert] = useState(false);

    const startDelete = (customer) => {
        setAlert(true)
    }


    const onSuccess = (customer) => {
        setCustomerData([...customerData, customer])
        setModal(false)
    }

    const startEdit = (customer) => {
        setCurrentCustomer(customer)
        setModal(true)
    }

    return (
        <div className={'flex flex-col'}>

            <CustomerModal
                isOpen={openModal}
                closeModal={() => setModal(false)}
                onSuccess={(customer) => onSuccess(customer)}
                customer={currentCustomer}
            />

            <AlertModal closeModal={() => {
                setAlert(false)
            }}
                        isOpen={() => {
                            setAlert(true)
                        }}
                        title={"Confirm Delete"}
                        message={"Are you sure you want to delete this customer"}
                        onConfirm={() => {
                        }}/>

            <div className={'ml-auto m-2'}>
                <PrimaryButton text={'Add Customer'} onClick={() => {
                    setModal(true)
                }}/>
            </div>

            <div>
                <table className="table-auto w-full text-left">
                    <thead>
                    <tr className={'bg-gray-200'}>
                        <th className={'p-2'}>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Pin Code</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody className={'bg-white'}>
                    {customerData.map((item) =>
                        <tr key={item.id}>
                            <td className={'p-2'}>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.pinCode}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td className={'flex gap-2'}>
                                <Pencil className={'text-blue-500 cursor-pointer'} onClick={() => {
                                    startEdit(item)
                                }}/>
                                <Trash className={'text-red-500 cursor-pointer'}/>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Customers;
