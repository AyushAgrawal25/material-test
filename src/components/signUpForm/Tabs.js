import React, { Component, Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper } from '@material-ui/core';

export default class extends Component{
    render(){
        return <Fragment>
            <Paper>
                <Tabs
                    value={"1"}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="item 1" value="1"></Tab>
                    <Tab label="item 2" value="2"></Tab>
                    <Tab label="item 3" value="3"></Tab>
                </Tabs>
            </Paper>
        </Fragment>
    }
}