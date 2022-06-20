import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  MenuItem,
  FormLabel,
  FormControl,
  Button
} from "@material-ui/core";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

const style = (theme) => ({
  root: {
    padding: 8,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    margin: " 0 auto"
  },
  row: { borderBottom: `1px solid ${theme.palette.grey[100]}` },
  icon: {
    fill: theme.palette.grey[700],
    width: 28,
    height: 28
  }
});
const SelectService = ({ classes, team, setTeam, currentTeam }) => {
  const [playerDetail, setPlayerDetail] = useState({
    name: "",
    position: "",
    role: ""
  });
  const position = [
    {
      value: "batsman",
      label: "batsman"
    },
    {
      value: "bowler",
      label: "bowler"
    },
    {
      value: "allrounder",
      label: "allrounder"
    },
    {
      value: "wicketkeeper",
      label: "wicketkeeper"
    }
  ];

  const selectedCaptain = () => {
    let captain = team[currentTeam]?.filter((item) => item.role === "captain");
    if (captain?.length > 0) {
      return false;
    }
    return true;
  };

  const selectedViceCaptain = () => {
    let captain = team[currentTeam]?.filter(
      (item) => item.role === "vice-captain"
    );
    if (captain?.length > 0) {
      return false;
    }
    return true;
  };

  return (
    <Grid container className={classes.root} spacing={0}>
      <TextField
        required
        id="outlined-basic"
        label="Player name"
        value={playerDetail.name}
        onChange={(e) =>
          setPlayerDetail({ ...playerDetail, name: e.target.value })
        }
        variant="outlined"
      />

      <TextField
        select
        label="Select"
        value={playerDetail.position}
        onChange={(e) =>
          setPlayerDetail({ ...playerDetail, position: e.target.value })
        }
        helperText="select player position"
        sx={{ marginTop: "19px" }}
      >
        {position.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="role"
          name="radio-buttons-group"
          onChange={(e) => {
            setPlayerDetail({ ...playerDetail, role: e.target.value });
          }}
        >
          {selectedCaptain() ? (
            <FormControlLabel
              value="captain"
              control={<Radio />}
              label="captain"
            />
          ) : null}
          {selectedViceCaptain() ? (
            <FormControlLabel
              value="vice-captain"
              control={<Radio />}
              label="vice-captain"
            />
          ) : null}
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => {
          if (!playerDetail.name) return;
          team[currentTeam].push(playerDetail);
          setTeam(team);
          setPlayerDetail({
            name: "",
            position: "",
            role: ""
          });
        }}
      >
        add player
      </Button>
    </Grid>
  );
};

SelectService.propTypes = {
  classes: PropTypes.object
};
export default withStyles(style)(SelectService);
