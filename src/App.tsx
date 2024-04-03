import React, {useState} from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./index.css";
import { CssBaseline } from "@mui/material";
import Protected from "./pages/Protected";
import SignUp from "./pages/SignUp";
import Theme from "./components/Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Chats />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/chat-room/:id",
    element: <ChatRoom />,
  },
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [isDark, setIsDark]=useState(true)

  return (
    <>
    <ThemeProvider theme={darkTheme}>      
      <CssBaseline />
      <div onClick={()=>{
        setIsDark(!isDark)
      }}>
        <Theme/>
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
};

export default App;
