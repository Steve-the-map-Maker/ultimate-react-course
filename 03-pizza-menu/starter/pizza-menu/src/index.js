import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "37px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1> Fast React Pizza Co.!!!</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  const numPizza = pizzas.length;
  return (
    <div>
      <main className="menu">
        <h2> Our Menu is </h2>
        {numPizza > 0 ? (
          <React.Fragment >
            <p>
              {" "}
              We have {numPizza} different pizzas available right now. They are
              all 10 inches and 8 slices.{" "}
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <p>Sorry, no pizzas available right now.</p>
        )}{" "}
      </main>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);

  // if (pizzaObj.soldOut) return <li className="pizza sold-out">Sold Out</li>;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredient},</p>

        {pizzaObj.soldOut ? (<span className="sold-out">Sold Out!!!</span>) : (<span>{pizzaObj.price}</span>)}



        {/* <span>{pizzaObj.soldOut ? "Sold Out!!!": pizzaObj.price}</span> */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 20;
  function areWeOpen() {
    if (hour >= openHour && hour <= closeHour) console.log("We are Open!!");
    else console.log("We are Closed!!");
  }
  return (
    <footer className="footer">
      {areWeOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Sorry, we are closed now. We close at {closeHour} Please come back
          tomorrow.
        </p>
      )}
    </footer>
  );
}

function Order({ openHour }) {
  return (
    <div className="order">
      <p>we are open untill {openHour}:00. Come see us or order online!!</p>
      <button className="btn">Order Now</button>
      <p>© 2024 Pizza Menu</p>
    </div>
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
