import styled from "styled-components";
import theme from "../../themes/theme";
import { Title } from "../shared";

export const FooterWrapper = styled.div`
  width: 100%;
  background: #000;
`;

export const IconLink = styled.a`
  text-decoration: none;
  margin-left: 2rem;
  color: ${theme.mainColor};
  font-size: 1.5rem;
  &:hover {
    color: #5cdb95;
  }
`;

export const FooterTitle = styled(Title)`
  font-size: 1.5rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
