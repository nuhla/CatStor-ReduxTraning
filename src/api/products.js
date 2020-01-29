import Prouducts from './Data';
export function getAll() {
  return Promise.resolve(Prouducts);
}
export function getById(id) {
  console.log('in getById ', parseInt(id));
  const product = Prouducts.find(element => element.id === parseInt(id));
  return Promise.resolve(product);
}

export default {
  getAll,
  getById
};
