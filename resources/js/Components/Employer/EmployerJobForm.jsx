import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function EmployerJobForm() {
    const theme = useTheme();

    return (
        <>
            <Grid container>
                <Grid item xs={12} paddingBottom={2}>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        sx={{
                            color: theme.palette.grey[700],
                        }}
                    >
                        Create a new Job
                    </Typography>
                </Grid>
                <Grid item xs={12} paddingBottom={2}>
                    <FormControl fullWidth size="small">
                        <InputLabel
                            id="job-type-select-label"
                            sx={{ color: theme.palette.grey[400] }}
                        >
                            Type
                        </InputLabel>
                        <Select
                            labelId="job-type-select-label"
                            id="job-type-select"
                            label="Type"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} paddingBottom={2}>
                    <TextField
                        size="small"
                        fullWidth={true}
                        placeholder="Job"
                    ></TextField>
                </Grid>
                <Grid item xs={12} paddingBottom={2}>
                    <TextField
                        size="small"
                        fullWidth={true}
                        placeholder="Description"
                        multiline
                        rows={4}
                    ></TextField>
                </Grid>
                <Grid item container spacing={2} xs={12} paddingBottom={2}>
                    <Grid item xs={8}>
                        <TextField
                            size="small"
                            fullWidth={true}
                            placeholder="Budget"
                            type="number"
                            helperText="Amount in Philippine peso (₱)"
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            size="small"
                            fullWidth={true}
                            placeholder="Slots"
                            type="number"
                        ></TextField>
                    </Grid>
                </Grid>
                <Grid item xs={12} paddingBottom={2}>
                    <FormControl fullWidth size="small">
                        <InputLabel
                            id="payment-method-type-select-label"
                            sx={{ color: theme.palette.grey[400] }}
                        >
                            Mode of Payment
                        </InputLabel>
                        <Select
                            labelId="payment-method-type-select-label"
                            id="payment-method-type-select"
                            label="Select mode of payment"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box></Box>
                        <Button
                            size="small"
                            sx={{
                                textTransform: "capitalize",
                                paddingX: 5,
                            }}
                            variant="contained"
                            color="primary"
                            disableElevation={true}
                        >
                            Post
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
