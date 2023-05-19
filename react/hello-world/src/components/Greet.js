import React from "react";

/*

//components

function Greet() {
  return (
    <div>
      <h1> Hello Terrian</h1>
    </div>
  );
}

function Greet2() {
  return (
    <div>
      <h2>This is my 2nd header</h2>
    </div>
  );
}
*/

//passing prop

function Greet(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} aka {props.nickname}
      </h1>
      {props.children}
    </div>
  );
}

const Greet2 = ({ name, nickname }) => {
  return (
    <div>
      <h2>
        Hello {name} aka {nickname}
      </h2>
    </div>
  );
};
const Greet3 = (props) => {
  const { name, nickname } = props;
  return (
    <div>
      <h2>
        Hello {name} aka {nickname}
      </h2>
    </div>
  );
};

export { Greet, Greet2, Greet3 };
