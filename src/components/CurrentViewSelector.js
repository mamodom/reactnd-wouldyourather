import React from 'react';
import { Button } from '@material-ui/core';

const CurrentViewSelector = ({ keyValue, selected, onSelected }) => {
  return (
    <Button
      variant="raised"
      color={keyValue === selected ? 'primary' : 'default'}
      onClick={() => onSelected(keyValue)}
    >
      {keyValue}
    </Button>
  );
};

export default CurrentViewSelector;
