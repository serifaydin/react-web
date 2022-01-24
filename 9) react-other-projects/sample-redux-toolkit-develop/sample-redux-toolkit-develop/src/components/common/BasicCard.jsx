import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BaseAPI } from "../../api/BaseAPI";
import { resources } from "../../resources";
import { Button } from "@mui/material";
import { FlexContainer } from "./FlexContainer";

export function BasicCard(props) {
    return (
        <Card sx={{ width: props.width ? props.width : 300, margin: 1, minHeight: 170 }} key={props.id}>
            {props.image && <CardMedia component="img" alt={props.title} height="300" image={BaseAPI.baseURL + props.image} />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {resources.Price + ": " + props.priceText}
                </Typography>
                {props.discountText !== undefined && (
                    <Typography variant="body2" color="text.secondary">
                        {resources.DiscountPrice + ": " + props.discountText}
                    </Typography>
                )}
                {!props.hiddenCount && (
                    <Typography variant="body2" color="text.secondary">
                        {resources.Count + ": " + (props.countText ? props.countText : 1)}
                    </Typography>
                )}
                {props.quantity && props.quantityText !== undefined && (
                    <Typography variant="body2" color="text.secondary">
                        {resources.InStock + " " + props.quantityText}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <FlexContainer className={"w100"}>
                    {props.buttons &&
                        props.buttons.map((button) => (
                            <Button
                                disabled={button.disable && props.blockers && props.blockers.includes(props.id)}
                                key={button.text}
                                onClick={() => button.onClick(props.element)}
                            >
                                {button.text}
                                {button.icon && <button.icon />}
                            </Button>
                        ))}
                </FlexContainer>
            </CardActions>
        </Card>
    );
}
