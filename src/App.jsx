import { Box, Stack } from "@mui/material"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import SideBar from "./components/SideBar"
import Navbar from "./components/Navbar"

function App() {

  // const theme = createTheme({

  return (
    <Box>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'  >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}

export default App
