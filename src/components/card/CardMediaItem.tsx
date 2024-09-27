import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { titleCard } from "../../shared/enums";

export default function CardMediaItem() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{height: '140'}} image="rc/assets/image/ET42067H-13 (1).jpg" title="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Giày Chạy Bộ Nam PEAK Taichi Ultralight ET42067H – Trắng Xanh Lam
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Grid item xs>
              {titleCard}
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
     
    </Card>
  );
}
