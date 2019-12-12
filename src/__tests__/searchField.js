import React from "react";
import ReactDOM from "react-dom";

import { getMuiTheme, MuiThemeProvider } from "../lib";
import { SearchFieldTest } from "../../stories/SearchField.stories";

it("renders search field without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MuiThemeProvider theme={getMuiTheme()}>
            <SearchFieldTest />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
