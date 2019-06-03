import axios from 'axios';
import config from '../config/dev';

const root = config.api.root;

// webapp = 'http://pocket.email'
// apiapp = 'http://api.pocket.email'

export const getRequestToken = () => axios
  // .get(`http://pocket.email/api/get-request-token`)
  .get(`${root}/get-request-token`)
  .then(({ data }) => data);

export const getAccessToken = request_token => axios
  .post(`${root}/get-access-token`, { request_token })
  .then(({ data }) => data);