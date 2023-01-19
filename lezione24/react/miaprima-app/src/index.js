import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function ingredientList(props) {
  console.log(props.items);
  return React.createElement(
    "ul",
    { className: "textclass" },
    props.items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );
}

const myIngredients = [
  "1 mascarpone",
  "1 savoiardi",
  "1 uova",
  "1 zucchero",
  "1 cacao",
];

const otherIngredients = ["1 piatto", "1 pane", "1 farina", "1 mandorle"];
const lastIngredients = ["1 mug", "1 cavolo", "1 miele", "1 brodo"];
const primaRicetta =
  "Tiramisù è uno dei capisaldi della cucina italiana, uno dei dolci al cucchiaio più amati e realizzati in tutto il mondo. Le origini del tiramisù sono molto incerte e diverse città ne rivendicano la paternità. Ciò di cui siamo certi è che dal 1980 in poi, anno in cui questo termine venne inserito nel vocabolario italiano, il tiramisù ha avuto un successo enorme! ";
const secondaRicetta = "loren ipsum loren ipsum loren ipsum loren ipsum";
const terzaRicetta = "loren ipsum loren ipsum loren ipsum loren ipsum";

const photoRicettaUno ="https://www.giallozafferano.it/images/237-23742/Tiramisu_450x300.jpg";

function threeColumns() {
  return React.createElement(
    "div",
    { className: "tabella" },
    React.createElement(
      "div",
      { className: "colonna" },
      React.createElement("h1", null, "Il tiramisù"),
      React.createElement("img", {src: photoRicettaUno, height: "200px",  width: "300px"}, null),
      React.createElement(ingredientList, { items: myIngredients }, null),
      React.createElement("p", { className: "textclass" }, primaRicetta),
    ),
    React.createElement(
      "div",
      { className: "colonna" },
      React.createElement("h1", null, "La seconda ricetta"),
      React.createElement("img", {src: photoRicettaUno, height: "200px",  width: "300px"}, null),
      React.createElement(ingredientList, { items: otherIngredients }, null),
      React.createElement("p", { className: "textclass" }, secondaRicetta),
    ),
    React.createElement(
      "div",
      { className: "colonna" },
      React.createElement("h1", null, "La terza ricetta"),
      React.createElement("img", {src: photoRicettaUno, height: "200px",  width: "300px"}, null),
      React.createElement(ingredientList, { items: lastIngredients }, null),
      React.createElement("p", { className: "textclass" }, terzaRicetta),
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(threeColumns, null, null));