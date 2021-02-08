import * as axios from 'axios';
/* const END_POINTS = {
  SEND_CODE: 'auth/v1/send-code',
  VALIDATE: 'auth/v1/validate',
  REGISTRATION: 'auth/v1/registration',
  AUTHENTIFICATION: 'auth/v1/meet/authenticate',
}; */
const instance = axios.create({
  baseURL: `https://api.sumra.net`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic XzFvVjN1SlZVMHJ6TEVzMTVQdEdLT2RtcmxJYTpqQjIzbXVVN2FJa1JhN0tPRkNNMEh1VXA1U1Fh',
  },
});

export const authAPI = {
  fetchAuth({ username, password }) {
    const newData = new URLSearchParams({
      username,
      password,
      grant_type: 'password',
    });
    return instance.post(`/token`, newData).then((response) => response);
  },
};

const newInstatce = axios.create({
  baseURL: `https://api.sumra.net`,
});
export const fetchValidateName = (name) => {
  return newInstatce.get(`/auth/v1/validate?username=${name}`);
};

/* export const fetchAuth = ({ username, password }) => {
  return axios
    .request({
      url: '/token',
      method: 'post',
      baseURL: 'https://api.sumra.net',
      auth: {
        username: username,
        password: password,
      },
      data: {
        grant_type: 'password',
        scope: 'public',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(function (res) {
      debugger;
      console.log(res);
    });
}; */

/* export function fetchAuth(data) {
    return fetch(END_POINTS.SERVER + END_POINTS.AUTHENTIFICATION, {
      body: JSON.stringify(data),
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }); */
