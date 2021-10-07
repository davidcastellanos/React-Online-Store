import React, { useEffect, useState } from 'react';
import { pedirStock } from '../../helpers/pedirStock';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    pedirStock()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        console.log('Fin del llamado');
      });
  }, []);

  return (
    <section className='container my-5'>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={items} />}
    </section>
  );
};
