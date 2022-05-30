import { v4 as uuidv4 } from "uuid";

const users = [
  {
    name: "maxim",
    email: "maxim@gmail.com",
    password: "1g9r9l",
  },
];
let wines = [
  {
    photo: null,
    name: "Lenotti Capomastro",
    country: "Italy",
    region: "Veneto",
    grape: "Corvina",
    type: "Red Wine",
    price: "9.95",
    id: uuidv4(),
  },
  {
    photo: null,
    name: "Corteresso",
    country: "Italy",
    region: "Emilia",
    grape: "Sangiovese",
    type: "Red Wine",
    price: "7.95",
    id: uuidv4(),
  },
  {
    photo: null,
    name: "Salentein Barrel Selection Meriot",
    country: "Argentina",
    region: "Tunuyan",
    grape: "Meriot",
    type: "Red Wine",
    price: "14.95",
    id: uuidv4(),
  },
];

function signup(data) {
  const user = users.find((user) => user.email === data.email);
  if (user) {
    return "User with this email already exists";
  }

  users.push(data);

  return {
    name: data.name,
    email: data.email,
  };
}

function login(data) {
  const user = users.find((user) => user.email === data.email);

  if (!user || user.password !== data.password) {
    return "Invalid email or password";
  }

  return {
    name: user.name,
    email: user.email,
  };
}

function getWines() {
  return wines;
}

function addWine(data) {
  wines = [...wines, data];
}

export { signup, login, getWines, addWine };
