import styled, { css } from "styled-components";
import { mixins, theme } from "./index";

const Section = styled.section`
  ${mixins.flexCenter};
  padding: 2rem;
  ${(props) =>
    props.dark &&
    ` background-color: ${theme.colors.black};
          color: ${theme.colors.lightestBlue};
          padding-bottom: 10rem;`};
`;

export default Section;
