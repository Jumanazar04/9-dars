import axios from 'axios';
import  { useEffect, useState } from 'react';

const UseGetProducts = () => {

    const [products, setProducts] = useState()

    useEffect(()=>{
        const getProductData = async () => {
            try {    
                 const response = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products')
                 console.log(response.data);
                 if(response.data) setProducts(response.data)
            } catch (error) {
             console.log(error);
            }
         }
 
        getProductData()
    },[])

    return products
}

export default UseGetProducts;
