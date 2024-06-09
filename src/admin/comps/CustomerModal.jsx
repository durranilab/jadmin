import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TextInput from "./TextInput";
import axios from "axios";


const CustomerModal = ({isOpen = false, closeModal, customer = {}, onSuccess}) => {

    const [currentCustomer, setCurrentCustomer] = useState(customer)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        setCurrentCustomer(customer)
    }, [customer])

    const saveCustomer = () => {
        axios.post('http://127.0.0.1:8000/api/addcustomer', currentCustomer).then((res) => {
            onSuccess(customer)
        }).catch((err) => {
            setErrors(err.response.data)
            console.log(err.response.data)
        })
    }

    const updateCustomer = (customer) => {
        axios.post('http://127.0.0.1:8000/api/updatecustomer', {
            name: customer.name,
            phone: customer.phone,
            email: customer.email,
            address: customer.address,
            pinCode: customer.pinCode,
            city: customer.city,
            state: customer.state,
            id: customer.id
        }).then((res) => {
            onSuccess(customer)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log(currentCustomer)
    }, [currentCustomer])

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {
            }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 border-b py-2"
                                >
                                    Add Customer

                                    <div className={'bg-red-300'}>
                                        {errors.email && <p>{errors.email[0]}</p>}
                                        {errors.name && <p>{errors.name[0]}</p>}
                                    </div>

                                </Dialog.Title>
                                <div className="mt-2">

                                    {/*Content*/}

                                    <div className={'flex gap-2 flex-wrap'}>

                                        <TextInput name={'name'}
                                                   label={'Name'}
                                                   value={currentCustomer.name}
                                                   placeholder={'Name'}
                                                   onChange={(e) => {
                                                       setCurrentCustomer({...currentCustomer, 'name': e.target.value})
                                                   }}/>

                                        <TextInput name={'phone'}
                                                   label={'Phone'}
                                                   value={currentCustomer.phone}
                                                   placeholder={'Phone'}
                                                   onChange={(e) => {
                                                       setCurrentCustomer({...currentCustomer, 'phone': e.target.value})
                                                   }}/>

                                        <TextInput name={'email'}
                                                   label={'Email'}
                                                   value={currentCustomer.email}
                                                   type={'email'}
                                                   placeholder={'Email'}
                                                   onChange={(e) => {
                                                       setCurrentCustomer({...currentCustomer, 'email': e.target.value})
                                                   }}/>

                                        <TextInput name={'address'}
                                                   label={'Address'}
                                                   value={currentCustomer.address}
                                                   placeholder={'Address'}
                                                   onChange={(e) => {
                                                       setCurrentCustomer({
                                                           ...currentCustomer,
                                                           'address': e.target.value
                                                       })
                                                   }}/>

                                        <TextInput name={'pinCode'}
                                                   label={'Pin Code'}
                                                   value={currentCustomer.pinCode}
                                                   placeholder={'Pin Code'}
                                                   onChange={(e) => {
                                                       setCurrentCustomer({
                                                           ...currentCustomer,
                                                           'pinCode': e.target.value
                                                       })
                                                   }}/>

                                        <TextInput name={'city'}
                                                   label={'City'}
                                                   value={currentCustomer.city}
                                                   placeholder={'City'}
                                                   onChange={(e) => {
                                                       setCurrentCustomer({...currentCustomer, 'city': e.target.value})
                                                   }}/>

                                        <TextInput name={'state'}
                                                   label={'State'}
                                                   value={currentCustomer.state}
                                                   placeholder={'State'}
                                                   onChange={(e) => {
                                                       setCurrentCustomer({...currentCustomer, 'state': e.target.value})
                                                   }}/>

                                    </div>


                                </div>

                                <div className="border-t py-4 flex gap-2 justify-between mt-4">

                                    {customer.name === '' ? <PrimaryButton text={'Save'} onClick={() => {
                                        saveCustomer()
                                    }}/> : <PrimaryButton text={'Update'} onClick={() => {
                                        updateCustomer(currentCustomer)
                                    }}/>}
                                    <SecondaryButton text={'Cancel'} onClick={closeModal}/>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CustomerModal;
