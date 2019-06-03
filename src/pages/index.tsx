import React from 'react';
import { getRequestToken } from '../client/api';

const handleOnClick = async () => {
  try {
    const { request_token, url } = await getRequestToken();

    localStorage.setItem('request_token', request_token);
    window.location.assign(url);
  } catch (error) {
    throw error;
  }
};

export const Index = () => (
  <>
    <h1>Hi!</h1>
    <button onClick={handleOnClick}>Click here to start Pocket Authentication!</button>
  </>
);