import './App.css';
import pizzaData from './data.js'
import React from 'react';

// ! Component Function must start with capital letters
function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <>
      <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
        <img src={photoName} alt="123" />
        <div>
          <h2>{name}</h2>
          <p>{ingredients}</p>
          <p>{soldOut ? "SOLD OUT" : price}</p>
          <p>{photoName}</p>
          <p>{soldOut}</p>
        </div>
      </li>
    </>
  );
}

function Pizzas() {
  return (
    <div className="pizzas"> 
      {pizzaData.map((pizza) => (
        <>
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        </>
      ))}
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };

  const style = {};

  // const cpy = style
  // cpy.color = "blue"

  return (
    <header className="header">
      <h1
        style={
          // Inline Styling
          style
        }
        className="header"
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours(); 
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {
        isOpen ? (
          <Order 
            closeHour={closeHour}
          />
        ) : (
          <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
        )
      }
    </footer>
  )

  // let text = "";
  // if(hour >= openHour && hour <= closeHour) {
  //   text = "We're Currently Open!";
  // } else {
  //   text = "We're Currently Closed!";
  // }
  // // Pure React Example
  // return React.createElement(
  //   "footer", // Type of HTML Element
  //   {
  //     className: "footer"
  //   }, // Element Property
  //   `${new Date().toLocaleTimeString()} ${text}` // Children
  // )
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function App() {
  return (
    <div className="App container">
      <Header />
      <Pizzas />
      <Footer />
    </div>
  );
}

export default App;
