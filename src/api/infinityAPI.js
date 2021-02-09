import * as axios from 'axios';

const token = localStorage.token;

const instance = axios.create({
  baseURL: `https://api.sumra.net/`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded',
    Autorization: `Bearer ${token}`,
  },
});

export const cardTypesAPI = {
  getCardTypesList() {
    return instance
      .get(`v1/infinity/cardtypes`)
      .then((response) => response.data);
  },
};
