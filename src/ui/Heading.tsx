import styled, { css } from "styled-components";

interface HeadingProps {
  as?: "h1" | "h2" | "h3"; // Using specific strings is safer than just 'string'
}
const Heading = styled.h1<HeadingProps>`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
  props.as === "h2" &&
  css`
    font-size: 2rem;
    font-weight: 500;
  `}
  /* background-color: lightblue; */
  text-align: center;
`;

export default Heading;
