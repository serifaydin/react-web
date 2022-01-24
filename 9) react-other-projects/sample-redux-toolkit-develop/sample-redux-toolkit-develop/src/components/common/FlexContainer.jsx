import classNames from "classnames";
import React from "react";

export function FlexContainer(props) {
    return (
        <div
            key={props.key ? props.key : ""}
            className={classNames("flex", props.className, {
                "flex-center": props.center,
                "flex-wrap": props.wrap,
                "flex-around": props.around,
                "flex-start": props.start,
            })}
        >
            {props.children}
        </div>
    );
}
