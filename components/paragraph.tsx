import { Text } from "@chakra-ui/react";

const Paragraph = ({children}) => {
    return (
        <Text textAlign={{base: "left", md: "justify"}} fontSize="11pt" style={{textIndent: "1em"}}>
            {children}
        </Text>
    )
}


export default Paragraph