import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characterList: [
      {
        name: "Goku",
        health: 100,
        fraction: "Saiyan",
        weapon: "Ki",
        damagePerHit: 25,
      },
      {
        name: "Bobrik",
        health: 150,
        fraction: "Random",
        weapon: "Bow",
        damagePerHit: 19,
      },
      {
        name: "Valera",
        health: 80,
        fraction: "Ukraine",
        weapon: "Tanto",
        damagePerHit: 15,
      },
    ],
    battleCharacters: [],
  },
  reducers: {
    setBattleCharacters: (state, action) => {
      return {
        characterList: state.characterList,
        battleCharacters: action.payload,
      };
    },
  },
});

export const { setBattleCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;