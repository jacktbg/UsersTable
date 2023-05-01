import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material"
import { CustomDialog } from "../CustomDialog"
import { FavoriteTable } from "./FavoriteTable"
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog"

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleCLick = () => {
    dialogOpenSubject$.setSubject = true
  }
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleCLick()}
          >
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
