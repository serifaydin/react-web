import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasicTitle } from "./common/BasicTitle";
import { BasicListCards } from "./common/BasicListCards";
import { NavigationMenu } from "./common/NavigationMenu";
import { resources } from "../resources";
import { useHistory } from "react-router-dom";
import { routers } from "../routers";
import { Button } from "@mui/material";
import { postOrder } from "../store/reducers/Order/OrderThunks";
import { FlexContainer } from "./common/FlexContainer";
import { ModalButtons } from "./common/ModalButtons";

export default function Order() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [modal] = useState({ setOpen: null });
    const [responseText, setResponseText] = useState("");

    const { salads, order } = useSelector((state) => state.orderReducer);

    const goToMeleculId = (element) => history.push(routers.salads.path + "/" + element._id);

    const completeOrder = async () => {
        try {
            const response = await dispatch(postOrder(order));
            if (response && response.payload.success) {
                setResponseText(resources.OrderCompleted);
                modal.setOpen(true);
            } else {
                throw new Error();
            }
        } catch (error) {
            setResponseText(resources.SomethingWentWrong);
            modal.setOpen(true);
        }
    };

    return (
        <>
            <NavigationMenu salads molecules />

            <BasicTitle text={resources.Orders} />

            {!salads.length ? (
                <BasicTitle text={resources.NoSalad} center />
            ) : (
                <>
                    <FlexContainer center>
                        <Button onClick={completeOrder}>{resources.CompleteOrder}</Button>
                    </FlexContainer>

                    <BasicListCards list={salads} width={300} buttons={[{ onClick: goToMeleculId, text: resources.More }]} />
                </>
            )}

            <ModalButtons buttons={[]} text={""} handler={(setOpen) => (modal.setOpen = setOpen)}>
                <FlexContainer center>{responseText}</FlexContainer>
            </ModalButtons>
        </>
    );
}
