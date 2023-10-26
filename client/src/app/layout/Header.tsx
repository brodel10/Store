import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const { darkMode, setDarkMode } = props;
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">TrailWare</Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          aria-label="theme switch"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
