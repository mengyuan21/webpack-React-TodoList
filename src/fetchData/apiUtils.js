import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/todos';

export const getTodos = async () => {
    return await axios.get(BASE_URL).then((response) => response.data)
}

export const addTodos = async (todos) => {
    return await axios.post(BASE_URL, {...todos}).then((response) => response.data)
}

export const deleteTodos = async (id) => {
   return await axios.delete(`${BASE_URL}/${id}`).then((response) => response.data)
}

export const updateTodos = async (id, todo) => {
    return await axios.patch(`${BASE_URL}/${id}`, todo).then((response) => response.data)
}

export const deleteAllTodos = async (todos) => {
    const deleteTodoPromise = todos.map((todo) => {
        return deleteTodos(todo.id);
    })
    return await Promise.all(deleteTodoPromise).then((response) => response)
}

export const updateAllTodos = async (todos, complete) => {
    const updateTodoPromise = todos.map((todo) => {
        return updateTodos(todo.id, {complete});
    })
    return await Promise.all(updateTodoPromise).then((response) => response)
}