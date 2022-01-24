import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resources } from "../resources";
import { getComposition } from "../store/reducers/Molecule/MoleculeSlice";
import { getSaladById } from "../store/reducers/Salad/SaladSlice";
import { BasicCard } from "./common/BasicCard";
import { BasicTitle } from "./common/BasicTitle";
import { BasicListCards } from "./common/BasicListCards";
import { NavigationMenu } from "./common/NavigationMenu";

export default function SaladById() {
    const params = useParams();
    const dispatch = useDispatch();
    const { salad, salads } = useSelector((state) => state.saladReducer);
    const { composition } = useSelector((state) => state.moleculeReducer);

    useEffect(() => {
        dispatch(getSaladById(params.id));
    }, [salads]);

    useEffect(() => {
        dispatch(getComposition(salad));
    }, [salad]);

    return (
        <>
            <NavigationMenu order salads molecules />

            {salad && (
                <>
                    <BasicTitle text={resources.Salad} center />

                    <BasicCard title={salad.title} width={"100%"} priceText={salad.price} discountText={salad.discount_price} />

                    <BasicTitle text={resources.Molecule} center />

                    <BasicListCards list={composition} width={300} center />
                </>
            )}
        </>
    );
}
