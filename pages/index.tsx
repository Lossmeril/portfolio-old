import {
    Container,
    Box,
    Heading,
    chakra,
    useColorModeValue
} from "@chakra-ui/react"
import Section from "../components/section"
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" mb={6} p={3} textAlign="center">
                Welcome to my portfolio
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Michal Špitálský
                    </Heading>
                    <p>Inter vepres rosae nascuntur</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center">
                    <Box
                        borderColor={useColorModeValue("michalGray", "michalCream")}
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow='hidden'
                    >
                        <ProfileImage
                            src="/images/michal.png"
                            alt="Profile image"
                            borderRadius='full'
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>

            

            <Section delay="0.1" >
                <Heading as="h3" variant="section-title">
                    Graphic Designer
                </Heading>
                <p>Lorem Ipsum</p>
            </Section>

            <Section delay="1.1" >
                <Heading as="h3" variant="section-title">
                    Graphic Designer
                </Heading>
                <p>Lorem Ipsum</p>
            </Section>

        </Container>
    )
}

export default Page