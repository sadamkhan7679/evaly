import React from "react";
import Box from "@mui/material/Box";
import ItemCard from "@src/components/modules/ItemsList/Item";

interface IProps {}

const ItemsList: React.FC<IProps> = () => {
  return (
    <Box className="grid grid-cols-12 gap-6">
      {[...Array(30)].map((_, index) => (
        <Box
          key={index}
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
        >
          <ItemCard />
        </Box>
      ))}
    </Box>
  );
};

export default ItemsList;
