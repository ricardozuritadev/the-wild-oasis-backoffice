import styled from "styled-components";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast, { Toaster } from "react-hot-toast";

import { deleteCabin } from "services/apiCabins";
import { formatCurrency } from "utils/helpers";

import { Cabin as CabinTypes } from "types/cabins.types";

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

const Price = styled.div`
    font-family: "Sono";
    font-weight: 600;
`;

const Discount = styled.div`
    font-family: "Sono";
    font-weight: 500;
    color: var(--color-green-700);
`;

type CabinRowProps = {
    cabin: CabinTypes;
};

export default function CabinRow({ cabin }: CabinRowProps) {
    const {
        id: cabinId,
        name,
        maxCapacity,
        regularPrice,
        discount,
        image
    } = cabin;

    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            });
            toast.success("Successfully toasted!");
        },
        onError: (error) => alert(error.message)
    });

    return (
        <>
            <TableRow role="row">
                <Img src={image ?? ""} alt="Cabin interior" />
                <Cabin>{name}</Cabin>
                <div>Fits up {maxCapacity} guests</div>
                <Price>{formatCurrency({ value: regularPrice })}</Price>
                <Discount>{formatCurrency({ value: discount })}</Discount>
                <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
                    Delete
                </button>
            </TableRow>
            <Toaster />
        </>
    );
}
