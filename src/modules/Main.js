import React from "react";
import "../App.css"

export default function Main(props) {
    const inQueue = props.bars.inQueue;
    let peopleArray = [];
    for (let i = 0; i < inQueue ; i++) {
        const newDiv = document.createElement("div");
        newDiv.key = i;
        peopleArray.push(newDiv);
    }
    return (
        <main>
            {peopleArray.map(person=>{
          return <p key={person.key} className="imgholder">
              <img className="personimg" alt="person" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png"/>
          </p>
        })}
            <p className="desc"> There are {inQueue} people in the queue</p>
        </main>
    )
}