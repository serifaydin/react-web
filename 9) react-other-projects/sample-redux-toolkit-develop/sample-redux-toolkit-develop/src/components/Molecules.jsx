import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasicTitle } from "./common/BasicTitle";
import { resources } from "../resources";
import { BasicListCards } from "./common/BasicListCards";
import { NavigationMenu } from "./common/NavigationMenu";
import { ModalButtons } from "./common/ModalButtons";
import BasicListItems from "./common/BasicListItems";
import { useHistory } from "react-router-dom";
import { routers } from "../routers";
import { createClone, pushReverse, resetClone, resetReverse, updateClone } from "../store/reducers/Molecule/MoleculeSlice";
import { addNewSalad } from "../store/reducers/App/AppThunks";

export default function Molecules() {
    const { molecules, cloneMolecules, reserve } = useSelector((state) => state.moleculeReducer);
    const [modalItems] = useState({ setOpen: null });
    const [modalRedirect] = useState({ setOpen: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        dispatch(createClone());
    }, [molecules]);

    useEffect(() => {
        return () => {
            dispatch(resetClone());
            dispatch(resetReverse());
        };
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();

    const onClickListButton = (name) => {
        if (reserve.length) {
            if (!name) {
                setError(true);
            } else {
                dispatch(addNewSalad(name));
                modalItems.setOpen(false);
                modalRedirect.setOpen(true);
            }
        }
    };

    const closeModalRedirect = () => {
        modalRedirect.setOpen(false);
    };

    const goToSalads = () => history.push(routers.salads.path);

    const addMolecule = (element) => {
        dispatch(pushReverse(element));
        dispatch(updateClone(element));
    };

    const onCloseModalItems = () => {
        dispatch(resetClone());
        dispatch(resetReverse());
        dispatch(createClone());
    };

    return (
        <>
            <NavigationMenu order salads />

            <BasicTitle text={resources.Molecule} />

            <ModalButtons buttons={[]} title={resources.AddSalad} handler={(setOpen) => (modalItems.setOpen = setOpen)} onClose={onCloseModalItems}>
                <BasicListItems
                    form
                    list={cloneMolecules}
                    name={resources.NameSalad}
                    buttonItem={{ onClick: addMolecule, text: resources.Add }}
                    buttonList={{ onClick: onClickListButton, text: resources.CreateSalad }}
                    error={error}
                    errorText={resources.RequriredField}
                />
            </ModalButtons>

            <ModalButtons
                buttons={[
                    { onClick: closeModalRedirect, text: resources.Stay },
                    { onClick: goToSalads, text: resources.MoveToSalad },
                ]}
                text={""}
                handler={(setOpen) => (modalRedirect.setOpen = setOpen)}
            />

            {!molecules.length ? <BasicTitle text={resources.NoMolecules} center /> : <BasicListCards list={molecules} width={300} hiddenCount />}
        </>
    );
}
