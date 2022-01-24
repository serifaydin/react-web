import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FlexContainer } from "./FlexContainer";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export function ModalButtons(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        props.onClose && props.onClose();
    };

    useEffect(() => {
        props.handler && props.handler(setOpen);
    }, []);

    return (
        <FlexContainer center>
            <Button onClick={handleOpen}>{props.title}</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <FlexContainer around>
                        {props.buttons.map((button) => (
                            <Button key={button.text} onClick={button.onClick}>
                                {button.text}
                            </Button>
                        ))}
                    </FlexContainer>
                    {props.children}
                </Box>
            </Modal>
        </FlexContainer>
    );
}
