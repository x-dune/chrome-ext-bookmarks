import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit"
import { DialogConfig, State } from "@/dialog/types"

const initialState: State = {
  dialogConfig: null,
}

const dialogConfig = createSlice({
  name: "dialog/dialogConfig",
  initialState: initialState.dialogConfig,
  reducers: {
    showDialog(_, action: PayloadAction<DialogConfig>) {
      return action.payload
    },
    hideDialog() {
      return null
    },
  },
})

export const dialogConfigActions = dialogConfig.actions

const dialog = combineReducers<State>({
  dialogConfig: dialogConfig.reducer,
})

export default dialog
