const axios = require("axios");

const uri = "http://localhost:4000/product";
const getProducts = axios
  .get(uri)
  .then((response) => response.data)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

function addProduct(todo) {
  const response = axios
    .post(`${uri}/add`, todo)
    .then((res) => {
      if (res) {
        return true;
      } else return false;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return `\u2014`;
      }
    });
  return response;
}

const deleteProduct = (id) => axios.delete(`${uri}/${id}`);

const updateProduct = (id, newProduct) =>
  axios.patch(`${uri}/${id}`, newProduct);

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
