import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
    Box,
    Container,
    IconButton,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import {
    DarkModeOutlined,
    LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";


const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box
            sx={{
                bgcolor: "#001F34",
                py: "4px",
                borderBottomRightRadius: 4,
                borderBottomLeftRadius: 4,
                boxShadow: "3px 3px #7777",
            }}
        >
            <Container>
                <Stack direction={"row"} alignItems={"center"}>
                    <img src="./public/Logo.png" alt="" className="logo" />

                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "#fff",
                            marginLeft: "4px"
                        }}
                        variant="body2"
                    >
                        Free Express Shipping
                    </Typography>

                    <Box flexGrow={1} />

                    <div style={{marginRight: "20px"}}>
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <DarkModeOutlined sx={{ fontSize: "16px" }} />
                            </IconButton>
                        )}
                    </div>

                    <IconButton
                        component="a"
                        href="https://twitter.com/?lang=ar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                            }}
                        />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon
                            sx={{
                                fontSize: "16px",
                                mx: 1,
                                color: "#fff",
                            }}
                        />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                            }}
                        />
                    </IconButton>


                </Stack>
            </Container>
        </Box>
    )
}

export default Header1;