import { AnyAction, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit"
import bookmark from "@/bookmark/bookmarkSlice"
import dialog from "@/dialog/dialogSlice"

const rootReducer = combineReducers({
  bookmark,
  dialog,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
