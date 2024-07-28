const prefix = import.meta.env.VITE_API_PREFIX || ".execute-api2";

const API_PATHS = {
  product: "https://6jeal9ve0d.execute-api.us-east-1.amazonaws.com/prod",
  order: `https://gmee5dd5ja.execute-api.us-east-1.amazonaws.com/prod/api`,
  // order: "http://localhost:4000/api",
  import: "https://i6gsu0m0sg.execute-api.us-east-1.amazonaws.com/prod",
  bff: `https://${prefix}.eu-west-1.amazonaws.com/dev`,
  cart: `https://gmee5dd5ja.execute-api.us-east-1.amazonaws.com/prod/api`,
  // cart: "http://localhost:4000/api",
};

export default API_PATHS;
