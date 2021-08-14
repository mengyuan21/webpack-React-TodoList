# webpack-React-BuildUp


## Questions:

+ toggleTodo function中的find有时会报错：

	这是因为我在setTodos 和 setDisplayTodos的时候都用了Date.now()来设定ID，但由于两者时间可能有误差，可能会导致后续的displaytodos.id和todos.id对不上，调用toggleTodo的find 时会找不到对应应的todo，所以我在setTodos前先定义 id = Date.now(), 再在setTodos和setDisplay时引用这个id，这样就保证了两个方法set时是使用同一id的。 （后续查资料后发现可以使用uuidv4用来设定id）。
