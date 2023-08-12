import "./App.css";
import React, { useState } from "react";
// import Product from "./Product";

function App() {
  return (
    <div className="App">
      {/* <h1>PRODUCTS</h1>
      <Product
      img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
      name="Any"
      desc="Anything special"
      price="100"
      />
      <Product
      img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
      name="Any"
      desc="Anything naturall"
      price="200"
      />
      <Product
      img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
      name="Any"
      desc="Anything natural"
      price="200"
      /> */}

      <ParentComponent />
    </div>
  );
}

export default App;

const ParentComponent = () => {
  const [name, setName] = useState();

  return (
    <div>
      <h1>an example component to show props passing </h1>
      the current value of name is {name}
      <br />
      <ChildComponent newName={name} setNewName={setName} />
      <ChildComponentRed nameToMakeRed={name} />
    </div>
  );
};

const ChildComponent = (props) => {
  const { newName, setNewName } = props;
  const onChangeName = (e) => setNewName(e.target.value);
  console.table(props);
  
  return <input value={newName} onChange={onChangeName} />;
};

const ChildComponentRed = (props) => {
  const { nameToMakeRed } = props;

  return <div style={{ color: "red" }}>{nameToMakeRed}</div>;
};
