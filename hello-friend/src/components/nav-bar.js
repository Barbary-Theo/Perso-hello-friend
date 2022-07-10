import * as React from "react";
import './../style_sheets/nav-bar.css';
import {Avatar, Grid} from "@mui/material";

const Navbar = () => {

    return (
        <Grid className={"icon-container"}>
            <Avatar className={"me"} alt="Barbary Théo" src="/images/me.jpeg" sx={{ width: 80, height: 80 }}/>
        </Grid>
    )
}

export default Navbar;