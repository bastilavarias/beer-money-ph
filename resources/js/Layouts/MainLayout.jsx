import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function MainLayout({ children }) {
    const style = {
        root: {
            backgroundColor: "f9f9f9",
            height: "100vh",
            color: "white",
        },
        banner: {
            position: "relative",
            width: "100%",
            height: "25vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        },
        bannerOverlay: {
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: ".8",
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
                            <Button className="font-bold" color="inherit">
                                Home
                            </Button>
                            <Button className="font-bold" color="inherit">
                                Login
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Container>
                    <Box
                        style={{
                            ...style.banner,
                            backgroundImage:
                                'url("storage/images/home-banner.jpg")',
                        }}
                    >
                        <Paper
                            elevation={0}
                            style={style.bannerOverlay}
                        ></Paper>
                    </Box>
                </Container>

                <main>{children}</main>
            </Box>
        </>
    );
}
