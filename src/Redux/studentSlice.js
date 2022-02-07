import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  studentRecords:[]
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudents: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
      state.studentRecords.push(action.payload);
    },
    deleteStudents: (state) => {
      state.value -= 1
    },
    updateStudents: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addStudents, deleteStudents, updateStudents } = studentSlice.actions

export default studentSlice.reducer