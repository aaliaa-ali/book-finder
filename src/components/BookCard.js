import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BookCard(props) {
  const { title, description, categories, language, imageLinks } = props;
  return (
    <Card sx={{ maxWidth: 345 ,m:'auto'}}>
      <CardMedia
        component="img"
        height="140"
        image={imageLinks?.smallThumbnail}
        alt="green iguana"
      />
      <CardContent style={{height:'150px',overflow:'hidden'}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <p>Category:{categories}</p>
        <p>Language:{language}</p>
      </CardActions>
    </Card>
  )
}
export default BookCard;
