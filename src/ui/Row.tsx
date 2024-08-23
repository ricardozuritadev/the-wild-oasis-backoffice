import styled, { css } from "styled-components";

type RowProps = {
    orientation: "horizontal" | "vertical";
};

const Row = styled.div<RowProps>`
    display: flex;

    ${(props) =>
        props.orientation === "horizontal" &&
        css`
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        `}

    ${(props) =>
        props.orientation === "vertical" &&
        css`
            flex-direction: column;
            gap: 1.6rem;
        `}
`;

Row.defaultProps = {
    orientation: "vertical"
};

export default Row;
