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

export default function JobPostCard() {
    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Card color="primary" variant="outlined">
                    <ListItem
                        dense={true}
                        alignItems="flex-start"
                        secondaryAction={
                            <React.Fragment>
                                <Chip size="small" label="Category" />
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
                            Lorem ipsum dolor.
                        </Typography>
                        <Typography variant="body2" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eum, sint... See more
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
                                sx={{ fontWeight: "bold" }}
                                variant="subtitle2"
                                component="p"
                                color="#4caf50"
                            >
                                ₱ 150.00
                            </Typography>
                        </Box>
                        {/*// Maybe a views here with avatars*/}
                        {/*-------------------------------- Budget here*/}
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
