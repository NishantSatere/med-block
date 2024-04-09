import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "react-bootstrap";

const Loader = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <div style={{ textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <CircularProgress size={60} color="primary" />
        </Box>
        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
          Hold on while we fetch records...
        </div>
        <div style={{ fontSize: "14px", color: "#666" }}>Please wait patiently</div>
      </div>
    </Container>
  );
};

export default Loader;
