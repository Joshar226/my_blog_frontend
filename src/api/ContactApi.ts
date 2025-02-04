import { isAxiosError } from "axios";
import { adminContactSchema, Contact, ContactForm } from "../types";
import api from "../lib/axios";



export async function createContact(formData : ContactForm) {
    try {
        const {data} = await api.post('/contacts', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.errors[0].msg)
        }
    } 
}

export async function getContacts() {
    try {
        const {data} = await api('/contacts')
        const response = adminContactSchema.safeParse(data)
        if(response.success) {
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.errors[0].msg)
        }
    } 
}

export async function updateStatus(id: Contact['_id']) {
    try {
        const url = `/contacts/${id}/status`
        const {data} = await api.post<string>(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.errors[0].msg)
        }
    }
}