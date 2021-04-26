import * as React from 'react';
import axios from 'axios';

export const saveUser = (nickname, department, cb) => {

  const config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };

  const result = axios
    .post('http://localhost:5000/api/users', { name: nickname, vestiging: department }, config)
    .then(res => cb(res.data))
    .then(() => console.log(`User with name ${nickname} saved`))
    .catch(err => {
      console.error(err);
    });

  return result.data;
};
