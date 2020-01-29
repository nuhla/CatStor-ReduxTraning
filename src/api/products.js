import Prouducts from './Data';
export default function getAll() {
  return Promise.resolve(Prouducts);
}
export function getById(id) {
  return Prouducts.find(item => item.id === id);
}
