import { Global } from "@emotion/react";

const Fonts = () => {
    return (
    <Global
    styles={`
        @font-face {
            font-family: Konnect Extra Bold;
            src: url(/fonts/KonnectExtraBold.otf);
        }
    `}
    />)
}

export default Fonts