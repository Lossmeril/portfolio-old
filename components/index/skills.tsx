import React from 'react'
import { Wrap } from '@chakra-ui/react'
import { MdCameraRoll } from 'react-icons/md'
import {
  IoCalendarSharp,
  IoCamera,
  IoMic,
  IoNewspaperSharp,
  IoPricetag,
  IoShapesSharp
} from 'react-icons/io5'
import {
  RiClapperboardFill,
  RiQuillPenFill,
  RiScissorsFill
} from 'react-icons/ri'

import SkillTag from './skill-tags'

const skills = [
  { icon: IoPricetag, name: 'Brand design' },
  { icon: IoShapesSharp, name: 'Vector illustration' },
  { icon: IoCalendarSharp, name: 'Event design' },
  { icon: MdCameraRoll, name: 'Event videography' },
  { icon: RiClapperboardFill, name: 'Directing' },
  { icon: IoCamera, name: 'Camera operating' },
  { icon: IoMic, name: 'Sound recording' },
  { icon: RiScissorsFill, name: 'Video editing' },
  { icon: RiQuillPenFill, name: 'Screenwriting' },
  { icon: IoNewspaperSharp, name: 'Copywriting' }
]

const Skills: React.FC = () => {
  return (
    <Wrap spacing={2}>
      {skills.map(skill => (
        <SkillTag icon={skill.icon}>{skill.name}</SkillTag>
      ))}
    </Wrap>
  )
}

export default Skills
