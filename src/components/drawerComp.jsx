import React from 'react'
import { useState } from 'react';
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets';

const PAGES = ["Categories", "Subcategories", "Items", "Admin Login"]

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        PAGES.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{marginLeft: "auto"}} onClick={() => setOpenDrawer(!openDrawer)}>
                <WidgetsIcon sx={{color:"white"}}></WidgetsIcon>
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp