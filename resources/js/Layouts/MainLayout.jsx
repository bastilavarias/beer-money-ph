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

export default function MainLayout({ children }) {
    const theme = useTheme();
    const style = {
        root: {
            backgroundColor: "#eef2f5",
            minHeight: "100vh",
            color: "white",
        },
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
                            <Button
                                component={Link}
                                href="/employer/dashboard"
                                className="font-bold"
                                color="inherit"
                            >
                                Dashboard
                            </Button>
                            <Button
                                component={Link}
                                href="/"
                                className="font-bold"
                                color="inherit"
                            >
                                Home
                            </Button>
                            <Button
                                component={Link}
                                href="/sign-in"
                                className="font-bold"
                                color="inherit"
                            >
                                Login
                            </Button>
                            <Button className="font-bold" color="inherit">
                                Profile
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>

                <main>{children}</main>
            </Box>
        </>
    );
}
