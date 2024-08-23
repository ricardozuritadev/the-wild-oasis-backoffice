import styled from "styled-components";

import GlobalStyles from "styles/GlobalStyles";

import Button from "ui/Button";

const StyledApp = styled.div`
    background-color: white;
`;

export default function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Button $variation="danger" $size="large">
                    Test
                </Button>
            </StyledApp>
        </>
    );
}
