import React, {Fragment, useContext, useEffect} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TextInput from "./TextInput";


const CustomerModal = ({isOpen = false, closeModal, customer = {}, onSuccess}) => {

    useEffect(() => {
        if (isOpen) {
            customer.name = ''
            customer.phone = ''
            customer.email = ''
            customer.address = ''
            customer.pinCode = ''
            customer.city = ''
            customer.state = ''
        }
    }, [isOpen])

    const saveCustomer = () => {
        console.log(customer)
        onSuccess(customer)
    }

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

                                </Dialog.Title>
                                <div className="mt-2">

                                    {/*Content*/}

                                    <div className={'flex gap-2 flex-wrap'}>

                                        <TextInput name={'name'}
                                                   label={'Name'}
                                                   value={customer.name}
                                                   placeholder={'Name'}
                                                   onChange={(e) => {
                                                       customer.name = e.target.value
                                                   }}/>

                                        <TextInput name={'phone'}
                                                   label={'Phone'}
                                                   value={customer.phone}
                                                   placeholder={'Phone'}
                                                   onChange={(e) => {
                                                       customer.phone = e.target.value
                                                   }}/>

                                        <TextInput name={'email'}
                                                   label={'Email'}
                                                   value={customer.email}
                                                   placeholder={'Email'}
                                                   onChange={(e) => {
                                                       customer.email = e.target.value
                                                   }}/>

                                        <TextInput name={'address'}
                                                   label={'Address'}
                                                   value={customer.address}
                                                   placeholder={'Address'}
                                                   onChange={(e) => {
                                                       customer.address = e.target.value
                                                   }}/>

                                        <TextInput name={'pinCode'}
                                                   label={'Pin Code'}
                                                   value={customer.pinCode}
                                                   placeholder={'Pin Code'}
                                                   onChange={(e) => {
                                                       customer.pinCode = e.target.value
                                                   }}/>

                                        <TextInput name={'city'}
                                                   label={'City'}
                                                   value={customer.city}
                                                   placeholder={'City'}
                                                   onChange={(e) => {
                                                       customer.city = e.target.value
                                                   }}/>

                                        <TextInput name={'state'}
                                                   label={'State'}
                                                   value={customer.state}
                                                   placeholder={'State'}
                                                   onChange={(e) => {
                                                       customer.state = e.target.value
                                                   }}/>


                                    </div>


                                </div>

                                <div className="border-t py-4 flex gap-2 justify-between mt-4">
                                    <PrimaryButton text={'Save'} onClick={() => {
                                        saveCustomer()
                                    }}/>
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
