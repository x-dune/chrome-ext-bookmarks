import { combineReducers, configureStore } from "@reduxjs/toolkit"
import favourite from "../favourite/favouriteReducer"

const rootReducer = combineReducers({
  favourite,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
