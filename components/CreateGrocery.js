import React, { useEffect, useState } from 'react';


const CreateGrocery = () => {


    const [formData, setFormData] = useState({
        productname: '',
        price: '',
        category: '',
        vegetarian: '',
        image: null,
        weight: '',
        brand: '',
        itempackagequantity: '',
        packageinformation: '',
        manufacturer: '',
        countryoforigin: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0])
        setFormData({ ...formData, image: file });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        const imgobj = new FormData();
        formDataObj.append('productname', formData.productname);
        formDataObj.append('price', formData.price);
        formDataObj.append('category', formData.category);
        formDataObj.append('vegetarian', formData.vegetarian);
        formDataObj.append('weight', formData.weight);
        formDataObj.append('brand', formData.brand);
        formDataObj.append('itempackagequantity', formData.itempackagequantity);
        formDataObj.append('packageinformation', formData.packageinformation);
        formDataObj.append('manufacturer', formData.manufacturer);
        formDataObj.append('countryoforigin', formData.countryoforigin);
        imgobj.append('image', formData.image); // For file upload

        const tinkerdata = new FormData();
        console.log(JSON.stringify(Object.fromEntries(formDataObj)))
        tinkerdata.append('json-data', JSON.stringify(Object.fromEntries(formDataObj)));
        tinkerdata.append('image', imgobj.get('image'));


        const requestOptions = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data', // Set the content type for the JSON data
            //     // Authorization: `Bearer ${token}`, // Set the Authorization header with the JWT token
            // },
            body: tinkerdata,
            // headers: {
            //     Authorization: `Bearer ${token}`, // Set the Authorization header with the JWT token
            // },
        };


        try {
            const response = await fetch('http://localhost:8083/api/CreateGrocery', requestOptions);
            const responseData = await response.json();
            console.log(JSON.stringify(responseData));

            if (response.ok) {
                alert('Successfully added!');
                // Reset form fields if the request was successful
                setFormData({
                    productname: '',
                    price: '',
                    category: '',
                    vegetarian: '',
                    image: null,
                    weight: '',
                    brand: '',
                    itempackagequantity: '',
                    packageInformation: '',
                    manufacturer: '',
                    countryoforigin: '',
                });
            } else {
                // Handle error responses
                alert('Error: Failed to add!'); // Show a proper error message to the user
            }
        } catch (error) {
            // Handle network errors or other issues
            console.error('Error:', error);
            alert('Please Enter All Fields');
        }
    };





    return (
        <form onSubmit={onSubmit} className='form'>
            <div>
                <label>
                    Product Name:
                    <input
                        type="text"
                        name="productname"
                        value={formData.productname}
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Price:
                    <input
                        type="number"
                        className="input-field"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Weight:
                    <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Vegetarian:
                    <input
                        type="text"
                        name="vegetarian"
                        value={formData.vegetarian}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Brand:
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    ItemPackageQuantity:
                    <input
                        type="number"
                        className="input-field"
                        name="itempackagequantity"
                        value={formData.itempackagequantity}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    PackageInformation:
                    <input
                        type="text"
                        name="packageInformation"
                        value={formData.packageInformation}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Manufacturer:
                    <input
                        type="text"
                        name="manufacturer"
                        value={formData.manufacturer}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    CountryOfOrigin:
                    <input
                        type="text"
                        name="countryoforigin"
                        value={formData.countryoforigin}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
            {/* Additional fields for weight, brand, itempackagequantity, packageinformation, manufacturer, countryoforigin */}
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default CreateGrocery;
