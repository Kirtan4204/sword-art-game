import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CharachterList } from '../components/charachterList/characterList';
import { CharacterSelection } from '../components/CharacterSelection/CharacterSelection';

export const CharactersScreen = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((store: any) => store.login.isLoggedIn);
  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
    <CharachterList/>
    <CharacterSelection 
    />
    </>
  );
};
