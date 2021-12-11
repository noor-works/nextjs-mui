import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/MenuItem';

import Link from '../../Link';
import { navLink } from './navLink';

export default function AppBarNav() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar disableGutters={true}>
                        <Link href="/" color="inherit" underline="none" sx={{ mr: 3 }}>Logo</Link>
                        {navLink.map(({ label, href, children }) => (
                            <MenuItem
                                component={Link}
                                href={href}
                                key={label}
                            >
                                {label}
                                {children && (
                                    <Box>
                                        {children.map(({ label, href }) => (
                                            <ListItem component={Link} href={href} key={label}>
                                                {label}
                                            </ListItem>
                                        ))}
                                    </Box>
                                )}
                            </MenuItem>
                        ))}
                        <Link href="/" color="inherit" underline="none" sx={{ ml: "auto" }}>Login</Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}