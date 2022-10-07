import { Stack } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

import CtaButton from "../Main/CtaButtons";

import {
  LandingContainer,
  LandingWrapper,
  Heading,
  Small,
  BtnWrapper,
  Title,
} from "./LandingCTAElements";

const LandingCTA = () => {
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <Heading>
            Get BloodLine today on Appstore 
          </Heading>
            
          <BtnWrapper>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            
          <Title> or Download the apk </Title> 
              
            
            </Stack>
          </BtnWrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default memo(LandingCTA);
