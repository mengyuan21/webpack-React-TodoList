# webpack-React-BuildUp


## Questions:

+ toggleTodo function中的find有时会报错：

	这是因为我在setTodos 和 setDisplayTodos的时候都用了Date.now()来设定ID，但由于两者时间可能有误差，可能会导致后续的displaytodos.id和todos.id对不上，调用toggleTodo的find 时会找不到对应应的todo，所以我在setTodos前先定义 id = Date.now(), 再在setTodos和setDisplay时引用这个id，这样就保证了两个方法set时是使用同一id的。 （后续查资料后发现可以使用uuidv4用来设定id）。

+ 关于Style Component的资料：
	https://zhuanlan.zhihu.com/p/28876652	
	https://www.cnblogs.com/Andy1982/p/13939573.html

+ 普通函数与箭头函数的区别：
	箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。
