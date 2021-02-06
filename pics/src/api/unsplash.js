import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID z4BCreM2_TSU2dJnS5ol8VDeHD0xBjg2Wf_KHMnmoz4'
  }
});
