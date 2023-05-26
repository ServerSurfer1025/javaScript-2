import React from "react";

//Map Method
//index is best method when there are mulitple names that match one another.

function NameList() {
  const names = [
    "Terrian",
    "Kaitlynn",
    "Valerie",
    "Mikey",
    "Jennie May",
    "Jennie May",
  ];
  const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>);
  return <div>{nameList}</div>;
}

export default NameList;
