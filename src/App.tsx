import styled from "styled-components";
import Button from "ui/Button";

const H1 = styled.h1`
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
`;

export default function App() {
    return (
        <div>
            <H1>Styled Components</H1>
            <Button $variation="danger" $size="small">
                Test
            </Button>
        </div>
    );
}
