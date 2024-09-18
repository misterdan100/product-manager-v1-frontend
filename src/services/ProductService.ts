import { safeParse } from "valibot";
import { DraftProductSchema, ProductsSchema } from "../types";
import axios from "axios";

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price,
        })
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, result.output)
        } else {
            throw new Error('Data not valid')
        }
    } catch (error) {
        console.log('[ADDPRODUCT]', error)
    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios(url)
        const result = safeParse(ProductsSchema, data.data)
        if(result.success) {
            return result.output
        } else {
            throw new Error('Error fetching products')
        }
        
    } catch (error) {
        console.log('[GETPRODUCTS]', error)
    }
}