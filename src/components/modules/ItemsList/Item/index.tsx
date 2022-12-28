import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface IProps {}

const ItemCard: React.FC<IProps> = ({}) => {
  return (
    <Box className="w-full">
      <Card>
        <CardContent>
          <Box className="relative w-full h-[150px]">
            <Image
              src={
                "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt="card image"
              fill
            />
          </Box>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            className="my-5 font-medium text-dark"
          >
            Economy Sajek Valley Group Tour Package -35....
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: 16 }}
            className="font-medium text-grayLight line-through"
          >
            $1234556
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: 16 }}
            className="font-bold text-dark"
          >
            $1234556{" "}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemCard;
