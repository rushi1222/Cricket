import React, { useState } from "react";
import {
  withStyles,
  Grid,
  ButtonBase,
  FormControlLabel,
  Radio,
  Tooltip
} from "@material-ui/core";
import classNames from "classnames";
const masters = [
  {
    name: "RCB",
    url: "https://www.wallpaperuse.com/wallp/48-483608_m.jpg",
    tooltipTxt: "royal challengers"
  },
  {
    name: "CSK",
    url:
      "https://i.pinimg.com/originals/70/52/1b/70521baac89be4d4cb2f223bbf67c974.png",
    tooltipTxt: "chennai super kings"
  },
  {
    name: "KKR",
    url:
      "https://i.pinimg.com/originals/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg",
    tooltipTxt: "kolkata knight riders"
  },
  {
    name: "RR",
    url:
      "https://i.pinimg.com/originals/b5/6c/c3/b56cc33703ea5f5fdc6ceeea9c9ac06f.png",
    tooltipTxt: "Rajasthan Royals"
  },
  {
    name: "MI",
    url:
      "https://english.cdn.zeenews.com/sites/default/files/2022/02/12/1013828-mumbai-indians-logo.jpg",
    tooltipTxt: "Mumbai indians"
  }
];
const style = (theme) => {
  // const active = {
  //   filter: "grayscale(0)",
  //   border: `3px solid ${theme.palette.primary.main}`
  // };
  return {
    root: {},
    mainClass: {
      height: 106,
      width: 106,
      borderRadius: "50%",
      boxShadow: [
        `0px 16px 26px -10px ${theme.palette.primary.main}a5`,
        theme.shadows[5]
      ],
      margin: 8,
      color: theme.palette.primary.light,
      border: `3px solid ${theme.palette.common.white}`,
      filter: "grayscale(1)",
      transition: theme.transitions.create(),
      "&:active": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.primary.main}`
      },
      "&:hover": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.primary.main}`
      }
    },
    mainLblClass: {
      color: theme.palette.grey[700],
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 16,
      cursor: "pointer"
    },
    //class for checked item
    checked: {
      filter: "grayscale(0)",
      border: `3px solid ${theme.palette.primary.main}`
    },
    LblChecked: { color: theme.palette.primary.main },
    itemInner: {
      height: 66,
      width: 66,
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      boxShadow: theme.shadows[9]
    },
    input: {
      cursor: "pointer",
      height: 106,
      width: 106,
      position: "absolute",
      top: -6,
      left: -6,
      opacity: 0
    }
  };
};

const RadioMasters = ({ classes, team, setTeam, setCurrentTeam }) => {
  const [checked, setChecked] = useState(1);
  const handleChecked = (i) => (e) => {
    console.log("this worked");
    setChecked(i);
    setCurrentTeam(masters[i].name);
    if (!team.hasOwnProperty(masters[i].name)) {
      console.log(masters[i]);
      team[masters[i].name] = [];
    }
  };

  const itemOuterClass = (i) =>
    classNames({
      [classes.mainClass]: true,
      [classes.checked]: checked === i
    });
  const labelClass = (i) =>
    classNames({
      [classes.mainLblClass]: true,
      [classes.LblChecked]: checked === i
    });
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      {masters.map((master, i) => (
        <Grid
          item
          xs={6}
          sm={4}
          key={i}
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <ButtonBase className={itemOuterClass(i)}>
            <Tooltip title={master.tooltipTxt} placement="top-end">
              <input
                type="radio"
                name="master"
                // id={master.name}
                value={checked === i && master.name}
                checked={checked === i}
                onChange={handleChecked(i)}
                className={classes.input}
              />
            </Tooltip>
            <div
              className={classes.itemInner}
              style={{ backgroundImage: `url(${master.url})` }}
            />
          </ButtonBase>
          <label htmlFor={master.name} className={labelClass(i)}>
            {master.name}
          </label>
        </Grid>
      ))}
      <Grid item xs={8}>
        <FormControlLabel
          name="master"
          id="none"
          value={checked === -1 ? "none" : ""}
          checked={checked === -1}
          onChange={handleChecked(-1)}
          control={<Radio color="primary" />}
          label="I have no preferences"
          labelPlacement="end"
        />
      </Grid>
      <input
        type="text"
        id="selected-master"
        name="selected master"
        value={checked > -1 ? masters[checked].name : "none"}
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};
export default withStyles(style)(RadioMasters);
