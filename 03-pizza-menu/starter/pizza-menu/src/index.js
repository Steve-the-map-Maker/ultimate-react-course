import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1> Fast React Pizza Co.!!!</h1>;
}

function Menu() {
  return (
    <div>
      <h2> Our Menu is </h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Pizza Margherita" />
      <h2> Pizza Margherita</h2>
      <p>Ingredients: "Tomato and mozarella",</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 20;
  function areWeOpen() {
    if (hour >= openHour && hour <= closeHour) alert("We are Open!!");
    else alert("We are Closed!!");
  }

  



  return (
    <footer>
      <p>{areWeOpen()}</p>
      <p>© 2024 Pizza Menu</p>
    </footer>
  );
}

// React v18 only
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>
);
