import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import EmployerPostedJobCard from "@/Components/Employer/EmployerPostedJobCard";

export default function EmployerPostedJobList() {
    const theme = useTheme();

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
                        Posted Jobs (3)
                    </Typography>
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={12} paddingBottom={2}>
                        <EmployerPostedJobCard />
                    </Grid>
                    <Grid item xs={12} paddingBottom={2}>
                        <EmployerPostedJobCard />
                    </Grid>
                    <Grid item xs={12} paddingBottom={2}>
                        <EmployerPostedJobCard />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
