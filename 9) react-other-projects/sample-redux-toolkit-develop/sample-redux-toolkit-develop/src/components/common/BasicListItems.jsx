import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { resources } from "../../resources";
import { Button, CardMedia, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { FlexContainer } from "./FlexContainer";
import { BaseAPI } from "../../api/BaseAPI";

export default function BasicListItems(props) {
    const [name, setName] = React.useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const clickButtonList = () => {
        props.buttonList.onClick(name);
        setName("");
    };

    return (
        <>
            <FlexContainer center>
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                    {props.form && (
                        <FlexContainer center>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">{props.name}</InputLabel>
                                <OutlinedInput
                                    error={props.error && !name}
                                    helperText={props.errorText}
                                    id={props.error && !name ? "filled-error-helper-text" : "component-outlined"}
                                    value={name}
                                    onChange={handleChange}
                                    label={props.name}
                                />
                            </FormControl>
                        </FlexContainer>
                    )}
                    {props.list.map((element) => (
                        <FlexContainer>
                            <FlexContainer>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CardMedia component="img" alt={props.title} height="100%" image={BaseAPI.baseURL + element.image} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={element.title}
                                        secondary={
                                            <>
                                                <div>{resources.Price + ": " + element.discount_price}</div>
                                                <div>{resources.Count + ": " + (element.count || 0)}</div>
                                                <div>{resources.Avaible + ": " + (element.avaible || element.qty)}</div>
                                            </>
                                        }
                                    />
                                </ListItem>
                            </FlexContainer>

                            {props.buttonItem && (
                                <Button onClick={() => props.buttonItem.onClick(element)} disabled={element.qty !== undefined ? element.qty < 1 : false}>
                                    {props.buttonItem.text}
                                </Button>
                            )}
                        </FlexContainer>
                    ))}
                </List>
            </FlexContainer>
            <FlexContainer center>
                {props.buttonList && (
                    <Button onClick={clickButtonList} variant="contained">
                        {props.buttonList.text}
                    </Button>
                )}
            </FlexContainer>
        </>
    );
}
