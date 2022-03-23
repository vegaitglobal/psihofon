import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import localInstruction from '../../assets/data/instruction.json';
import {Instruction} from '../models/Instruction';

export interface InstructionState {
  instruction: Instruction;
  isFirstUsage: boolean;
}

const initialState: InstructionState = {
  instruction: localInstruction,
  isFirstUsage: true,
};

export const instructionSlice = createSlice({
  name: 'instruction',
  initialState,
  reducers: {
    toggleIsFirstUsage: (state, action: PayloadAction<boolean>) => {
      state.isFirstUsage = action.payload;
    },
  },
});

export const {toggleIsFirstUsage} = instructionSlice.actions;

export default instructionSlice.reducer;
