import {AppBar, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme} from '@mui/material'
import * as React from 'react'
import { useState, useEffect } from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DrawerComp from './drawerComp'
import {useNavigate} from 'react-router-dom'

const PAGES = ["Categories", "Subcategories", "Items", "Menu"]
const ADMINPAGE = ["Admin Login"]

const ResponsiveAppBar = () => {

    const navigate=useNavigate()

    const handleCloseNavMenu = (page) => {
        navigate(page.toLowerCase())
    }

    const [value, setValue] = useState();
    const [role, setRole] = useState(null);

    //ROLE CHECKING PROTOTYPE
    useEffect(() => {
        setRole(window.localStorage.getItem('adminRole'))
    },[])

    let unAuthPage=[PAGES[3],...ADMINPAGE]
    let adminRoleButton=[]
    if(role==='admin'){
        adminRoleButton=[...ADMINPAGE]
        unAuthPage=[...PAGES]
    }

    const theme= useTheme()
    const isMatch= useMediaQuery(theme.breakpoints.down('md'))

    return(
        <React.Fragment>
            <AppBar sx={{background: '#715AFF'}} position="static">
                <Toolbar>
                    <RestaurantIcon/>
                    {
                        isMatch ? (
                            <>
                                <DrawerComp/>
                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary" sx={{marginLeft: 'auto'}}>
                                    {
                                        unAuthPage.map((page, index) => (
                                            <Tab key={index} label={page} onClick={() => handleCloseNavMenu(page)} />
                                        ))
                                    }
                                </Tabs>
                                {
                                    adminRoleButton.map((page, index) => (
                                        <Button key={index} variant="contained" sx={{marginLeft: "auto", background:"#A682FF", "&:hover": { background: "#87CBAC" }}}>{page}</Button>
                                    ))
                                }
                                
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default ResponsiveAppBar