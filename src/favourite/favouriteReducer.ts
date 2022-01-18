import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Favourite } from "@/favourite/favouriteTypes"

const initialState: Favourite[] = []

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    set(_, action: PayloadAction<Favourite[]>) {
      return action.payload
    },
  },
})

export const favouriteActions = favouriteSlice.actions
export default favouriteSlice.reducer
