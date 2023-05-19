//const myName = function (firstname, lastname) {
//return firstnamr + " " + lastname;
//};

/*const helloWorld = function (string) {
  return string;
};

const myName = (firstname, lastname) => {
  return `Good evening my name is ${firstname} ${lastname}`;
};

console.log(myName("Terrian", "Heck"));
console.log(helloWorld("Hello world my name is Terrian."));*/

//dynamic class object make sure to include super method to inherit parent class

/*class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  zoom() {
    console.log("This car is a ");
  }
}

class Truck extends Car {
  constructor(name, color) {
    super(name, color);
  }
  run() {
    console.log(`The truck is a`);
  }
}

let car1 = new Car("Dodge Charger", "black");
let car2 = new Car("Acura", "Silver");
let truck1 = new Truck("Toyota Tundra", "Candy Red");

console.log(car1);
car1.zoom();
truck1.run(); */

/*
// async

async function myFunction() {
  console.log("Good evening my Lad");
}

myFunction().then(
  function (value) {},
  function (error) {}
);

const myPromise = new Promise(function (res, rej) {
  setTimeout(function () {
    res("Whenever they play with you");
  }, 3000);
});

myPromise.then(function (value) {
  console.log(value);
});

async function myDisplay() {
  let myPromise = new Promise(function (reslove) {
    setTimeout(function () {
      reslove("STEP ON THEY NECKS!");
    }, 5000);
  });
  console.log(await myPromise);
}

myDisplay();

*/
