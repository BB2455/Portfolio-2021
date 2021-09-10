import styled from "styled-components";
// import { device } from "../Devices";

export const Title = styled.h1`
  font-size: 2rem;
  padding: ${(props) => props.padding};
`;

Title.defaultProps = {
  padding: "2rem 0",
};
