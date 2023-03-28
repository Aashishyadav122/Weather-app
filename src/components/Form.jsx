import styled from "@emotion/styled";
import { Button, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  backgroundColor: "#445A6f",
  padding: "10px",
});

const Input = styled(InputBase)({
  color: "#fff",
  marginRight: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  backgroundColor: "#e67e22",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  }

  const getWeatherInfo = async () => {
    let result = await getWeather(data.city, data.country);
    setResult(result);
  };

  return (
    <Container>
      <Input placeholder="city" name="city" onChange={(e) => handleChange(e)} />
      <Input
        placeholder="country"
        name="country"
        onChange={(e) => handleChange(e)}
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo(data)}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
