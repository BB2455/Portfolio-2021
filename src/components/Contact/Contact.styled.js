import styled from "styled-components";
import theme from "../../themes/theme";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 3rem 0 2rem 0;
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  margin-top: 1rem;
  color: ${theme.mainColor};
  font-size: 1.25rem;
  &:hover {
    color: #5cdb95;
  }
`;
