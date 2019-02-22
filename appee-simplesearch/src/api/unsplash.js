import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 764b2424458ceecb332d6bf612cdff620d8d30d0ae65300870ba4cc158e1eadd'
  }
});
