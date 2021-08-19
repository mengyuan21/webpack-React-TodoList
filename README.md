# webpack-React-BuildUp


## Questions:


+ **toggleTodo function中的find有时会报错：**

	这是因为我在setTodos 和 setDisplayTodos的时候都用了Date.now()来设定ID，但由于两者时间可能有误差，可能会导致后续的displaytodos.id和todos.id对不上，调用toggleTodo的find 时会找不到对应应的todo，所以我在setTodos前先定义 id = Date.now(), 再在setTodos和setDisplay时引用这个id，这样就保证了两个方法set时是使用同一id的。 （后续查资料后发现可以使用uuidv4用来设定id）。



+ **在设定localStorage时遇到的问题：**
  1. 我在使用useEffect hook设定localstorage时，把setItem与	 
     getItem的顺序写反了，先set再get，这导致我无法在数据发生变
     化并且刷新后拿到最新的数据，因为get只跑一次，而set需要每次todos变化都重新跑一次。将顺序调整为页面渲染的最开始就拿数据就解决了这个问题。 	
  2. 我的App.js文件中管理了两个数组，一个是todos，另一个是  
     displayTodos。而在写 setItem 的方法时，我只对todos进行了更新没有同时更新displaytodos，导致我的后续过滤操作产生一些bug，在setItem的useEffect中加一行更新displayTodos的方法就解决了这个问题。	 



+ **关于Style Component的资料：**

	https://zhuanlan.zhihu.com/p/28876652	
	https://www.cnblogs.com/Andy1982/p/13939573.html


​	

+ **普通函数与箭头函数的区别：**
	箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。



+ **callback function**

	1. 什么是callback function ？
	callback function就是一个在另一个函数执行完后要执行的函数;
	在JavaScript中，函数是对象。因此函数可以将函数作为参数，并且可以由其他函数进行返回。执行此操作的函数称为高阶函数。任何作为参数传递的函数都称为回调函数。


	2. 为什需要callback function ？
	JS是单线程语言，两端脚本不能同时运行，为了防止阻塞，只能通过异步函数的调用方式，把需要延迟处理的事件放入事件循环队列。目前为止，callback function是编写和处理JavaScript程序异步逻辑的最常用方式。
	
	如：
```js
	function doHomework(subject, callback) {
		alert(`Starting my ${subject} homework.`);
		callback();
	}
	function alertFinished(){
		alert('Finished my homework');
	}

	doHomework('math', alertFinished);

```

 

+ **import 和 import {  } 的区别：**

  1.export与export default均可用于导出常量、函数、文件、模块等
  2.在一个文件或模块中，export 、import可以有多个，export default仅有一个
  3.通过export方式导出，在导入时要加{ }，export default则不需要
  4.export能直接导出变量表达式，export default不行


+ **测试： 通过userEvent.hover测试hover事件的时候事件没有触发成功可能是因为异步的原因，通过在expect中加上： waitfor(()  =>expect()... )可以解决**

+ **useState是异步的，在useEffec中setState可能会导致信息不能同步更新**


+ **三个filter Button可以不用单独抽出来作为一个组件**

+ **Dev Dependencies  vs  Dependencies**

  Reference :

   https://medium.com/@dylanavery720/npmmmm-1-dev-dependencies-dependencies-8931c2583b0c

  

  Dev dependencies是今在开发期间需要的模块； 

  dependence是在运行时也需要的模块。

  

  在依赖项安装时如果只需要安装至devdependency则可以运行：

  ```tex
  npm install --save-dev
  ```

  Deoendencies需要的依赖: React、Redux、Express 和 Axios...
  devDependencies需要的依赖:  Nodemon、Babel、ESLint，以及像 Chai、Mocha、Enzyme 等测试框架……



+ **npm 是什么**

  NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

  - 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
  - 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
  - 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。


 ## **什么是Promise**
  promise是js的抽象异步处理对象实现异步编程的方案，简单的说就是解决传统js运行单线程的诟病以及异步操作的多层级嵌套带来的麻烦。可以将异步数据变为同步；

### 1. Promise对象的特点
  对象的状态不受外界影响；
  Promise对象代表一个异步操作，由三种状态：
  （1） pending  ——  进行中
  （2） fulfilled  ——  已成功
  （3） rejected  ——  已失败
  只有一步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态；

  一旦状态改变就不会再变化，任何时候都可以得到这个结果；
  Promise对象的状态变化只有如下两种：
  pending -> fulfilled;
  pending -> rejected

  只要这两种情况发生就不会在变化，就算再对Promisse对象添加回调函数也会立即得到之前的结果，这与event完全不同

### Promise的好处
  Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰的分离了
```js
new Promise(async) 
.then(...)
.catch(...)
```
  如果有若干个异步的任务，需要先做任务1，成功后再做任务2，然后任务3.任何任务失败则不在继续并执行错误处理函数。要执行这样的一部任务，Promise可以简单的完成：


```js
job1
.then(job2)
.then(job3)
.catch(handleError)
```


  除了串行执行若干异步任务外，Promise还可以并行执行异步任务。它依赖于前置的多个Promise对象，只有当这些Promise对象全部执行成功后，才会去执行then后面的回调函数。例如下面的promise对象p1和p2,这两个任务是可以并行执行的，用Promise.all()实现



```js
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});

```

# Jest

## JSDOM 
Reference:
https://github.com/jsdom/jsdom

https://blog.csdn.net/weixin_26750481/article/details/108131405

Examples:
https://www.npmjs.com/package/@testing-library/react

jsdom s most powerful ability is that it can execute scripts inside the jsdom. These scripts can modify the content of the page and access all the web platform APIs jsdom implements.


+ findBy / getBy / queryBy的区别
  findby: 
  When Match Is Found: Returns a resolved Promise.
  When Match Is Not Found: Returns a rejected Promise.

  getBy:
  When Match Is Found: Returns the node that matches the query.
  When Match Is Not Found: Throws an error.

  queryBy:
  When Match Is Found: Returns the node that matches the query.
  When Match Is Not Found: Returns null.



## Questions



### 1. 如何mock function？

+ **const mockFunctionName = jest.fn( functions... )**

通过删除函数的实际实现，捕获函数的调用来测试代码直接的链接。

mock function可以通过两种方法实现：

（1） 创建一个模拟函数在测试代码中实现；

（2）编写一整个模拟的模块来覆盖依赖项（个人理解是保留原函数的功能并模拟出与之实现相关的所有函数）

+ Example :

下列函数是对于输入的items进行遍历并使用了callback function对items进行处理，此时我们可以对callback function的内容进行mock，我们只需要确定callback function被正常调用即可，不需要测试它的具体实现。

```js
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
```



**Mock Function**:

这里将callback function 定义为items中的每个值 + 42，我们运行foreach后将会得到结果，将mock function的运行结果进行断言即完成测试；

```js
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);
```



### 2. Mock Module

+ **jest.mock(  modalName  )**

+ Example:

```js
// users.js
import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;

```



### Mock Module

为了测试这个方法，但不用真的去链接这个API，我们可以用jest.mock( ... )去模拟这个axios module，之后我们就可以给这个module放一些模拟的数据去测试axios是否能够连接成功了

```js
// users.test.js
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
```





### 3. Mock Return Value

mock return value 可以用于给mock function注入返回值，这种方法可以简化mock function 的书写过程，避免使用复杂的实现来创建模拟的真实组件行为。

```js
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
```



### 4. Mock Names

快捷的mock数据生成方法：

可以将多种mock数据放在一起写

```js
const myMockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation(scalar => 42 + scalar)
  .mockName('add42');
```



### 







## Matchers:

```js
// The mock function was called at least once
expect(mockFunc).toHaveBeenCalled();

// The mock function was called at least once with the specified args
expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

// The last call to the mock function was called with the specified args
expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

// All calls and the name of the mock is written as a snapshot
expect(mockFunc).toMatchSnapshot();

// The mock function was called at least once
expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

// The mock function was called at least once with the specified args
expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

// The last call to the mock function was called with the specified args
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);

// The first arg of the last call to the mock function was `42`
// (note that there is no sugar helper for this specific of an assertion)
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

// A snapshot will check that a mock was invoked the same number of times,
// in the same order, with the same arguments. It will also assert on the name.
expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
expect(mockFunc.getMockName()).toBe('a mock name');

```





## Testing Library 

### 1.  fireEvent / userEvent 的区别

( Testing Library 推荐使用 userEvent )

user-event 是 Testing Library 的配套库，它提供了比内置 fireEvent 方法更高级的浏览器交互模拟。

### userEvent: 

Reference: https://testing-library.com/docs/ecosystem-user-event/

1.   **Click** :

      userEvent.click(`(element, eventInit, options)`) 

2.   **dbClick**:

     userEvent.dbClick( `element, eventInit, options` )	

3.    **type**:

      uesrEvent.type( `element, text, [options]` )

   ```js
   import React from 'react'
   import {render, screen} from '@testing-library/react'
   import userEvent from '@testing-library/user-event'
   
   test('type', () => {
     render(<textarea />)
   
     userEvent.type(screen.getByRole('textbox'), 'Hello,{enter}World!')
     expect(screen.getByRole('textbox')).toHaveValue('Hello,\nWorld!')
   })
   ```

4.    **hover / unhover ** :

​         userEvent.hover ( element )

```js
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tooltip from '../tooltip'

test('hover', () => {
  const messageText = 'Hello'
  render(
    <Tooltip messageText={messageText}>
      <TrashIcon aria-label="Delete" />
    </Tooltip>,
  )

  userEvent.hover(screen.getByLabelText(/delete/i))
  expect(screen.getByText(messageText)).toBeInTheDocument()
  userEvent.unhover(screen.getByLabelText(/delete/i))
  expect(screen.queryByText(messageText)).not.toBeInTheDocument()
})

```





















