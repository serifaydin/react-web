import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { routers, routersKeys } from "./routers";
import { initApp } from "./store/reducers/App/AppThunks";
import "./App.scss";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initApp());
    }, []);

    return (
        <>
            <div className="container">
                <Switch>
                    {routersKeys.map((key, i) => (
                        <Route key={i} {...routers[key]} />
                    ))}
                </Switch>
            </div>
        </>
    );
};

export default App;
