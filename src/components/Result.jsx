import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import OpacityIcon from "@mui/icons-material/Opacity";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloudIcon from "@mui/icons-material/Cloud";
import styled from "@emotion/styled";

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  display: "flex",
  alignItems: "center",
  letterSpacing: 2,
});

const Default = styled(Typography)({
  margin: 50,
  padding: 20,
  color: "#f4920b",
});

const result = ({ result }) => {
  console.log("result from result comp", result);
  return result && Object.keys(result).length > 0 ? (
    <Box style={{ margin: "20px 60px" }}>
      <Row>
        <LocationOnIcon />
        location : {result.name}, {result.sys.country}
      </Row>
      <Row>
        <SettingsBrightnessIcon />
        Temprature :
        {Math.round((result.main.temp - 273.15 + Number.EPSILON) * 100) / 100}
      </Row>
      <Row>
        <OpacityIcon />
        Opacity :{result.main.humidity}
      </Row>
      <Row>
        <Brightness5Icon />
        Sun Rise : {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6Icon />
        Sun Set : {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <DehazeIcon />
        Humidity : {result.weather[0].main}
      </Row>
      <Row>
        <CloudIcon />
        Clouds : {result.clouds.all}%
      </Row>
    </Box>
  ) : (
    <Default>Please Enter the City or Country name to check Weather</Default>
  );
};

export default result;
