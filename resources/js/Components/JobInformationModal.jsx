import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export default function JobInformationModal({ open, rootRef, setIsModalOpen }) {
    const [openLocal, setOpenLocal] = React.useState(open);

    const theme = useTheme();

    const handleModalOpen = () => setOpenLocal(open);
    const onHandleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                <Button onClick={onHandleCloseModal}>Close modal</Button>
                <Grid container>
                    <Grid item xs={12} paddingBottom={8}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Box>
                                <Typography variant="h4" component="h4">
                                    Encode human resource data
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: 2,
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
                                <Box sx={{ paddingX: 1 }}>-</Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                        sx={{
                                            color: theme.palette.success.main,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        ₱400.00
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography
                            id="server-modal-description"
                            sx={{ pt: 2 }}
                        >
                            🎬 Job Opportunity: Video Editor (Remote, Non-USA)
                            <br />
                            <br />
                            🏢 About Us: Skyhaus Media is a leading video
                            marketing company specializing in creating
                            captivating content for commercial and residential
                            real estate clients. We also collaborate with small
                            businesses, nonprofits, and government entities,
                            offering a wide range of services including event
                            recaps, testimonials, interviews, and brand stories.
                            <br />
                            <br />
                            🔍 Job Summary: We are seeking talented video
                            editors to join our team for consistent video
                            projects! The ideal candidate should have a passion
                            for architecture and real estate, and be skilled in
                            video editing software such as Final Cut Pro, Adobe
                            Premiere Pro, Adobe After Effects, and preferably
                            Adobe Audition and DaVinci Resolve. Experience with
                            other programs is a plus. 🎯 Key Skills: Proficient
                            in Final Cut Pro, Adobe Premiere Pro, and Adobe
                            After Effects. Preferably experienced in Adobe
                            Audition and DaVinci Resolve. Additional experience
                            in color grading, audio mastering, graphic design,
                            or animation is a bonus. 🌍 Remote Opportunity: This
                            position is open to video editors based outside of
                            the USA, as we aim to diversify our global team and
                            collaborate with talents worldwide. 💼 How to Apply:
                            If you're passionate about video editing, have a
                            keen eye for detail, and are excited about being
                            part of our dynamic team, we'd love to hear from
                            you! Please send your portfolio and resume to
                            [hiring email/contact information]. 🌟 Join us in
                            shaping the future of video marketing and creating
                            exceptional content that captivates audiences
                            worldwide.
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        More information here
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}
