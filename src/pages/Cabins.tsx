import CabinTable from "features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
    return (
        <>
            <Row orientation="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>filter / sort</p>
            </Row>

            <Row>
                <CabinTable />
            </Row>
        </>
    );
}

export default Cabins;
