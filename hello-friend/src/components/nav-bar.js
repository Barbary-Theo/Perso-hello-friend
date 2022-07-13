import * as React from "react";
import './../style_sheets/nav-bar.css';
import { Avatar, Typography, Grid, List, Popover, Divider,  ListItem, ListItemAvatar, ListItemText, ImageListItem} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {

    const handleLinkedInClick = (event) => {
        window.open("https://www.linkedin.com/in/théo-barbary-047656201/", "_blank");
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Grid container direction={"column"} className={"icon-container"}>
            <Avatar
                className={"me"}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                alt="Barbary Théo"
                src="/images/me.jpeg"
            />
            <Popover
                id="mouse-over-popover"
                sx={{ pointerEvents: 'none', }}
                open={open}
                anchorPosition={{ top: 0, left: 0 }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <List>
                    <ListItem className={"list-item-popover"}>
                        <ListItemAvatar>
                            <Avatar
                                className={"me-popover"}
                                alt="Barbary Théo"
                                src="/images/me.jpeg"
                                sx={{ width: 80, height: 80 }}
                            />
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem className={"list-item-text-popover"}>
                        <ListItemText>
                            <Typography variant={"h6"} sx={{ p: 2 }}>Barbary Théo 🇫🇷</Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={"list-item-text-popover"}>
                        <ListItemText>
                            <Typography sx={{ p: 1 }}>I'm a futur software engineer <br/> and today I work at Toyota</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={"list-item-popover"}>
                        <ImageListItem>
                            <img src={"/images/toyota.png"} alt={"toyota"} className={"toyota-image"}/>
                        </ImageListItem>
                    </ListItem>
                </List>
            </Popover>
            <LinkedInIcon onClick={handleLinkedInClick} color={"danger"} sx={{p: 2}} className={"linkedin-icon"}/>
        </Grid>
    )
}

export default Navbar;