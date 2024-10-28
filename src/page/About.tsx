import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const About = () => {
   const {book, reviews} = useLoaderData();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography sx={{ marginBottom: 2 }}> 
        <h1>{book.title}</h1>
        <p>{book.description}</p>
      </Typography>
    </Box>
  );
};

export default About;
