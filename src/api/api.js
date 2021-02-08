import * as axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.sumra.net`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic XzFvVjN1SlZVMHJ6TEVzMTVQdEdLT2RtcmxJYTpqQjIzbXVVN2FJa1JhN0tPRkNNMEh1VXA1U1Fh',
  },
  data: {
    grant_type: 'password',
  },
});

const END_POINTS = {
  SEND_CODE: 'auth/v1/send-code',
  VALIDATE: 'auth/v1/validate',
  REGISTRATION: 'auth/v1/registration',
  AUTHENTIFICATION: 'auth/v1/meet/authenticate',
};

export const authAPI = {
  fetchAuth(data) {
    return instance.post(`/token`, data).then((response) => response);
  },
};

/* export function fetchAuth(data) {
    return fetch(END_POINTS.SERVER + END_POINTS.AUTHENTIFICATION, {
      body: JSON.stringify(data),
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
 */
