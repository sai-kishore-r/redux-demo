import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import { increment , decrement } from "../actions";

const Things = () => {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <Container>
      {counter}

    <Grid style={{margin: "3rem"}}>
      <Button 
      onClick={()=> dispatch(increment())}
      style={{
        fontSize: "14px",
        fontWeight: "600",
        backgroundColor: "#2D92C6",
        color: "white",
      }} > Increment</Button>
      <Button 
      onClick={()=> dispatch(decrement())}
      style={{
        marginLeft: "2rem",
        fontSize: "14px",
        fontWeight: "600",
        backgroundColor: "#2D92C6",
        color: "white",
      }}> Decrement</Button>
    </Grid>
    </Container>
  );
};

export default Things;
