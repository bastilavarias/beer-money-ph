import * as React from "react";
import Container from "@mui/material/Container";
import MainLayout from "@/Layouts/MainLayout";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FormControl from "@mui/material/FormControl";

export default function SignUp() {
    const theme = useTheme();

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
                    <Grid container xs={12} sm={10} md={8} xl={6}>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                            }}
                        >
                            <Card variant="outlined" sx={{ width: "100%" }}>
                                <CardHeader
                                    title={
                                        <React.Fragment>
                                            <Typography
                                                component="h3"
                                                variant="h6"
                                                sx={{ fontWeight: "regular" }}
                                            >
                                                Sign Up
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    subheader={
                                        <React.Fragment>
                                            <Typography
                                                component="p"
                                                variant="subtitle1"
                                                sx={{
                                                    color: "black",
                                                }}
                                            >
                                                Lorem ipsum dolor sit amet.
                                            </Typography>
                                        </React.Fragment>
                                    }
                                ></CardHeader>
                                <CardContent>
                                    <Grid container>
                                        <Grid xs={12} paddingBottom={2}>
                                            <Typography
                                                variant="subtitle2"
                                                component="p"
                                                sx={{
                                                    color: theme.palette
                                                        .grey[700],
                                                }}
                                            >
                                                Personal information
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            xs={12}
                                            paddingBottom={2}
                                            spacing={2}
                                        >
                                            <Grid item xs={6}>
                                                <TextField
                                                    placeholder="First Name"
                                                    size="small"
                                                    fullWidth={true}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    placeholder="Last Name"
                                                    size="small"
                                                    fullWidth={true}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <TextField
                                                size="small"
                                                placeholder="Email"
                                                fullWidth={true}
                                                type="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                size="small"
                                                placeholder="Contact No."
                                                fullWidth={true}
                                                type="telephone"
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardContent>
                                    <Grid container>
                                        <Grid xs={12} paddingBottom={2}>
                                            <Typography
                                                variant="subtitle2"
                                                component="p"
                                                sx={{
                                                    color: theme.palette
                                                        .grey[700],
                                                }}
                                            >
                                                Payment methods
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <TextField
                                                size="small"
                                                placeholder="Gcash No."
                                                fullWidth={true}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PaymentIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <TextField
                                                size="small"
                                                placeholder="Maya No."
                                                fullWidth={true}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PaymentIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            xs={12}
                                            spacing={2}
                                        >
                                            <Grid item xs={4}>
                                                <TextField
                                                    size="small"
                                                    placeholder="Bank"
                                                    fullWidth={true}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AccountBalanceIcon />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={8}>
                                                <TextField
                                                    size="small"
                                                    placeholder="Account No."
                                                    fullWidth={true}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>

                                <CardContent>
                                    <Grid container>
                                        <Grid xs={12} paddingBottom={2}>
                                            <Typography
                                                variant="subtitle2"
                                                component="p"
                                                sx={{
                                                    color: theme.palette
                                                        .grey[700],
                                                }}
                                            >
                                                Password
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <TextField
                                                size="small"
                                                placeholder="Password"
                                                fullWidth={true}
                                                type="password"
                                            />
                                        </Grid>
                                        <Grid item xs={12} paddingBottom={2}>
                                            <TextField
                                                size="small"
                                                placeholder="Confirm Password"
                                                fullWidth={true}
                                                type="password"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                fullWidth={true}
                                                disableElevation={true}
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                Register
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Container>
            </MainLayout>
        </>
    );
}
