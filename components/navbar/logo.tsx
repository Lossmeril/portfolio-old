import Link from "next/link"
import Image from "next/image"
import {Text, useColorModeValue} from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px;
`

const Logo = () => {
    const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logoImg} width={160} height={68} alt="logo" />
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo