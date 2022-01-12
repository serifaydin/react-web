import react,{useContext} from "react";
import ThemeContext from "./ThemeContext";

const Layout = () => {
    const theme = useContext(ThemeContext);

    return(
    <div style={theme}>
        {JSON.stringify(theme)}
       <p> This is a Component</p>
    </div>
    )
}

export default Layout;