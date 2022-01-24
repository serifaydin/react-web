import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BasicTitle } from "./common/BasicTitle";
import { resources } from "../resources";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import { setOrder } from "../store/reducers/App/AppThunks";
import { routers } from "../routers";
import { NavigationMenu } from "./common/NavigationMenu";
import { BasicListCards } from "./common/BasicListCards";

export default function Salads() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { salads, blockers } = useSelector((state) => state.saladReducer);

    const goToMeleculId = (element) => history.push(routers.salads.path + "/" + element._id);
    const addOrder = (element) => dispatch(setOrder(element));

    return (
        <>
            <NavigationMenu order molecules />

            <BasicTitle text={resources.Salads} />

            {!salads.length ? (
                <BasicTitle text={resources.noSalad} center />
            ) : (
                <BasicListCards
                    width={450}
                    blockers={blockers}
                    buttons={[
                        { onClick: goToMeleculId, text: resources.More },
                        { onClick: addOrder, text: resources.AddOrder, icon: PlusOneIcon, disable: true },
                    ]}
                    list={salads}
                />
            )}
        </>
    );
}
