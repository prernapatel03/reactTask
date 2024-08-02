import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import PersonIcon from "@mui/icons-material/Person";
import FlightIcon from "@mui/icons-material/Flight";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupIcon from "@mui/icons-material/Group";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";

export default function Home({ open, setOpen }) {
  function createData(label, value) {
    return { label, value };
  }
  const handleClose = () => {
    setOpen(false);
  };
  const rows = [
    createData("Cost Center", "800DDD4 - 8DD0004 IT - Education"),
    createData("Primary Email", "SJain@eab.com"),
    createData("Mobile Phone", "123123"),
    createData("Work Phone", "123123123"),
    createData("Home Phone", "123123123"),
    createData("Emergency Contact Name", "Dhawal"),
    createData("Phone", "123123123"),
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    border: 0,
    height: "600px",
    borderRadius: "5px",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{
              backgroundColor: "#002746",
              color: "#ffffff",
              minHeight: "600px",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <Toolbar sx={{ mb: 3 }}>
             
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ fontWeight: 500, fontFamily: "monospace" ,  fontSize : '29px' }}
              >
                go EXPENSE
              </Typography>
            </Toolbar>
            <List>
              <ListItem
                sx={{
                  display: "block",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <ListItemButton
                  sx={{
                    background: "#0069BF",
                    paddingTop:'2px', paddingBottom : '2px' ,paddingRight : '0px' ,
                    mb: 3,
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#0069bf",
                    },
                  }}
                  fullWidth
                >
                  <ListItemIcon>
                    <PersonIcon sx={{ color: "#ffffff"}} />
                  </ListItemIcon>
                  <ListItemText primary="Personal" />
                </ListItemButton>

                <ListItemButton sx={{   paddingTop:'2px', paddingBottom : '2px' , paddingRight : '0px' , mb: 3 }}>
                  <ListItemIcon>
                    <FlightIcon sx={{ color: "#ffffff" , transform : 'rotate(35deg)'}} />
                  </ListItemIcon>
                  <ListItemText primary="Travel" />
                  <ExpandMoreIcon sx={{ textAlign: "end" }} />
                </ListItemButton>

                <ListItemButton sx={{    paddingTop:'2px', paddingBottom : '2px' , paddingRight : '0px'  ,mb: 3 }}>
                  <ListItemIcon>
                    <CreditCardIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Card & Payment" />
                </ListItemButton>

                <ListItemButton sx={{   paddingTop:'2px', paddingBottom : '2px' ,paddingRight : '0px' ,  mb: 3 }}>
                  <ListItemIcon>
                    <GroupIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Delegates" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              background: "#dbdbdb",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <Box
              sx={{
                background: "#ffffff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{ mr: 2, display: { sm: "none" } }}
                ></IconButton>
                <Typography
                  variant="p"
                  noWrap
                  component="div"
                  fontSize={13}
                  fontWeight={600}
                >
                  Personal Details
                </Typography>
              </Toolbar>

              <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#ffffff",
                    color: "black",
                    borderRadius: "8px",
                    height: "min-content",
                    textTransform: "capitalize",
                    fontWeight: 500,
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#0069BF",
                    color: "#ffffff",
                    borderRadius: "8px",
                    height: "min-content",
                    ml: 1,
                    textTransform: "capitalize",
                    fontWeight: 500,
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
            <Box sx={{ padding: "20px" }}>
              <Card sx={{ height: 495, minWidth: 275 }}>
                <CardContent>
                  <Avatar
                    alt=""
                    src="user.png"
                    sx={{ height: "100px", width: "100px" }}
                  />
                  <MenuItem
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      Swati2 Jain1
                    </Typography>
                    <Typography>
                      External Contractor, External Contractor
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <TableContainer sx={{ marginTop: "30px" }}>
                    <Table
                      aria-label="simple table"
                      sx={{ borderColor: "transparent" }}
                    >
                      <TableBody sx={{ borderColor: "transparent" }}>
                        {rows.map((row) => (
                          <TableRow
                            key={row.label}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                paddingTop: "0px",
                                borderColor: "transparent",
                                color: "#6A6A6A",
                                fontFamily: "Roboto",
                              }}
                            >
                              {row.label}
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{
                                paddingTop: "0px",
                                borderColor: "transparent",
                                fontFamily: "Roboto",
                                fontWeight: "700",
                              }}
                            >
                              {row.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// export default function Home() {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const [usersData, setUsersData] = useState([]);

//   async function fetchData() {
//     const response = await axios.get("http://localhost:3031/users");
//     const data = await response.data;
//     setUsersData(data);
//   }
//   useEffect(() => {
//     // fetchData();
//   }, []);
//   return (
//     <div>
//       {/* <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>{" "}
//       {counter}

//       <br />
//       {usersData.map((e) => {
//         return <p style={{ fontSize : '16px'}}>{e.desciption} <br /></p>;
//       })} */}
//     </div>
//   );
// }
