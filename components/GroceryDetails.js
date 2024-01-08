import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";


//Using useParams and destructuring ID from it..
const GroceryDetails = () => {
    const { id } = useParams()
    console.log(id)
    const [grocery, setGrocery] = useState(null); // Change here: Initialize with null or {}

    useEffect(() => {
        getGroceryInfo();
    }, []);

    async function getGroceryInfo() {
        try {
            const data = await fetch("https://us-central1-capstore-takeoff.cloudfunctions.net/ViewGroceryById?id=" + id);
            const json = await data.json();

            setGrocery(json);
            console.log(json);
        } catch (error) { // Change here: Added error parameter
            console.error(error);
        }
    }

    if (grocery === null) {
        return <Shimmer />;
    } else {
        const { brand, category, image, countryoforigin, itempackagequantity, manufacturer, packageinformation, price, productname, vegetarian, weight, thumbnailURL } = grocery
        return (
            <div className="grocery-card">
                <p className="text-sm text-gray-600">
                    {vegetarian && vegetarian.toLowerCase() === "yes" ? "Veg 🍏" : "Non-Veg 🍖"}
                </p>
                <h2 className="font-bold text-xl mb-2">Product Name: {productname}</h2>
                <div className="grocery-info">
                    <h2 >{brand}</h2>
                    <p>Category: {category}</p>
                    <img className="grocery-image" src={image} alt="img" />

                    <p>Country of Origin: {countryoforigin}</p>
                    <p>Item Package Quantity: {itempackagequantity}</p>
                    <p>Manufacturer: {manufacturer}</p>
                    <p>Package Information: {packageinformation}</p>

                    <p>Price: {price}</p>
                    <img className="grocery-image" src={thumbnailURL} alt="img" />




                    <p>Weight: {weight}</p>
                </div>
            </div>
        );
    }
};

export default GroceryDetails;
