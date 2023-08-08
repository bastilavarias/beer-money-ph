import MainLayout from "../Layouts/MainLayout";
import Container from "@mui/material/Container";
import JobPostCard from "../components/JobPostCard";
import Grid from "@mui/material/Grid";

export default function Welcome({ user }) {
    return (
        <>
            <MainLayout user={user}>
                <Container
                    maxWidth="lg"
                    style={{
                        paddingTop: "2rem",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <JobPostCard />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <JobPostCard />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <JobPostCard />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}></Grid>
                    </Grid>
                </Container>
            </MainLayout>
        </>
    );
}
