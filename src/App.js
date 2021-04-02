// const Pet = props => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", { id: props.id }, props.name),
//         React.createElement("h2", { id: props.id }, props.animal),
//         React.createElement("h2", { id: props.id }, props.breed)
//     ]);
// };

// Desctructing example
const Pet = ({ id, name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: id }, name),
    React.createElement("h2", { id: id }, animal),
    React.createElement("h2", { id: id }, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      id: 1,
      name: "Gabbie",
      animal: "Dog",
      breed: "Maltese",
    }),
    React.createElement(Pet, {
      id: 2,
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      id: 3,
      name: "Dawg",
      animal: "Dog",
      breed: "Mixed",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
