/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";


const ProductDetails = ({ clickedProduct }) => {

    const [selectedImg, setselectedImg] = useState(0);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexDirection: { xs: "column", sm: "row" },
            }}
        >
            <Box sx={{ display: "flex" }}>
                <img
                    width={400}
                    src={
                        `${import.meta.env.VITE_BASE_URL}${clickedProduct.attributes.productImg.data[0].attributes.url}`
                    }
                    alt=""
                />
            </Box>

            <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">
                    {clickedProduct.attributes.productTitle}
                </Typography>

                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                    {clickedProduct.attributes.productPrice} SYP
                </Typography>

                <Typography variant="body1" sx={{ pr: 2 }}>
                    {clickedProduct.attributes.productDescription}
                </Typography>


                <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    gap={1}
                    my={2}
                >

                </Stack>

                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    );
};

export default ProductDetails;