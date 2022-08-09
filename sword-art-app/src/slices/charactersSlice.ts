import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export interface Character {
  id: number;
  name: string;
  weapon: string;
  fraction: string;
  damagePerHit: number;
  health: number;
}

export interface CharactersState {
  characterList: Character[];
  characterToUpdate: Character | null;
  status: string;
  error: any;
  battleCharacters: Character[];
}

const initialState: CharactersState = {
  characterToUpdate: null,
  characterList: [],
  status: "idle",
  error: null,
  battleCharacters: [],
};


export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const response = await axios.get("http://localhost:8080/characters");
    return response.data;
  }
);


export const addCharacter = createAsyncThunk(
  "characters/addCharacter",
  async (character: Character) => {
    const response = await axios.post(
      "http://localhost:8080/characters",
      character
    );
    return response.data;
  }
);


export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacterToUpdate: (state, action) => {
      return {
        characterList: state.characterList,
        battleCharacters: state.battleCharacters,
        status: state.status,
        error: state.error,
        characterToUpdate: action.payload,
      };
    },
   

    setBattleCharacters: (state, action) => {
      return {
        characterList: state.characterList,
        battleCharacters: action.payload,
        status: state.status,
        error: state.error,
        characterToUpdate: state.characterToUpdate,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCharacters.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characterList = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(addCharacter.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addCharacter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characterList.push(action.payload);
      })
      .addCase(addCharacter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});


export const { setBattleCharacters, setCharacterToUpdate } = charactersSlice.actions;

export default charactersSlice.reducer;