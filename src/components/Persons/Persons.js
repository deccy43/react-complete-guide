import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((p, i) => {
    return (
        <Person
        key={p.id}
        click={() => props.clicked(i)}
        name={p.name}
        age={p.age}
        changed={(event) => props.changed(event, p.id)}
        />
    );
});

export default persons;