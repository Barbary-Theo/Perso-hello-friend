import * as React from "react";
import './../style_sheets/portail.css';
import {Grid, Typography} from "@mui/material";
import Navbar from "./nav-bar";

const Portail = () => {

    return (
        <Grid container direction={"column"} justifyContent={"center"}>
            <Navbar />


        </Grid>
    )

}

export default Portail
