import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
} from "@mui/material";

const TestCardForFirstMicroApp = () => {
  return (
    <Paper elevation={2}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            This is the FIRST micro-frontend
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">This is a pointless button</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default TestCardForFirstMicroApp;
