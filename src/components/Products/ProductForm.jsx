import { Button, Flex, Input } from 'antd';
import React, { useEffect, useState } from 'react';

const ProductForm = ({onSubmit}) => {
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

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProdFrom((prevForm) => ({ 
            ...prevForm, [name]: value
        }))
    }

    const handleSubmit = () => {
        onSubmit(prodForm)
    }

    useEffect(() => {
        
        return () => {
            setProdFrom({
                title: "",
                subtitle: "",
                description: "",
                color: '',
                price: '',
                rate: '',
                size: '',
                image: ''
            })
        };
    }, []);

    return (
        <div>
            <form action="">
                <Flex gap="middle" vertical>
                <div>
                    <Input 
                        placeholder="Title" 
                        name='title'
                        value={prodForm.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input 
                        placeholder="Subtitle" 
                        name='subtitle'
                        value={prodForm.subtitle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input 
                        placeholder="Description" 
                        name='description'
                        value={prodForm.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input 
                        placeholder="Color" 
                        name='color'
                        value={prodForm.color}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input 
                        placeholder="Price" 
                        name='price'
                        value={prodForm.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input 
                        placeholder="Rate" 
                        name='rate'
                        value={prodForm.rate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input 
                        placeholder="Size" 
                        name='size'
                        value={prodForm.size}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input 
                        placeholder="Image" 
                        name='image'
                        value={prodForm.image}
                        onChange={handleChange}
                    />
                </div>
                <Button onClick={handleSubmit} type='primary'>Submit</Button>
                </Flex>
            </form>
        </div>
    );
}

export default ProductForm;
