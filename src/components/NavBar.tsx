import { AppBar, Box, Button, Container, Toolbar } from "@material-ui/core";
import React from "react";

export const NavBar = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Box bgcolor="default">
        <Container maxWidth="lg">
          <Toolbar>
            <Box flex={1} />
            <Button variant="outlined" color="secondary" size="large">
              Resume
            </Button>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
