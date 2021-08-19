# JSON SERVER

## 如何使用

Reference:
https://www.youtube.com/watch?v=qdCHEUaFhBk

+ 创建一个data文件夹
+ 在文件夹中放入data.json文件
+ 按照格式创建mock数据
+ 在terminal中输入 ： 
    npx json-server --watch data/db.json --port 8000
  根据提示操作后可以拿到数据的sources（本次是在localhost:8000）并且看到模拟好的数据

+ **fetch data by useEffect**

```js
function App()   {
    const [todos, setTodos] = useState(null);
    const [isPending, setIsPending] =useState(true);
    const [error, setError] = useState(null)

    const handleDelete = (id) =>{
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/todos')
                .then(res => {
                    if(!res.ok) {
                        throw Error("could not fetch the data for that resource");
                    }
                    return res.json();
                })
                .then((data) => {
                    setTodos(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    console.log(err.message)
                    setIsPending(false)
                    setError(err.message)

                })
            }, 1000);
    },[])



    return(
        <div>
        // todos存在时才会render子组件
        {error && <div> {error} </dov>}
        { isPending && <div> Loading... </div> }
        { todos &&   <TodoList todos={todos} title="All Todos" handleDelete = {handleDelete}>}
        </div>
    )

}

```
