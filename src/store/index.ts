import { combineReducers, configureStore } from "@reduxjs/toolkit"
import bookmark from "@/bookmark/bookmarkSlice"

const rootReducer = combineReducers({
  bookmark,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
