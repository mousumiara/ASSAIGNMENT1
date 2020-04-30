import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Tabs,Tab,Typography,Box} from '@material-ui/core';
import User from "./Users.js";
import Todos from "./Todos.js";
import {Route} from "react-router-dom";





const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newEvent) => {
    setValue(newEvent);
  };

  return (
    <div className="marginLeft">
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label="TODOS" />
        <Tab label="USER" />  
      </Tabs>
    </Paper>
    
      <TabPanel value={value} index={1}>
        <User/>
      </TabPanel>
      <TabPanel value={value} index={0}>
        <Todos/>
      </TabPanel> 
      <Route path="/"></Route>
    </div>
  );
}