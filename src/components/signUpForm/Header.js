import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class extends Component{
    render(){
        return <Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h5">
                        teesco
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    }
}