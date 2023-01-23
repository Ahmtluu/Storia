import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigator = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#301E67" }}>
        <Toolbar>
          <Button
            variant="text"
            style={{
              color: "#F2EBE9",
              fontSize: 20,
            }}
            onClick={() => navigator("/")}
          >
            Storia
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
