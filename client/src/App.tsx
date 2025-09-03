import { setApiUri } from "@utilities/api_configurations";
import { useAtom, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { defaultTheme, darkTheme } from "@themes/index";
import React from "react";
import AppRoutes from "./AppRoutes";
import { CardLinedHeader } from "@imports/CommonComponents";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { ContrastIcon, DarkModeIcon, EditIcon, ShoppingCartIcon } from "@imports/MaterialUIIcons";
import { editModeAtom, userAtom } from '@utilities/atoms';
const darkModeAtom = atomWithStorage("darkMode", false);

const createCustomTheme = (themeOptions: any, cssVariables: any) => ({
  ...createTheme(themeOptions),
  cssVariables,
});

const themeDefault = createCustomTheme(defaultTheme.themeOptions, defaultTheme.cssVariables);
const themeDark = createCustomTheme(darkTheme.themeOptions, darkTheme.cssVariables);

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
	const setEditModeAtom = useSetAtom(editModeAtom);
  const [editMode] = useAtom(editModeAtom);
  const [darkMode, setdarkMode] = useAtom(darkModeAtom);
	const setUserAtom = useSetAtom(userAtom);
  const [user] = useAtom(userAtom);
  const theme = darkMode ? themeDefault : themeDark;
  const userName = user?.firstName && user?.lastName ? user.firstName.charAt(0) + user.lastName : "";

  setApiUri(import.meta.env.VITE_API_URI);

  React.useEffect(() => {
    if (theme.cssVariables) {
      Object.entries(theme.cssVariables).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value as string);
      });
    }
    document.documentElement.style.setProperty('--background-container', theme.palette.background.container);
    document.documentElement.style.setProperty('--text-primary', theme.palette.text.primary);
  }, [theme]);

  const handleEditShopMode = () => {
    setEditModeAtom(!editMode);
  };

  const handleUserNameClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleClose();
    setUserAtom(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CardLinedHeader
        titleText='Grocery Getter'
        sx={{
          backgroundColor: theme.palette.background.container,
          height: '4vh',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          justifyContent: 'space-between',
          borderRadius: 'unset',
        }}>
          <div>
            {userName.length > 0 &&
              <>
                <IconButton onClick={handleEditShopMode} style={{ marginRight: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                  {editMode ? <ShoppingCartIcon /> : <EditIcon />} 
                </IconButton>
                <Button variant="text" style={{ fontSize: '1rem', fontWeight: '400', textTransform: 'unset' }} onClick={handleUserNameClick}>{userName}</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </Menu>
              </>}
            <IconButton onClick={() => setdarkMode(!darkMode)} style={{ marginLeft: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              {darkMode ? <DarkModeIcon /> : <ContrastIcon />}
            </IconButton>
          </div>
        </CardLinedHeader>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
