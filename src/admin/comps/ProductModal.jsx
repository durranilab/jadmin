import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TextInput from "./TextInput";
import axios from "axios";
import products from "../pages/Products";


const ProductModal = ({isOpen = false, closeModal, product = {}, onSuccess}) => {

    const [currentProduct, setCurrentProduct] = useState(product)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        setCurrentProduct(product)
    }, [product])

    const saveCustomer = () => {
        axios.post('http://127.0.0.1:8000/api/products/add', currentProduct).then((res) => {
            onSuccess(products)
        }).catch((err) => {
          //  setErrors(err.response.data)
            console.log(err)
        })
    }

    const updateCustomer = (customer) => {
        axios.post('http://127.0.0.1:8000/api/products/update', {
            name: customer.name,
            description: customer.description,
            image: customer.image,
            price: customer.price,
            id: customer.id
        }).then((res) => {
            onSuccess(customer)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log(currentProduct)
    }, [currentProduct])

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
                                    Add Product

                                    <div className={'bg-red-300'}>
                                        {errors.price && <p>{errors.price[0]}</p>}
                                        {errors.name && <p>{errors.name[0]}</p>}
                                    </div>

                                </Dialog.Title>
                                <div className="mt-2">

                                    {/*Content*/}

                                    <div className={'flex gap-2 flex-wrap'}>

                                        <TextInput name={'name'}
                                                   label={'Name'}
                                                   value={currentProduct.name}
                                                   placeholder={'Name'}
                                                   onChange={(e) => {
                                                       setCurrentProduct({...currentProduct, 'name': e.target.value})
                                                   }}/>


                                        <TextInput name={'price'}
                                                   type={'number'}
                                                   label={'Price'}
                                                   value={currentProduct.price}
                                                   placeholder={'Price'}
                                                   onChange={(e) => {
                                                       setCurrentProduct({...currentProduct, 'price': e.target.value})
                                                   }}/>


                                        <TextInput name={'image'}
                                                   label={'Image'}
                                                   value={currentProduct.image}
                                                   placeholder={'Image'}
                                                   onChange={(e) => {
                                                       setCurrentProduct({...currentProduct, 'image': e.target.value})
                                                   }}/>


                                        <textarea name={'description'}
                                                   label={'Description'}
                                                   value={currentProduct.description}
                                                   placeholder={'Description'}
                                                   onChange={(e) => {
                                                       setCurrentProduct({...currentProduct, 'description': e.target.value})
                                                   }}/>

                                    </div>


                                </div>

                                <div className="border-t py-4 flex gap-2 justify-between mt-4">

                                    {product.name === '' ? <PrimaryButton text={'Save'} onClick={() => {
                                        saveCustomer()
                                    }}/> : <PrimaryButton text={'Update'} onClick={() => {
                                        updateCustomer(currentProduct)
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

export default ProductModal;
