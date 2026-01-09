import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getProducts = () => api.get('/api/products')

export const stockIn = (id) =>
  api.post(`/api/products/${id}/in`)

export const stockOut = (id) =>
  api.post(`/api/products/${id}/out`)
