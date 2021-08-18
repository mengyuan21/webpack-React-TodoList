# Redux & Hooks

## 1. Redux的概念

Redux是实现了全局 state 、处理全局 state 的方式和统一的数据处理中心，也就是 store、dispatch 和 reducer。



## 2. Hooks（useReducer）



![Screen Shot 2021-08-18 at 1.20.04 PM](/Users/mengyuan.lithoughtworks.com/Library/Application Support/typora-user-images/Screen Shot 2021-08-18 at 1.20.04 PM.png)



```js
//声明初始state
const initialState = {count:0};

//把所有action type存为一个常量：
const ACTIONS = {
  INCREMENT:'increment',
  DECREMENT:'decrement',
}

//声明reducer函数，关于state的操作在这里写
function reducer(state, action) {
  swtich(action.type) {
    case ACTION.INCREMENT:
    	return {count: state.count + action.payload};
    case ACTION.DECREMENT:
    	return {count:state.count - action.payload};
    default:
    	throw new Error();
  }
}

//通过dispatch触发action: type:"increment"来更新state
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);
  return (
  	<>
    	Count:{state.count}
			<button onClick={() => dispatch(type:"decrement",payload: 1)} > - <button>
      <button onClick={() => dispatch(type:"increment",payload: 1)} > + <button>  
    <>
  )
}
```













## 3. Redux和hooks(useReducer)的区别 

### 数据流对比：

+ Redux

<img src="/Users/mengyuan.lithoughtworks.com/Library/Application Support/typora-user-images/Screen Shot 2021-08-18 at 10.03.59 AM.png" alt="Screen Shot 2021-08-18 at 10.03.59 AM" style="zoom:50%;" />

+ Hooks：

![Screen Shot 2021-08-18 at 10.09.51 AM](/Users/mengyuan.lithoughtworks.com/Library/Application Support/typora-user-images/Screen Shot 2021-08-18 at 10.09.51 AM.png)











### 相同点：

1. 统一 store 数据管理
2. 支持以发送 action 来修改数据
3. 支持 action 处理中心：reducer



### 不同点：

1. hooks UI 层获取 store 和 dispatch 不需要用 HOC 依赖注入，而是用 useContext
2. redux 在 action 之后改变视图本质上还是 state 注入的方式修改的组件内部 state，而 hooks 则是一对一的数据触发
3. hooks 的 reducer 来自于 useReducer
4. hooks 还没有 [middleware](https://link.zhihu.com/?target=https%3A//redux.js.org/advanced/middleware) 的解决方案



## Hook实现Redux的目录结构：

( Ref : https://zhuanlan.zhihu.com/p/66020264 )

### 本地数据库设计

- 一个叫 list 的仓库
- 三个 action: 增、删、改

![Screen Shot 2021-08-18 at 10.14.53 AM](/Users/mengyuan.lithoughtworks.com/Library/Application Support/typora-user-images/Screen Shot 2021-08-18 at 10.14.53 AM.png)





![Screen Shot 2021-08-18 at 10.17.41 AM](/Users/mengyuan.lithoughtworks.com/Library/Application Support/typora-user-images/Screen Shot 2021-08-18 at 10.17.41 AM.png)

















