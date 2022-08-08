import React from 'react';
import './characterListItem.css';
import { Td, Tr } from "@chakra-ui/react";

export const CharacterListItem = ({Character, isChampion}) => {
  const {name, health, fraction, weapon, damagePerHit} = Character;
  return (
    <Tr key={name}>
      <Td className='character-name'>{isChampion ? `Champion ${name}` : name}</Td>
      <Td isNumeric>{health}</Td>
      <Td>{fraction}</Td>
      <Td>{weapon}</Td>
      <Td isNumeric>{damagePerHit}</Td>
    </Tr>
  );
};
