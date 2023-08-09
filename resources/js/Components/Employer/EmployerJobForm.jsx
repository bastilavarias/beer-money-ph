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
import { useForm } from "@inertiajs/react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function EmployerJobForm({ jobCategories }) {
    const theme = useTheme();
    const { data, setData, post, processing, errors } = useForm({
        category: null,
        name: null,
        description: null,
        budget: 0,
        slots: 0,
        payments: [],
    });

    const handleSubmit = () => {
        console.log(data);
    };

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
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                        >
                            {jobCategories.map((category, index) => (
                                <MenuItem value={category.slug} key={index}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} paddingBottom={2}>
                    <TextField
                        size="small"
                        fullWidth={true}
                        placeholder="Job"
                        onChange={(e) => setData("name", e.target.value)}
                    ></TextField>
                </Grid>
                <Grid item xs={12} paddingBottom={2}>
                    <TextField
                        size="small"
                        fullWidth={true}
                        placeholder="Description"
                        multiline
                        rows={4}
                        onChange={(e) => setData("description", e.target.value)}
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
                            onChange={(e) => setData("budget", e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            size="small"
                            fullWidth={true}
                            placeholder="Slots"
                            type="number"
                            onChange={(e) => setData("slots", e.target.value)}
                        ></TextField>
                    </Grid>
                </Grid>
                <Grid xs={12} container paddingBottom={2}>
                    <Grid xs={12} paddingBottom={2}>
                        <Typography
                            variant="subtitle2"
                            component="p"
                            sx={{
                                color: theme.palette.grey[700],
                            }}
                        >
                            Payment methods
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Label"
                            />
                            <FormControlLabel
                                required
                                control={<Checkbox />}
                                label="Required"
                            />
                            <FormControlLabel
                                disabled
                                control={<Checkbox />}
                                label="Disabled"
                            />
                        </FormGroup>
                    </Grid>
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
                            onClick={handleSubmit}
                        >
                            Post
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
