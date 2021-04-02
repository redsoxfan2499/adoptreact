import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       id: 1,
//       name: "Gabbie",
//       animal: "Dog",
//       breed: "Maltese",
//     }),
//     React.createElement(Pet, {
//       id: 2,
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       id: 3,
//       name: "Dawg",
//       animal: "Dog",
//       breed: "Mixed",
//     }),
//   ]);
// };

    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Gabbie" animal="Dog" breed="Maltese" />
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Dawg" animal="Dog" breed="Mixed" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
