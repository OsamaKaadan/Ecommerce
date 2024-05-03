import {
    Box,
    Button,
    CircularProgress,
    Container,
    Dialog,
    IconButton,
    Rating,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { AnimatePresence, motion } from "framer-motion";
import ReadMoreIcon from '@mui/icons-material/ReadMore';


const Main = () => {
    const handleAlignment = (event, newValue) => {
        if (newValue !== null) {
            setMyData(newValue);
        }
    };

    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const allProductsAPI = "products?populate=*";
    const menCategoryAPI = "products?populate=*&filters[productCategory][$eq]=men";
    const womenCategoryAPI = "products?populate=*&filters[productCategory][$eq]=women";

    const [myData, setMyData] = useState(allProductsAPI);

    const { data, error, isLoading } = useGetproductByNameQuery(myData)

    const [clickedProduct, setClickedProduct] = useState({});

    if (isLoading) {
        return (
            <Box sx={{ py: 11, textAlign: "center" }}>
                <CircularProgress />
            </Box>
        );
    }
    if (error) {
        return (
            <Container
                sx={{
                    py: 11,
                    textAlign: "center",
                }}
            >
                <Typography variant="h6">
                    {
                        error.error
                    }
                </Typography>

                <Typography variant="h6">Please try again later</Typography>
            </Container>
        );
    }





    if (data) {
        return (
            <Container sx={{ mt: 2, mb: 2, py: 1 }}>
                <Stack direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={3}
                >
                    <Box>
                        <Typography variant='h6' >Selected Products</Typography>
                        <Typography fontWeight={300} variant="body1">
                            All our new arrivals in a exclusive brand selection
                        </Typography>
                    </Box>

                    <ToggleButtonGroup
                        color="primary"
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                backgroundColor: "initial",
                            },
                        }}
                    >

                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className="myButton"
                            value={allProductsAPI}
                            aria-label="left aligned"
                        >
                            All Products
                        </ToggleButton>

                        <ToggleButton
                            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                            className="myButton"
                            value={menCategoryAPI}
                            aria-label="centered"
                        >
                            MEN category
                        </ToggleButton>

                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className="myButton"
                            value={womenCategoryAPI}
                            aria-label="right aligned"
                        >
                            Women category
                        </ToggleButton>

                    </ToggleButtonGroup>




                </Stack>

                <Stack direction={"row"} flexWrap={"wrap"} sx={{ justifyContent: "space-between" }}>
                    <AnimatePresence>
                        {data.data.map((item) => {
                            return (
                                <Card
                                    component={motion.section}
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 50, }}
                                    key={item.id}
                                    sx={{
                                        maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": {
                                            scale: "1.1",
                                            transition: "0.4s",
                                            rotate: "1deg"
                                        }
                                    }}>
                                    <CardMedia
                                        sx={{ height: 300 }}
                                        image={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImg.data[0].attributes.url}`}
                                        title="Jacket"
                                    />
                                    <CardContent>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                            alignItems={"center"}
                                        >
                                            <Typography gutterBottom variant="h6" component="div">
                                                {item.attributes.productTitle}
                                            </Typography>

                                            <Typography variant="subtitle1" component="p">
                                                {item.attributes.productPrice} SYP
                                            </Typography>
                                        </Stack>

                                        <Typography variant="body2" color="text.secondary" sx={{
                                            height: "3.7rem",
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,

                                        }}>
                                            {item.attributes.productDescription}
                                        </Typography>

                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "space-between" }}>
                                        <Button size="large"
                                            onClick={() => {
                                                handleClickOpen()
                                                setClickedProduct(item)
                                            }}
                                            sx={{ textTransform: "capitalize" }}
                                        >
                                            <ReadMoreIcon
                                                fontSize="medium" sx={{ mr: 1 }}
                                            /> More details
                                        </Button>
                                        <Rating precision={0.5} name="read-only" value={item.attributes.productRating} readOnly />
                                    </CardActions>
                                </Card>
                            )
                        })}

                    </AnimatePresence>
                </Stack>



                <Dialog
                    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton
                        sx={{
                            ":hover": { color: "white", rotate: "180deg", transition: "0.3s" },
                            position: "absolute",
                            top: 0,
                            right: 10,
                        }}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>

                    <ProductDetails clickedProduct={clickedProduct} />
                </Dialog>
            </Container >
        );
    }
};

export default Main;