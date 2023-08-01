import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import AvatarGroup from "@mui/material/AvatarGroup";
import JobInformationModal from "@/Components/JobInformationModal";
import { useTheme } from "@mui/material/styles";

export default function JobPostCard() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const rootRef = React.useRef(null);

    const theme = useTheme();

    const onHandleModalOpen = () => setIsModalOpen(true);

    return (
        <Box sx={{ width: "100%" }} onClick={onHandleModalOpen} ref={rootRef}>
            <Card color="primary" variant="outlined">
                <ListItem
                    dense={true}
                    alignItems="flex-start"
                    secondaryAction={
                        <React.Fragment>
                            <Chip size="small" label="Microtask" />
                        </React.Fragment>
                    }
                >
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://avatars.githubusercontent.com/u/24890911?v=4"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <React.Fragment>
                                <Typography
                                    sx={{ fontWeight: 500 }}
                                    component="h6"
                                    variant="subtitle1"
                                >
                                    John Doe
                                </Typography>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ fontSize: ".8rem" }}
                                >
                                    3 days ago
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <CardContent sx={{ paddingTop: "0" }}>
                    <Typography
                        variant="body1"
                        component="h6"
                        sx={{ fontWeight: 500 }}
                    >
                        Encode human resource data
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{
                            paddingBottom: ".5rem",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eum, sint... View job
                    </Typography>
                    <Typography variant="caption" component="span">
                        3 available slots | GCash
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <AvatarGroup max={6}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://avatars.githubusercontent.com/u/24890911?v=4"
                                sx={{
                                    width: "1.5rem",
                                    height: "1.5rem",
                                }}
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="https://avatars.githubusercontent.com/u/24890911?v=4"
                                sx={{
                                    width: "1.5rem",
                                    height: "1.5rem",
                                }}
                            />
                            <Avatar
                                alt="Remy Sharp"
                                src="https://avatars.githubusercontent.com/u/24890911?v=4"
                                sx={{
                                    width: "1.5rem",
                                    height: "1.5rem",
                                }}
                            />
                        </AvatarGroup>
                    </Box>
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

            <JobInformationModal
                open={isModalOpen}
                rootRef={rootRef}
                setIsModalOpen={setIsModalOpen}
            />
        </Box>
    );
}
