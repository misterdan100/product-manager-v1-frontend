import { safeParse } from "valibot";
import { DraftProductSchema } from "../types";
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