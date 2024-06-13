import axios from "axios";


export async function createProduct(data){
    try {
        const response = await axios.post("https://ecommerce-backend-fawn-eight.vercel.app/api/products", data);
        return response
    } catch (error) {
        console.log(error);
    }
}