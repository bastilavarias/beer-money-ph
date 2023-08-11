import * as React from "react";
import Container from "@mui/material/Container";
import MainLayout from "@/Layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import SportsBarIcon from "@mui/icons-material/SportsBar.js";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "@inertiajs/react";

export default function SignIn() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "test@gmail.com",
        password: "123456",
        remember: false,
    });

    return (
        <>
            <MainLayout>
                <Container
                    maxWidth="lg"
                    style={{
                        paddingTop: "2rem",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid container xs={12} sm={10} md={8} lg={6} xl={5}>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                            }}
                        >
                            <Card variant="outlined" sx={{ width: "100%" }}>
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <IconButton
                                        color="secondary"
                                        aria-label="sports bar"
                                    >
                                        <SportsBarIcon sx={{ fontSize: 80 }} />
                                    </IconButton>
                                </CardContent>
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Grid container>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <TextField
                                                placeholder="Email"
                                                fullWidth={true}
                                            />
                                        </Grid>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <TextField
                                                placeholder="Password"
                                                fullWidth={true}
                                                type="password"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                size="large"
                                                fullWidth={true}
                                                disableElevation={true}
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                Login
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardContent>
                                    <Divider sx={{ color: "black" }}>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                        >
                                            or continue with
                                        </Typography>
                                    </Divider>
                                </CardContent>
                                <CardContent sx={{ paddingBottom: 5 }}>
                                    <Grid container>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <Button
                                                variant="outlined"
                                                size="large"
                                                fullWidth={true}
                                                disableElevation={true}
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                                startIcon={<GoogleIcon />}
                                                href="/auth/google/redirect"
                                            >
                                                Google
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <Button
                                                variant="outlined"
                                                size="large"
                                                fullWidth={true}
                                                disableElevation={true}
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                                startIcon={<GoogleIcon />}
                                                href="/auth/github/redirect"
                                            >
                                                Github
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardContent>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            paddingBottom: 2,
                                        }}
                                    >
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="black"
                                        >
                                            or register manually
                                        </Typography>
                                    </Box>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        size="large"
                                        fullWidth={true}
                                        disableElevation={true}
                                        sx={{
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        Register
                                    </Button>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Container>
            </MainLayout>
        </>
    );
}
