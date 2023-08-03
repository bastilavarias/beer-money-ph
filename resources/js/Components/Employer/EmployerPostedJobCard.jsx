import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function EmployerPostedJobCard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                    Encode human resource data
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eum, sint...
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
                                ₱ 150.00
                            </Typography>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </React.Fragment>
    );
}
