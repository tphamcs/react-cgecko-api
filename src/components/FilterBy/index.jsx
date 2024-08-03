import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CoinListContext } from '../../context/CoinListContext';

const FilterBy = () => {
  const {setNumberResult} = useContext(CoinListContext)
  const [selected, setSelected] = useState('Filter By')
  

  const resultHandler = (e) => {

    switch (e) {
      case '10':
        setNumberResult(10)
        setSelected(e)
        break;

      case '15':
        setNumberResult(15)
        setSelected(e)
        break;

      case '20':
        setNumberResult(20)
        setSelected(e)
        break;

      default:
        break;
    }
    
  }

  return (
    <DropdownButton onSelect={resultHandler} id="dropdown-basic-button" title={selected}>
      <Dropdown.Item eventKey="10">10</Dropdown.Item>
      <Dropdown.Item eventKey="15">15</Dropdown.Item>
      <Dropdown.Item eventKey="20">20</Dropdown.Item>
    </DropdownButton>
  );
}

export default FilterBy;