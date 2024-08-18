// src/api/axios.js

import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dgm-final-appservice.azurewebsites.net/api',
})
