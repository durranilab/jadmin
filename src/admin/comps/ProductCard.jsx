import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className={'bg-white p-4 shadow'}>
            <div>
                <img src={product.image} alt={''} className={'h-40'}/>
            </div>

            <div className={'mt-2 text-lg font-bold'}>
                {product.name}
            </div>

            <div className={`mt-2 text-3xl text-right font-bold ` + (product.price > 50 ? 'text-green-500' : 'text-red-500')}>
                ₹{product.price}
            </div>

            <div className={'mt-2 text-xs whitespace-pre'}>
                {product.description}
            </div>

        </div>
    );
};

export default ProductCard;
