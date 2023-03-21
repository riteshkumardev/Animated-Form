import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import publicfile from "../../../public";
export default function MuiCard({
  itemImg,
  ItemName,
  description,
  height,
  alt,
  Share,
  width,
  Button,
  price,
}) {
  const handaleAdd = (event) => {
    console.log(event, "muiCard console");
  };
  // console.log(publicfile, "publicfile");
  const imageFile = <img src="./cartlogo.jpg" alt="logo" />;
  return (
    <Card style={{ width: "260px", height: "450px" }}>
      <CardActionArea>
        <CardMedia
          style={{
            width: width ? width : "260px",
            height: height ? height : "215px",
          }}
          component="img"
          image={itemImg ? itemImg : imageFile}
          alt={alt ? alt : "img"}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {ItemName.length < 20 ? ItemName : `${ItemName?.slice(0, 30)}...`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price :- {price ? price : ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description?.length < 20
              ? description
              : `${description?.slice(0, 50)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {Button}
        {/* <Button size="small" color="primary">
          {Share ? Share : ""}
        </Button> */}
      </CardActions>
    </Card>
  );
}
