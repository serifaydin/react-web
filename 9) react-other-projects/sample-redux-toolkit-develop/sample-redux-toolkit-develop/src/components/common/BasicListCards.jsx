import React from "react";
import { BasicCard } from "./BasicCard";
import { FlexContainer } from "./FlexContainer";

export function BasicListCards(props) {
    if (!props.list) {
        return <></>;
    }

    return (
        <FlexContainer wrap start={!props.center} center={props.center}>
            {props.list.map((element) => (
                <FlexContainer key={element._id}>
                    <BasicCard
                        id={element._id}
                        width={props.width}
                        title={element.title}
                        image={element.image}
                        priceText={element.price}
                        discountText={element.discount_price}
                        quantityText={element.qty}
                        countText={element.count}
                        quantity
                        buttons={props.buttons}
                        element={element}
                        blockers={props.blockers}
                        hiddenCount={props.hiddenCount}
                    />
                </FlexContainer>
            ))}
        </FlexContainer>
    );
}
