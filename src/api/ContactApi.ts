import { isAxiosError } from "axios";
import { ContactForm } from "../types";
import api from "../lib/axios";



export async function createContact(formData : ContactForm) {
    try {
        const {data} = await api.post('/contacts', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
    
}