import axios from "axios";

const endpoint = 'http://localhost:3002/persons'

/* Funciones contra el servidor DB */

// 1. Get all persons
const getAll = () => {
    const req = axios.get(endpoint)
    return req.then(res => res.data)
}

// 2. Add new person
const addNew = obj => {
    const req = axios.post(endpoint, obj)
    return req.then(res => res.data)
}

// 3. Update telephone...


export default {getAll, addNew}