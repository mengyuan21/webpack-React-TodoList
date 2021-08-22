import axios from 'axios';
import { response } from 'express';

export const BASE_URL = 'http://localhost:3000/todos';

export const fetchTodos = () => {
    axios.get(BASE_URL).then((response) => response.data)
}

export const creatTodos = () => {
    axios.post(BASE_URL).then((response) => response/data)
}