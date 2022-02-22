import Head from "next/head";
import Navbar from "../navbar"
import {Box, Container} from "@chakra-ui/react"

import ModelLoader from '../3d-model-loader'
import dynamic from "next/dynamic";

const LazyModel = dynamic(() => import('../3d-model'), {
  ssr: false,
  loading: () => <ModelLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Michal Špitálský</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={140}>
                <LazyModel />
                {children}
            </Container>
        </Box>
    )
}

export default Main