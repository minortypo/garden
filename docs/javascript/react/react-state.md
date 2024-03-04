---
id: react-state
title: React State
tags:
  - react
  - javascript
  - state
---
### React State

[Doc:](https://react.dev/learn/state-a-components-memory/) Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called `state`.

---

[What is State?](https://academind.com/tutorials/what-is-state)

We write components in React, A LOT of components, and many times we want them to undergo visual changes as a result of user or computer interactions. For this purpose, a component needs to “remember” things about itself. This is where state comes in. State is a component’s memory.

#### The useState hook

The `useState` hook is a built-in hook in React that allows you to define state in a functional component. It takes an initial value as a parameter and returns an array with two elements that we can destructure to get:

* 1 - The current state value
* 2 - A function to update the state value
  
State definition with `useState` commonly follows this pattern:

```js
const [stateValue, setStateValue] = useState(initialValue);

// simple project example:
const [backgroundColor, setBackgroundColor] = useState(initialColor);
```

The `backgroundColor` state is defined with the hook. Then on every button, we set up a click event handler that calls the `setBackgroundColor` function with the corresponding value. Then, magically the new color is applied to the background.

Adding more state variables should be as easy as adding more `useState` calls.
