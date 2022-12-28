import React, {Fragment} from "react";
import Header from "@src/components/modules/Header";
import AppContainer from "@src/components/common/container";
import ItemsList from "@src/components/modules/ItemsList";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <AppContainer>
     <Header/>
        <Box className="mt-30"><ItemsList/></Box>
    </AppContainer>
  )
}
