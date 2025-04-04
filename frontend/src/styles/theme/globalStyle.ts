import { css } from "@emotion/react";

export const GlobalStyles = css`
    @font-face {
        font-family: "Inter";
        src: url('/assets/fonts/Inter-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: "Inter";
        src: url("/assets/fonts/Inter-Bold.woff2") format("woff2");
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: "Inter";
        src: url("/assets/fonts/Inter-SemiBold.woff2") format("woff2");
        font-weight:600;
        font-style: normal;
    }
    body {
        font-family: "Infer", sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

