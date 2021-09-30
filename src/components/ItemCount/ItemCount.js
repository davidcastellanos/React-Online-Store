import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCount = ({ initialValue }) => {
  const [contadorItem, setContadorItem] = useState(initialValue);

  const incrementar = () => {
    setContadorItem(contadorItem + 1);
  };

  const restar = () => {
    setContadorItem(contadorItem - 1);
  };

  const resetear = () => {
    setContadorItem(initialValue);
  };

  console.log(contadorItem);

  return (
    <>
      <ButtonGroup size='sm' className='mb-2'>
        <Button variant='danger' onClick={() => resetear()}>
          Reset
        </Button>
        <Button variant='warning' onClick={() => restar()}>
          -
        </Button>
        <Card body>
          <h4>{contadorItem}</h4>
        </Card>
        <Button variant='success' onClick={() => incrementar()}>
          +
        </Button>
      </ButtonGroup>
    </>
  );
};
