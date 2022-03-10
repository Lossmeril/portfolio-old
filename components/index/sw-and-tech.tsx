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

const sws = [
  {
    icon: SiAdobephotoshop,
    name: 'Adobe Photoshop',
    skill: 5
  },
  {
    icon: SiAdobeillustrator,
    name: 'Adobe Illustrator',
    skill: 5
  },
  {
    icon: SiAdobeindesign,
    name: 'Adobe InDesign',
    skill: 4
  },
  {
    icon: SiAdobepremierepro,
    name: 'Adobe Premiere Pro',
    skill: 5
  },
  {
    icon: SiAdobeaftereffects,
    name: 'Adobe After Effects',
    skill: 3
  },
  {
    icon: SiCinema4D,
    name: 'Cinema 4D',
    skill: 3
  },
  {
    icon: SiAdobeaudition,
    name: 'Adobe Audition',
    skill: 3
  },
  {
    icon: AvidIcon,
    name: 'AVID Media Composer',
    skill: 3,
    width: 12
  },
  {
    icon: SiHtml5,
    name: 'HTML 5',
    skill: 5
  },
  {
    icon: SiCss3,
    name: 'CSS 3',
    skill: 5
  },
  {
    icon: SiJavascript,
    name: 'JavaScript',
    skill: 3
  },
  {
    icon: SiTypescript,
    name: 'TypeScript',
    skill: 3
  },
  {
    icon: SiReact,
    name: 'React JS',
    skill: 3
  },
  {
    icon: SiPhp,
    name: 'PHP',
    skill: 4
  },
  {
    icon: SiWordpress,
    name: 'Wordpress',
    skill: 5
  },
  {
    icon: SiMicrosoftoffice,
    name: 'Microsoft Office',
    skill: 5,
    notes: 'ECDL certification'
  },
  {
    icon: CeltxIcon,
    name: 'CeltX',
    skill: 4
  }
]

const SwAndTech = () => {
  return (
    <Wrap spacing={3}>
      {sws.map(sw => (
        <SkillIcon
          as={sw.icon}
          name={sw.name}
          skill={sw.skill}
          w={sw.width ? sw.width : 8}
        >
          {sw.notes ? sw.notes : ''}
        </SkillIcon>
      ))}
    </Wrap>
  )
}

export default SwAndTech
