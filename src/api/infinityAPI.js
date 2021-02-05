import * as axios from 'axios';

const token = '';
const instance = axios.create({
  baseURL: `https://api.sumra.net/infinity/1/v1/infinity`,
  headers: {
    'Content-Type': 'application/json',
    Autorization: `Bearer ${token}`,
  },
});

export const cardTypesAPI = {
  getCardTypesList(value, page) {
    return instance
      .get(`/cardtypes?limit=${value}&page=${page}`)
      .then((response) => response.data);
  },
};
