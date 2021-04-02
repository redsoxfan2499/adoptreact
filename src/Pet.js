import React from 'react';

// const Pet = props => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", { id: props.id }, props.name),
//         React.createElement("h2", { id: props.id }, props.animal),
//         React.createElement("h2", { id: props.id }, props.breed)
//     ]);
// };
// Desctructing example
export default function Pet ({ id, name, animal, breed }) {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", { id: id }, name),
    //     React.createElement("h2", { id: id }, animal),
    //     React.createElement("h2", { id: id }, breed),
    // ]);

    return (
        <div>
            <h1>{ name }</h1>
            <h2>{ animal }</h2>
            <h2>{ breed }</h2>
        </div>
    )
};
