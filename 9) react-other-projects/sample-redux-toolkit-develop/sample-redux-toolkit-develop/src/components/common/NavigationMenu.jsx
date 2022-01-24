import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { resources } from "../../resources";
import { routers } from "../../routers";
import { ModalButtons } from "./ModalButtons";

export function NavigationMenu(props) {
    const [buttons, setButtons] = useState([]);
    const history = useHistory();

    const goToOrder = () => history.push(routers.order.path);
    const goToMolecules = () => history.push(routers.molecules.path);
    const goTosalads = () => history.push(routers.salads.path);

    useEffect(() => {
        const buttons = [];

        if (props.order) buttons.push({ onClick: goToOrder, text: resources.Orders });
        if (props.salads) buttons.push({ onClick: goTosalads, text: resources.ReadySalads });
        if (props.molecules) buttons.push({ onClick: goToMolecules, text: resources.Recipe });

        setButtons(buttons);
    }, []);

    return <ModalButtons title={resources.Menu} buttons={buttons} />;
}
