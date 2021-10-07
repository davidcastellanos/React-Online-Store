import { stock } from '../assets/data/data';

export const pedirStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
      // reject("Rechazado")
    }, 2000);
  });
};
