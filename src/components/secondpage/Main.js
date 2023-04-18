import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import SaveIcon from "@mui/icons-material/Save";
import { Button, Collapse } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import pic from "../pic/Furlong Painting Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const lineStyle = {
  marginLeft: ".5rem",
  marginTop: 0,
  marginBottom: 0,
  display: "inline-block",

  width: "70%",
};

const drawerWidth = 380;

export default function Main() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              height: "71px",
              paddingTop: "10px",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              <MenuIcon
                sx={{ marginLeft: "5px", marginRight: "20px", ml: "auto" }}
              />
              Furlong Painting Contractor Induction Program
            </Typography>
          </Box>
          <Box textAlign={"right"} width={"65%"}>
            <Button sx={{ bgcolor: "#106786", color: "white" }}>
              <SaveIcon />
              SAVE
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <img src={pic} alt="" />
        </Box>
        {/* <Toolbar /> */}

        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText>
              <b>Furlong Painting Outline Contractor induction Program</b>
            </ListItemText>
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 0 }}>
                <ListItemText>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Introduction Program</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>History and Mission</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Interpretative Statements</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>
                      Contractor Standards and Expectations
                    </p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Personal and Business Documents</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick1}>
            <ListItemText>
              <b>Module 1 - Human Resources</b>
            </ListItemText>
          </ListItemButton>

          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 0 }}>
                <ListItemText>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Conditions of Engagement</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Code of Conduct</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Duty of Care</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Suitability for Work</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Fatigue Management</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Bullying and Harassment</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Incident Reporting</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>QUIZ : Module 1</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick2}>
            <ListItemText>
              <b>Module 1 - Human Resources</b>
            </ListItemText>
          </ListItemButton>

          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 0 }}>
                <ListItemText>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Conditions of Engagement</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Code of Conduct</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Duty of Care</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                  <li style={{ display: "flex" }}>
                    <FeedIcon />
                    <p style={lineStyle}>Suitability for Work</p>
                    <MoreVertIcon sx={{ ml: "auto" }} />
                  </li>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Box sx={{}}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
