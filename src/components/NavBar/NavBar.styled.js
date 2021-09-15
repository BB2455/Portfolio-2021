import styled from "styled-components";
import { device } from "../Devices";
import theme from "../../themes/theme";

export const Nav = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.sm} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled.h2`
  font-size: 1.25rem;
  margin-left: 2.25rem;
  text-decoration: none;
  font-weight: 700;
  color: ${theme.mainColor};
  &:hover {
    color: #5cdb95;
  }
  cursor: pointer;

  @media ${device.xlg} {
    font-size: 1rem;
    margin-left: 2rem;
  }
  @media ${device.md} {
    font-size: 0.75rem;
    margin-left: 1.5rem;
  }
  @media ${device.sm} {
    margin: 0 0.5rem;
  }
`;
