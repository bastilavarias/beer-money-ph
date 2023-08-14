import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export default function EmployerPostedJobCard({ job }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(job);

    return (
        <React.Fragment>
            <Box sx={{ width: "100%" }}>
                <Card color="primary" variant="outlined">
                    <CardHeader
                        title={
                            <React.Fragment>
                                <Typography
                                    variant="subtitle2"
                                    component="h6"
                                    sx={{ fontWeight: 500 }}
                                >
                                    {job.name}
                                </Typography>
                            </React.Fragment>
                        }
                        subheader={
                            <React.Fragment>
                                <Typography
                                    variant="caption"
                                    component="p"
                                    sx={{ fontWeight: 500 }}
                                >
                                    Posted 3 days ago
                                </Typography>
                            </React.Fragment>
                        }
                        action={
                            <React.Fragment>
                                <IconButton
                                    id="basic-button"
                                    aria-controls={
                                        open ? "basic-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                    aria-label="more_vertical"
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <MenuItem
                                        dense={true}
                                        onClick={handleClose}
                                    >
                                        Complete job
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem
                                        dense={true}
                                        onClick={handleClose}
                                    >
                                        Manage members
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem
                                        dense={true}
                                        onClick={handleClose}
                                    >
                                        Edit information
                                    </MenuItem>
                                    <MenuItem
                                        dense={true}
                                        onClick={handleClose}
                                    >
                                        View edit history
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem
                                        dense={true}
                                        onClick={handleClose}
                                    >
                                        Close application
                                    </MenuItem>
                                    <MenuItem
                                        dense={true}
                                        onClick={handleClose}
                                    >
                                        Delete
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        }
                    ></CardHeader>
                    <CardContent sx={{ paddingTop: 0 }}>
                        <Typography variant="body2" component="p">
                            {job.description}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box></Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: theme.palette.success.main,
                                }}
                                variant="subtitle2"
                                component="p"
                            >
                                ₱ {job.budget}
                            </Typography>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </React.Fragment>
    );
}
