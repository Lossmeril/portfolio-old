import theme from "../libs/theme";

const ColoredText = ({ children, textColor }) => {
    return (
        <span style={{color: textColor}}>
            {children}
        </span>
    )
}

export default ColoredText;