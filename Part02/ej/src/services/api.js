import axios from "axios";

const endpoint = 'http://localhost:3002/persons'

/* Funciones contra el servidor DB */

// 1. Get all persons
const getAll = () => {
    const req = axios.get(endpoint)
    return req.then(res => res.data)
}

// 2. Add new person
const addNew = (obj) => {
    const req = axios.post(endpoint, obj)
    return req.then(res => res.data)
}

// 3. Delete a person
const deletePerson = (id) => {
    const req = axios.delete(`${endpoint}/${id}`)
    return req.then(res => res.data)
}

// 4. Modify person's phone
const modifyPhone = (id, obj) => {
    const req = axios.put(`${endpoint}/${id}`, obj)
    return req.then(res => res.data)
}

export default {getAll, addNew, deletePerson, modifyPhone}