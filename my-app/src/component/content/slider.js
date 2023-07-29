import React, { useState } from "react";
import { Paper, Button, Box } from "@mui/material";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // Add more image URLs as needed
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
      <Paper elevation={3}>
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
        <Box p={1} display="flex" justifyContent="center">
          <Button onClick={handlePrev} variant="outlined" color="primary">
            Prev
          </Button>
          <Button
            onClick={handleNext}
            variant="outlined"
            color="primary"
            sx={{ ml: 2 }}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ImageSlider;
