import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" mb={6} p={3} textAlign="center">
                Welcome to my portfolio
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Michal Špitálský
                    </Heading>
                    <p>Inter vepres rosae nascuntur</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page