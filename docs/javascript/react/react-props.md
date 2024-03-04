---
id: react-props
title: React Props
tags:
  - react
  - javascript
  - props
---
### What is React props?

**React doc:** React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

---

In React, "props" is a short form of "properties," and it refers to the mechanism by which data is passed from a parent component to a child component. Props are a fundamental concept in React and play a crucial role in building reusable and modular components.

Here's how props work:

**Parent-Child Relationship:** In a React application, you typically have a hierarchy of components, with some components being parents and others being children. Data can be passed from a parent component to a child component using props.

**Defining Props:** Props are essentially the parameters that you define for a component. You can think of them as attributes or settings that a component can receive. Props are specified as attributes on a component's JSX element when you render it.

For example, you can define a prop called "title" when rendering a component:

`
<ChildComponent title="Hello, World!" />
`

**Accessing Props:** Inside the child component, you can access the props passed to it by referencing `this.props`. For functional components, you can simply access `props` as a parameter.

For example, in a class-based component:

```js
class ChildComponent extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

And in a functional component:

```js
function ChildComponent(props) {
  return <h1>{props.title}</h1>;
}
```

**Immutable Data:** It's important to note that props are read-only. This means that a child component cannot modify the data it receives through props. If the parent component needs to change the data, it should do so in its own state and pass the updated data to the child component through props.

Props are an essential concept for building reusable and composable components in React. They allow you to customize and configure child components based on the data and settings provided by their parent components. By passing data as props, you can create dynamic and flexible component hierarchies that can adapt to different use cases.
