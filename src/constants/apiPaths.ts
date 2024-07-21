const prefix = import.meta.env.VITE_API_PREFIX || ".execute-api2";

const API_PATHS = {
  product: "https://6jeal9ve0d.execute-api.us-east-1.amazonaws.com/prod",
  order: `https://${prefix}.eu-west-1.amazonaws.com/dev`,
  import: "https://i6gsu0m0sg.execute-api.us-east-1.amazonaws.com/prod",
  bff: `https://${prefix}.eu-west-1.amazonaws.com/dev`,
  cart: `https://${prefix}.eu-west-1.amazonaws.com/dev`,
};

export default API_PATHS;
