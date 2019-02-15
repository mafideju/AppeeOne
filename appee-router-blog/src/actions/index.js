import axios from 'axios';

const URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=MAKEYDEJU'

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = "DELETE_POST";

export function fetchPosts() {
  const request = axios.get(`${URL}/posts${KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios
    .post(`${URL}/posts${KEY}`, values)
  // .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${URL}/posts/${id}${KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  axios.delete(`${URL}/posts/${id}${KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}