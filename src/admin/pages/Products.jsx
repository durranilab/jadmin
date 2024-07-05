import React, {useEffect, useState} from 'react';
import {AcademicCap, Archive} from "heroicons-react";
import PrimaryButton from "../comps/PrimaryButton";
import CustomerModal from "../comps/CustomerModal";
import ProductModal from "../comps/ProductModal";
import axios from "axios";
import ProductCard from "../comps/ProductCard";

const Products = () => {

    const [openModal, setModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({
        name: '',
        description: '',
        image: '',
        price: 0,
    })
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.post('http://127.0.0.1:8000/api/products/get').then((res) => {
            setProducts(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>

            <ProductModal
                isOpen={openModal}
                closeModal={() => setModal(false)}
                onSuccess={(customer) => {
                    setModal(false)
                    getProducts()
                }}
                product={currentProduct}
            />

            <div className={'flex justify-end p-4 '}>
                <PrimaryButton text={'Create Product'} onClick={() => setModal(true)}/>
            </div>

            <div className={'bg-white p-4 rounded'}>
                <div className={'p-2 grid md:grid-cols-4 sm:grid-cols-3 gap-4'}>

                    {products && products.map((item) => <>
                        <div key={item.id}>
                            <ProductCard product={item}/>
                        </div>
                    </>)}

                </div>

            </div>

        </div>
    );
};

export default Products;
