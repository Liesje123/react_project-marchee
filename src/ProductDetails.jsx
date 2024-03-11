import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>Marque: {product.brand}</p>
            <p>Catégorie: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Prix: {product.price}</p>
            <p>Réduction: {product.discountPercentage}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <div>
                {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;
