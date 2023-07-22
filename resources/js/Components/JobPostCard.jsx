import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function JobPostCard() {
    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Card color="primary" variant="outlined">
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Posted 1 day ago
                        </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                </Card>
            </Box>
        </>
    );
}
