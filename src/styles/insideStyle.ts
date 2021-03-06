const insideStyle = `
  .ReactShadowDOMInsideContainer {
    user-select: none;
  }
  
  button {
    background: #ea357a;
    border-radius: 2rem;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.3rem;
    font-weight: 500;
    min-width: 200px;
    padding: 0.7rem 1.4rem;
  }

  button:hover {
    box-shadow: inset 0 0 500px rgba(0,0,0,0.05);
  }

  button:active {
    box-shadow: inset 0 0 500px rgba(0,0,0,0.1);
  }

  button.round {
    border-radius: 2rem;
  }

  button.rounded {
    border-radius: 0.4rem;
  }

  button.square {
    border-radius: 0;
  }

  .ExampleToken {
    height: 22px;
    width: 22px;
    margin-right: 6px;
    margin-top: 6px;
  }

  .PoweredBy {
    color: rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 0.8rem;
    font-style: italic;
    text-decoration: none;
  }

  .PoweredBy:hover {
    color: rgba(0,0,0,0.4);
  }

  strong {
    font-weight: 800;
    letter-spacing: -0.5px;
  }
`

export default insideStyle
