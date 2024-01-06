import React from 'react';

const GroceryCard = ({ image, productname, brand, vegetarian, category, itempackagequantity, packageinformation, price, weight }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
            <img src={image} alt="Grocery" className="w-full" />
            <div className="px-6 py-4">
                <p className="text-sm text-gray-600">
                    {vegetarian.toLowerCase() === "yes" ? "Veg 🍏" : "Non-Veg 🍖"}
                </p>
                {/* margin-bottom */}
                <h5 className="font-bold text-xl mb-2">{productname}</h5>
                <p className="text-sm text-gray-700 mb-2">Category: {category}</p>
                <p className="text-sm text-gray-700 mb-2">Item Quantity: {itempackagequantity} Available</p>
                <p className="text-sm text-gray-700 mb-2">Price: {price} Rs</p>
                <p className="text-sm text-gray-700 mb-2">Weight: {weight}</p>
                {/* Add additional details as needed */}
            </div>
        </div>
    );
};

export default GroceryCard;
