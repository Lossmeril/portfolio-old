import { Wrap } from '@chakra-ui/react'
import {
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCinema4D,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMicrosoftoffice,
  SiPhp,
  SiReact,
  SiTypescript,
  SiWordpress
} from 'react-icons/si'
import { AvidIcon } from '../icons/avid-icon'
import { CeltxIcon } from '../icons/celtx'
import SkillIcon from './skill-icon'

const SwAndTech = () => {
  return (
    <Wrap spacing={3}>
      <SkillIcon as={SiAdobephotoshop} name="Adobe Photoshop" skill={5} />
      <SkillIcon as={SiAdobeillustrator} name="Adobe Illustrator" skill={5} />
      <SkillIcon as={SiAdobeindesign} name="Adobe InDesign" skill={4} />
      <SkillIcon as={SiAdobepremierepro} name="Adobe Premiere Pro" skill={5} />
      <SkillIcon
        as={SiAdobeaftereffects}
        name="Adobe After Effects"
        skill={3}
      />
      <SkillIcon as={SiCinema4D} name="Cinema 4D" skill={3} />
      <SkillIcon as={SiAdobeaudition} name="Adobe Audition" skill={3} />
      <SkillIcon as={AvidIcon} name="AVID Media Composer" skill={3} w={12} />
      <SkillIcon as={SiHtml5} name="HTML 5" skill={5} />
      <SkillIcon as={SiCss3} name="CSS 3" skill={5} />
      <SkillIcon as={SiJavascript} name="JavaScript" skill={3} />
      <SkillIcon as={SiTypescript} name="TypeScript" skill={3} />
      <SkillIcon as={SiReact} name="React" skill={3} />
      <SkillIcon as={SiPhp} name="PHP" skill={4} />
      <SkillIcon as={SiWordpress} name="Wordpress" skill={5} />
      <SkillIcon as={SiMicrosoftoffice} name="Microsoft Office" skill={5}>
        ECDL certification
      </SkillIcon>
      <SkillIcon as={CeltxIcon} name="CeltX" skill={4} />
    </Wrap>
  )
}

export default SwAndTech
