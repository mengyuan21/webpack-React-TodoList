

## Hooks

Reference: https://reactjs.org/docs/hooks-custom.html

### What do hooks do?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

They let you use state and other React features **without writing a class.**

#### 1. useState:

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  //useState is to update the state of this variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

​	**We call it inside a function component to add some local state to it. React will preserve this state between re-renders. `useState` returns a pair: the *current* state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to `this.setState` in a class, except it doesn’t merge the old and new state together. It also can be used multiple times in one component.**



#### 2. useEffect

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

​	

​	The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

​	**When you call `useEffect`, you’re telling React to run your “effect” function after flushing changes to the DOM.** 



```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

​	

​	**Effects may also optionally specify how to “clean up” after them by returning a function. For example, this component uses an effect to subscribe to a friend’s online status, and cleans up by unsubscribing from it. **

 	**You can use more than a single effect in a component**



3. #### useContext 

Variable without setting useContext:

It will pass through many components on the component tree and it might cause problems.

![Screen Shot 2021-08-19 at 4.42.14 PM](/Users/mengyuan.lithoughtworks.com/Library/Application Support/typora-user-images/Screen Shot 2021-08-19 at 4.42.14 PM.png)

## 如何使用Context :

Context provides a way to pass data through the components tree without having to pass props down manually at every level.

Step 1: creat the context:

```js
//在父组件外写：
export const UserContext = React.creactContext()
```



Step 2: put provider outside the component that they need:

```js
return (
	<div>
  	<UserContext.Provider value={'what you want to pass'}>
  		<ComponentC/>
  	<UserContext.Provider/>
  <div>	
)
```



Step 3: import UserContext into component F and add Consumer:

```js
import React from 'react';
import {UserContext} from './App';


function ComponentF() {
  
  
  return (
  	<div>
    	<UserContext.Consumer  >
    			Component F {value}
    	<UserContext.Consumer/>
    <div>
  )
}


```



## 如何使用useContext?



Step 3:

```js
import React from 'react';
import {UserContext} from './App';


function ComponentF() {
  
  const user = useContext(UserContext)
  
  return (
  	<div>
    	<UserContext.Consumer  >
    			Component F {value}
    	<UserContext.Consumer/>
    <div>
  )
}



```





#### 3. Building Your Own Hooks

+ Building

```js
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```



+ reusing

```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

```



```js
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```















