import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import _ from "lodash";
import {Person} from "./Person";

export const Board = () => {
    const [people, setPeople] = useState<string[]>([]);

    const addPerson = (person: string) => {
        setPeople([...people, person]);
    }

    const peeps = [
        "Emily",
        "Joe",
        "Jay"
    ];

    const addRandomPerson = () => {
        const person = _.sample(peeps);
        if(person)
            addPerson(person);
    }

    return (
        <div>
            <div>
                <Button onClick={addRandomPerson}>Click me!</Button>
            </div>
            <div>
                {
                    people.map(p => (
                        <Person person={p}/>
                    ))
                }
            </div>
        </div>
    )
}