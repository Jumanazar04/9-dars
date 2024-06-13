import { Input } from 'antd';
import React, { useState } from 'react';

const ProductForm = () => {
    const [prodForm, setProdFrom] = useState({
        title: "",
        subtitle: "",
        description: "",
        color: '',
        price: '',
        rate: '',
        size: '',
        image: ''
    });
    const handleChange = (e) => {}
    return (
        <div>
            <form action="">
                <div>
                    <Input 
                        placeholder="Title" 
                        name='title'
                        value={prodForm.title}
                        onChange={handleChange}
                    />;
                </div>
                <div>
                    <Input 
                        placeholder="Subtitle" 
                        name='subtitle'
                        value={prodForm.subtitle}
                        onChange={handleChange}
                    />;
                </div>
                <div>
                    <Input 
                        placeholder="Description" 
                        name='description'
                        value={prodForm.description}
                        onChange={handleChange}
                    />;
                </div>
                <div>
                    <Input 
                        placeholder="Color" 
                        name='color'
                        value={prodForm.color}
                        onChange={handleChange}
                    />;
                </div>
                <div>
                    <Input 
                        placeholder="Price" 
                        name='price'
                        value={prodForm.price}
                        onChange={handleChange}
                    />;
                </div>
                <div>
                    <Input 
                        placeholder="Rate" 
                        name='rate'
                        value={prodForm.rate}
                        onChange={handleChange}
                    />;
                </div>
                <div>
                    <Input 
                        placeholder="Size" 
                        name='size'
                        value={prodForm.size}
                        onChange={handleChange}
                    />;
                </div>
                <div>
                    <Input 
                        placeholder="Image" 
                        name='image'
                        value={prodForm.image}
                        onChange={handleChange}
                    />;
                </div>
            </form>
        </div>
    );
}

export default ProductForm;
