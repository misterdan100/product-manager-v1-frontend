import { safeParse } from "valibot";
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from "../types";
import axios from "axios";
import { toBoolean } from "../utils";

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

export async function getProductById(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios(url)
        const result = safeParse(ProductSchema, data.data)
        if(result.success) {
            return result.output
        } else {
            throw new Error('Error fetching products')
        }
    } catch (error) {
        console.log('[GETPRODUCTS]', error)
    }
}

export async function updateProduct(data: ProductData, id: Product['id']) {
    try {
        const result = safeParse(ProductSchema, {
            name: data.name,
            price: Number(data.price),
            availability: toBoolean(data.availability.toString()),
            id
        })

        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            await axios.put(url, result.output)
        } else {
            throw new Error('Data not valid')
        }
    } catch (error) {
        console.log('[ADDPRODUCT]', error)
    }
}

export async function deleteProduct(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}