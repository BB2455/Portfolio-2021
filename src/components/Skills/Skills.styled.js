import styled from "styled-components";
import { P } from "../shared";
import theme from "../../themes/theme";
import { device } from "../Devices";

export const SkillsWrapper = styled.div`
  width: 100%;
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const TypeContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  @media ${device.sm} {
    justify-content: center;
  }
`;

export const SkillName = styled(P)`
  background: #191919;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 2rem 0.5rem;
  border-radius: 10px;
  color: ${theme.secondaryColor};
  @media ${device.sm} {
    margin: 0 0.25rem 1rem 0.25rem;
  }
`;

export const SkillTitle = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  @media ${device.xlg} {
    font-size: 1.5rem;
  }
  @media ${device.md} {
    font-size: 1.25rem;
  }
  @media ${device.xsm} {
    font-size: 0.75rem;
  }
`;
