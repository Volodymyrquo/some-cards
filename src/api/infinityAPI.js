import * as axios from 'axios';

const token = localStorage.token;
const instance = axios.create({
  baseURL: `https:api.sumra.net/infinity/1/`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Autorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  },
});

export const cardTypesAPI = {
  getCardTypesList() {
    return instance
      .get(`v1/infinity/cardtypes`)
      .then((response) => response.data);
  },
};
