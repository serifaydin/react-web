import React from "react";
import { Typography } from "@mui/material";
import { FlexContainer } from "./FlexContainer";

export function BasicTitle(props) {
    return (
        <FlexContainer center>
            <Typography id="modal-modal-title" variant="h6" component="h2" className={props.center ? "flex-center" : "" + props.className}>
                {props.text}
            </Typography>
        </FlexContainer>
    );
}
