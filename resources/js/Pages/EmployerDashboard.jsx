import * as React from "react";
import Container from "@mui/material/Container";
import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import EmployerJobForm from "@/Components/Employer/EmployerJobForm.jsx";
import EmployerPostedJobList from "@/Components/Employer/EmployerPostedJobList";

export default function EmployerDashboard({ user, job_categories, job_posts }) {
    console.log(job_posts);

    return (
        <>
            <MainLayout user={user}>
                <Container
                    maxWidth="lg"
                    style={{
                        paddingTop: "2rem",
                    }}
                >
                    <Card variant="outlined">
                        <CardHeader
                            title={
                                <React.Fragment>
                                    <Typography
                                        component="h3"
                                        variant="h6"
                                        sx={{ fontWeight: "regular" }}
                                    >
                                        Dashboard
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
                            <Grid container spacing={2}>
                                <Grid item xs={7}>
                                    <EmployerJobForm
                                        jobCategories={job_categories}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <EmployerPostedJobList
                                        jobPosts={job_posts.data}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </MainLayout>
        </>
    );
}
