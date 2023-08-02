import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

export default function JobInformationModal({ open, rootRef, setIsModalOpen }) {
    const [openLocal, setOpenLocal] = React.useState(open);

    const theme = useTheme();
    console.log(theme);

    const onHandleCloseModal = () => setIsModalOpen(false);

    const JobDetailsListItem = ({ title, subtitle }) => (
        <ListItem>
            <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                            component="h6"
                            typography="caption"
                            sx={{
                                fontWeight: 800,
                                color: theme.palette.grey[700],
                                textTransform: "uppercase",
                            }}
                        >
                            {title}
                        </Typography>
                    </React.Fragment>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            component="p"
                            typography="subtitle2"
                            sx={{
                                fontWeight: 600,
                                color: "black",
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    );

    return (
        <Modal
            open={open}
            onClose={onHandleCloseModal}
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            container={() => rootRef.current}
        >
            <Box
                sx={{
                    bgcolor: "background.paper",
                    p: 4,
                    color: "black",
                    width: theme.breakpoints.values.md,
                    borderRadius: 1,
                    maxHeight: "80%",
                    overflow: "auto",
                    position: "relative",
                }}
            >
                <Grid container>
                    <Grid item xs={12} paddingBottom={3}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "start",
                                flexDirection: "column",
                            }}
                        >
                            <Typography variant="h4" component="h4">
                                Encode human resource data
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{
                                    color: theme.palette.success.main,
                                    fontWeight: "bold",
                                }}
                            >
                                ₱400.00 - ₱500.00
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingBottom: 2,
                                }}
                            >
                                <Chip label="Microtask" size="small" />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "start",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://avatars.githubusercontent.com/u/24890911?v=4"
                                        sx={{
                                            width: "1.5rem",
                                            height: "1.5rem",
                                            marginRight: 1,
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                    >
                                        Sebastian Curtis L.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ paddingTop: 4 }}>
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
                                    Apply
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid container item xs={12} paddingTop={3} spacing={2}>
                        <Grid item xs={7}>
                            <Typography
                                id="server-modal-description"
                                sx={{ pt: 2 }}
                            >
                                🎬 Job Opportunity: Video Editor (Remote,
                                Non-USA)
                                <br />
                                <br />
                                🏢 About Us: Skyhaus Media is a leading video
                                marketing company specializing in creating
                                captivating content for commercial and
                                residential real estate clients. We also
                                collaborate with small businesses, nonprofits,
                                and government entities, offering a wide range
                                of services including event recaps,
                                testimonials, interviews, and brand stories.
                                <br />
                                <br />
                                🔍 Job Summary: We are seeking talented video
                                editors to join our team for consistent video
                                projects! The ideal candidate should have a
                                passion for architecture and real estate, and be
                                skilled in video editing software such as Final
                                Cut Pro, Adobe Premiere Pro, Adobe After
                                Effects, and preferably Adobe Audition and
                                DaVinci Resolve. Experience with other programs
                                is a plus. 🎯 Key Skills: Proficient in Final
                                Cut Pro, Adobe Premiere Pro, and Adobe After
                                Effects. Preferably experienced in Adobe
                                Audition and DaVinci Resolve. that captivates
                                audiences worldwide.
                            </Typography>
                            <Box sx={{ paddingTop: 4 }}>
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
                                    Apply
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid item xs={12}>
                                <Grid item xs={12} paddingBottom={2}>
                                    <Card color="primary" variant="outlined">
                                        <List
                                            dense={true}
                                            sx={{
                                                width: "100%",
                                                bgcolor: "background.paper",
                                            }}
                                            aria-labelledby="list-subheader"
                                            subheader={
                                                <ListSubheader
                                                    component="div"
                                                    id="list-subheader"
                                                >
                                                    Job Details
                                                </ListSubheader>
                                            }
                                        >
                                            <JobDetailsListItem
                                                title="Job Type"
                                                subtitle="Microtask"
                                            />
                                            <JobDetailsListItem
                                                title="Available slots"
                                                subtitle="1"
                                            />
                                            <JobDetailsListItem
                                                title="Payment"
                                                subtitle="GCash"
                                            />
                                            <JobDetailsListItem
                                                title="Job Posted"
                                                subtitle="3 days ago"
                                            />
                                        </List>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card color="primary" variant="outlined">
                                        <List
                                            dense={true}
                                            sx={{
                                                width: "100%",
                                                bgcolor: "background.paper",
                                            }}
                                            aria-labelledby="list-subheader"
                                            subheader={
                                                <ListSubheader
                                                    component="div"
                                                    id="list-subheader"
                                                >
                                                    Interested Freelancers
                                                </ListSubheader>
                                            }
                                        >
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar
                                                        alt="Sebastian Curtis Lavarias"
                                                        src="/static/images/avatar/1.jpg"
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Sebastian Curtis Lavarias"
                                                    secondary="Hi! This is Sebastian a world class freelancer."
                                                />
                                            </ListItem>
                                        </List>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}
