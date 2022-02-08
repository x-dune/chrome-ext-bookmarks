import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "@/store"

const dialogSelector = (state: RootState) => state.dialog
export const dialogConfigSelector = createSelector(dialogSelector, (dialog) => dialog.dialogConfig)

export const shouldShowDialogSelector = createSelector(dialogConfigSelector, (dialogConfig) => dialogConfig !== null)
