import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

function TokenGenerator() {
  //States for handling blue tokens
  const [blueTokens, setBlueTokens] = useState(0);
  const [bluePrefix, setBluePrefix] = useState("");
  const [bluePerRow, setBluePerRow] = useState(0);

  //States for handling red tokens
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState("");
  const [redPerRow, setRedPerRow] = useState(0);

  //storing the tokens
  const [tokens, setTokens] = useState(null);

  //Generate function to update the states
  const handleGenerate = (e) => {
    e.preventDefault();
    setTokens({
      blueTokens: parseInt(blueTokens),
      bluePrefix,
      bluePerRow: parseInt(bluePerRow),
      redTokens: parseInt(redTokens),
      redPrefix,
      redPerRow: parseInt(redPerRow),
    });
  };

  //Clear all the input fields
  const handleClear = () => {
    setBlueTokens(0);
    setBluePrefix("");
    setBluePerRow(1);
    setRedTokens(0);
    setRedPrefix("");
    setRedPerRow(1);
    setTokens(null);
  };

  // showing of the genrated tokens
  const renderTokens = (prefix, count, perRow) => {
    let rows = [];
    for (let i = 0; i < count; i += perRow) {
      rows.push(
        <Grid container spacing={1} key={i}>
          {Array.from(
            { length: perRow },
            (_, j) =>
              i + j < count && (
                <Grid item key={j}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor:
                        prefix === "A" || prefix === "a"
                          ? "blue"
                          : prefix === "B" || prefix === "b"
                          ? "red"
                          : "defaultColor",
                      color: "white",
                      textAlign: "center",
                      m: 1,
                    }}
                  >
                    {`${prefix}${i + j + 1}`}
                  </Box>
                </Grid>
              )
          )}
        </Grid>
      );
    }
    return rows;
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Token Generator
      </Typography>
      <Box component="form" onSubmit={handleGenerate} sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Number of Blue Tokens"
              type="number"
              value={blueTokens}
              onChange={(e) => setBlueTokens(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Prefix for Blue Tokens"
              value={bluePrefix}
              onChange={(e) => setBluePrefix(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Blue Tokens per Row"
              type="number"
              value={bluePerRow}
              onChange={(e) => setBluePerRow(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Number of Red Tokens"
              type="number"
              value={redTokens}
              onChange={(e) => setRedTokens(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Prefix for Red Tokens"
              value={redPrefix}
              onChange={(e) => setRedPrefix(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Red Tokens per Row"
              type="number"
              value={redPerRow}
              onChange={(e) => setRedPerRow(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Generate
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              sx={{ ml: 2 }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ p: 3 }}>
        {tokens &&
          renderTokens(tokens.bluePrefix, tokens.blueTokens, tokens.bluePerRow)}
        {tokens &&
          renderTokens(tokens.redPrefix, tokens.redTokens, tokens.redPerRow)}
      </Box>
    </Container>
  );
}

export default TokenGenerator;
