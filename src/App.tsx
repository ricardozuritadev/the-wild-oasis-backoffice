import styled from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import Button from "ui/Button";
import Heading from "ui/Heading";

const StyledApp = styled.div`
    background-color: rebeccapurple;
`;

export default function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Heading as="h1">Título</Heading>
                <Button>Botón</Button>
            </StyledApp>
        </>
    );
}
