# webpack-React-BuildUp


## Questions:

+ toggleTodo function中的find有时会报错：

	这是因为我在setTodos 和 setDisplayTodos的时候都用了Date.now()来设定ID，但由于两者时间可能有误差，可能会导致后续的displaytodos.id和todos.id对不上，调用toggleTodo的find 时会找不到对应应的todo，所以我在setTodos前先定义 id = Date.now(), 再在setTodos和setDisplay时引用这个id，这样就保证了两个方法set时是使用同一id的。 （后续查资料后发现可以使用uuidv4用来设定id）。

+ 关于Style Component的资料：
	https://zhuanlan.zhihu.com/p/28876652	
	https://www.cnblogs.com/Andy1982/p/13939573.html

+ 普通函数与箭头函数的区别：
	箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。

+ callback function

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

