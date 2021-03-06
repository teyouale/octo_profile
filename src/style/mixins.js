import { css } from "styled-components";
import colors from "./theme";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `,
  outline: css`
    outline: 1px solid red;
  `,
};

export default mixins;
