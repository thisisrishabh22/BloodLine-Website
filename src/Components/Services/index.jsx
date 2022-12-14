import { Box } from "@mui/material";
import React, { memo } from "react";
import {
  Boxs,
  Card,
  Cards,
  CategoriesWrapper,
  Content,
  Icon, Circle
} from "./ServicesElements";

// import { categoriesData } from "./data";

const Services = ({ serviceItem }) => {
  return (
    <>
      <Boxs id="categories">
        {/* <p
          style={{
            fontSize: 16,
            color: "#2667FF",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "1.4px",
          }}
        >
          Jobs based on your desired category
        </p> */}
        <h1 style={{ textAlign: "center", color: "#DE2A26" }}>We Promise</h1>
        <Box>
          <CategoriesWrapper>
            <Cards>

           

                 {serviceItem &&
                  serviceItem.map((i) => {
                    return (

                      <Card key={i.id} >
                        {/* <img className="circle" alt="cicle" src='/assets/img/Ellipse.png'/> */}
                             {/* <Circle> */}
                        <Icon src={i.img} alt={i.serviceH2} />
                        <h2 style={{ textAlign: "center",marginRight:"2rem" }}>{i.serviceH2}</h2>
                        <Content>{i.serviceP}</Content>
                         {/* </Circle> */}
                      </Card>

                    );
                  })} 
             
            </Cards>
          </CategoriesWrapper>
        </Box>
      </Boxs>
    </>
  );
};

export default memo(Services);