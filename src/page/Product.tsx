import { Box, Grid, Typography } from "@mui/material";
import DataTable from "../components/table/DataTable/DataTable";
// import CardMediaItem from "../components/card/CardMediaItem";


const Product = () => {

 
    
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography sx={{ marginBottom: 2 }}>
        <DataTable />
      </Typography>

      {/* <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardMediaItem />
          </Grid>
        ))}
      </Grid> */}
    </Box>

  );
};

export default Product;
