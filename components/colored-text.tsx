import theme from "../libs/theme";

const ColoredText = ({ children }) => {
    return (
        <span style={{color: theme.colors.michalGreen}}>
            {children}
        </span>
    )
}

export default ColoredText;