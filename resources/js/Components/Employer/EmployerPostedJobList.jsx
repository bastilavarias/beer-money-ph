import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import EmployerPostedJobCard from "@/Components/Employer/EmployerPostedJobCard";
export default function EmployerPostedJobList({ jobPosts }) {
    const theme = useTheme();

    const PostedJobCards = () => {
        return jobPosts.map((job) => (
            <React.Fragment>
                <Grid item xs={12} paddingBottom={2}>
                    <EmployerPostedJobCard job={job} />
                </Grid>
            </React.Fragment>
        ));
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        sx={{
                            color: theme.palette.grey[700],
                        }}
                    >
                        Posted Jobs ({jobPosts.length || 0})
                    </Typography>
                </Grid>
                <Grid item container xs={12}>
                    <PostedJobCards />
                </Grid>
            </Grid>
        </>
    );
}
