import React from "react";
import { CharacterListItem } from "./characterListItem/characterListItem.jsx";
import { Table, TableCaption, Thead, Th, Tr, Tbody } from "@chakra-ui/react";
import "./characterList.css";
import { useSelector } from "react-redux";

//props are passed to the component via attributes
export const CharachterList = () => {
  const characters = useSelector((state) => state.characters.characterList);
  //returns true if Math.random() is more than 0.5
  return (
    <Table>
      <TableCaption>Character table</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th isNumeric>Health</Th>
          <Th>Fraction</Th>
          <Th>Weapon</Th>
          <Th isNumeric>Damage Per Hit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {characters.map((Character) => (
          <CharacterListItem
            isChampion={Math.random() > 0.5}
            Character={Character}
          />
        ))}
      </Tbody>
    </Table>
  );
};
