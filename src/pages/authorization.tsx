import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { getAccessToken } from '../client/api';

const onLoad = async (setIsInitialLoad) => {
  try {
    setIsInitialLoad(false);

    const request_token = localStorage.getItem('request_token');
    const { username, access_token } = await getAccessToken(request_token);

    return {
      username,
      access_token
    };
  } catch (error) {
    throw error;
  }
};

const handleUserData = ({ username, access_token }) => {
  localStorage.setItem('username', username);
  localStorage.setItem('access_token', access_token);
  localStorage.removeItem('request_token');
  return true;
};

export const Authorization = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false)

  isInitialLoad && onLoad(setIsInitialLoad)
    .then(handleUserData)
    .then(setIsAuthorized)

  return isAuthorized
    ? <Redirect to="/" />
    : <h2>Authorization</h2>;
}