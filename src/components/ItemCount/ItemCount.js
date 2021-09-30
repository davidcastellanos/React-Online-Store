import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCount = ({ initialValue }) => {
  const [contadorItem, setContadorItem] = useState(initialValue);

  const incrementar = () => {
    if (contadorItem <= 19) {
      setContadorItem(contadorItem + 1);
    }
  };

  const restar = () => {
    if (contadorItem > 0) {
      setContadorItem(contadorItem - 1);
    }
  };

  const resetear = () => {
    setContadorItem(initialValue);
  };

  return (
    <>
      <ButtonGroup size='sm'>
        <Button variant='danger' onClick={() => resetear()} id='reset'>
          Reset
        </Button>
        <Button variant='warning' onClick={() => restar()} id='resta'>
          -
        </Button>
        <Card body>
          <h6>{contadorItem}</h6>
        </Card>
        <Button variant='success' onClick={() => incrementar()} id='suma'>
          +
        </Button>
      </ButtonGroup>
    </>
  );
};
