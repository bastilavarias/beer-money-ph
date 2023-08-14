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
import Avatar from "@mui/material/Avatar";

const defaultForm = {
    category: "",
    name: "",
    description: "",
    budget: 0,
    slots: 0,
    payments: [],
};
const defaultError = {
    category: false,
    name: false,
    description: false,
    budget: false,
    slots: false,
};

export default function EmployerJobForm({ jobCategories }) {
    const theme = useTheme();
    const { data, setData, post } = useForm(defaultForm);
    const [error, setError] = React.useState(defaultError);

    const PaymentMethodCheckBox = ({ name, text }) => {
        return (
            <FormControlLabel
                control={
                    <Checkbox
                        value={name}
                        onChange={handleCheckBoxChange}
                        checked={data.payments.includes(name)}
                    />
                }
                label={
                    <React.Fragment>
                        <Box sx={{ display: "flex" }}>
                            <Typography
                                variant="span"
                                component="span"
                                sx={{
                                    fontWeight: "bold",
                                    marginRight: 1,
                                }}
                            >
                                {text}
                            </Typography>
                            <Avatar
                                sx={{
                                    width: 24,
                                    height: 24,
                                }}
                                alt={`${text} Icon`}
                                src={`/assets/icons/${name}.png`}
                            />
                        </Box>
                    </React.Fragment>
                }
            />
        );
    };
    const PaymentMethodCheckBoxGroup = () => {
        const methods = [
            {
                text: "Gcash",
                name: "gcash",
            },
            {
                text: "MAYA",
                name: "maya",
            },
            {
                text: "Bank Transfer",
                name: "bank",
            },
        ];
        return (
            <FormGroup>
                {methods.map((method, index) => (
                    <PaymentMethodCheckBox
                        name={method.name}
                        text={method.text}
                        key={index}
                    ></PaymentMethodCheckBox>
                ))}
            </FormGroup>
        );
    };

    const handleCheckBoxChange = (e) => {
        const payment = e.target.value;
        const paymentsCopy = [...data.payments];
        if (paymentsCopy.includes(payment)) {
            setData(
                "payments",
                paymentsCopy.filter((_payment) => _payment !== payment)
            );
        } else {
            setData("payments", [...data.payments, e.target.value]);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("job-post.store"), {
            onSuccess: (data) => {
                console.log("Creating job success.");
                resetForm();
            },
            onError: (err) => {
                setError(
                    Object.assign(
                        {},
                        {
                            ...defaultError,
                            ...err,
                        }
                    )
                );
            },
        });
    };
    const resetForm = () => {
        setData("category", "");
        setData("name", "");
        setData("description", "");
        setData("budget", 0);
        setData("slots", 0);
        setData("payments", []);
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
                            value={data.category}
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
                        error={error.name}
                        helperText={error.name}
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
                        error={error.description}
                        helperText={error.description}
                    ></TextField>
                </Grid>
                <Grid item container spacing={2} paddingBottom={2}>
                    <Grid item xs={8}>
                        <TextField
                            size="small"
                            fullWidth={true}
                            placeholder="Budget"
                            type="number"
                            helperText="Amount in Philippine peso (₱)"
                            onChange={(e) => setData("budget", e.target.value)}
                            error={error.budget}
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            size="small"
                            fullWidth={true}
                            placeholder="Slots"
                            type="number"
                            onChange={(e) => setData("slots", e.target.value)}
                            error={error.slots}
                            helperText={error.slots}
                        ></TextField>
                    </Grid>
                </Grid>
                <Grid container paddingBottom={2}>
                    <Grid xs={12} item paddingBottom={2}>
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
                    <Grid item xs={12}>
                        <PaymentMethodCheckBoxGroup />
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
