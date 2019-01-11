import axios from 'axios';

export const getProducts = () =>
  axios({
    method: 'GET',
    url: 'http://localhost:5000/api/products/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const createProduct = body =>
  axios({
    method: 'POST',
    url: 'http://localhost:5000/api/products/',
    data: body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
