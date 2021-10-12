import React, { useEffect, useState } from 'react';
import { pedirStock } from '../../helpers/pedirStock';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirStock()
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((prod) => prod.category === categoryId));
        } else {
          setItems(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        console.log('Fin del llamado');
      });
  }, [categoryId]);

  return (
    <section className='container my-5'>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={items} />}
    </section>
  );
};
