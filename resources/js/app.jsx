import "./bootstrap";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "../css/app.css";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const theme = createTheme({
    palette: {
        primary: {
            main: "#32325b",
        },
        secondary: {
            main: "#E6B805",
        },
    },
    typography: {
        fontFamily: ['"Poppins"', "sans-serif"].join(","),
    },
});

createInertiaApp({
    title: (title) => `MoneyBeerPH`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx"),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App {...props} />
            </ThemeProvider>,
        );
    },
});
