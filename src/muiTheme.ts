import { createTheme } from "@mui/material/styles"
// @ts-expect-error open-props does not provide types
import Colors from "open-props/src/colors"

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: Colors["--gray-9"],
      default: Colors["--gray-9"],
    },
  },
})

export default theme
