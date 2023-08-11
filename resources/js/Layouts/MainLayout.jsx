import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import Container from "@mui/material/Container";
import { Link } from "@inertiajs/react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { router } from "@inertiajs/react";

export default function MainLayout({ user, children }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const theme = useTheme();
    const style = {
        root: {
            backgroundColor: "#eef2f5",
            minHeight: "100vh",
            color: "white",
        },
    };
    const navigations = [
        {
            href: "/",
            text: "Home",
            protected: false,
        },
        {
            href: "/",
            text: "Home",
            protected: true,
        },
        {
            href: "/employer/dashboard",
            text: "Dashboard",
            protected: true,
        },
        {
            href: "/sign-in",
            text: "Login",
            protected: false,
        },
        {
            href: "/sign-up",
            text: "Register",
            protected: false,
        },
        {
            href: "/profile",
            text: "Profile",
            protected: true,
        },
    ];
    const settings = ["Logout"];

    const isAuthenticated = () => !!user;
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Box style={style.root}>
                <AppBar position="static" elevation={0}>
                    <Container maxWidth="lg">
                        <Toolbar
                            style={{
                                padding: 0,
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="secondary"
                                aria-label="sports bar"
                            >
                                <SportsBarIcon sx={{ fontSize: 35 }} />
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", sm: "block" },
                                    fontWeight: "bold",
                                }}
                            >
                                BeerMoneyPH
                            </Typography>
                            {navigations.map((navigation, index) =>
                                navigation.protected === isAuthenticated() ? (
                                    <Button
                                        component={Link}
                                        href={navigation.href}
                                        className="font-bold"
                                        color="inherit"
                                        key={index}
                                    >
                                        {navigation.text}
                                    </Button>
                                ) : null
                            )}
                            {isAuthenticated() ? (
                                <Box sx={{ flexGrow: 0, marginLeft: 1 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{ p: 0 }}
                                        >
                                            <Avatar
                                                alt={user.first_name}
                                                src={user.picture || null}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem
                                            href={route("logout")}
                                            as={Link}
                                        >
                                            <Typography textAlign="center">
                                                Logout
                                            </Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            ) : null}
                        </Toolbar>
                    </Container>
                </AppBar>

                <main>{children}</main>
            </Box>
        </>
    );
}
