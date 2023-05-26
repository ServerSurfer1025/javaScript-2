import React from "react";
import Person from "./Person";

//List

function PersonList() {
  const persons = [
    { id: 1, name: "Michael", title: "Web Developer" },
    { id: 2, name: "John", title: "Web Inspector" },
    { id: 3, name: "Shawty Lo", title: "Rapper" },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default PersonList;
