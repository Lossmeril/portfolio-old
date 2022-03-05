import { Wrap } from '@chakra-ui/react'
import {
  IoCalendarSharp,
  IoCamera,
  IoMic,
  IoNewspaperSharp,
  IoPricetag,
  IoShapesSharp
} from 'react-icons/io5'
import { MdCameraRoll } from 'react-icons/md'
import {
  RiClapperboardFill,
  RiQuillPenFill,
  RiScissorsFill
} from 'react-icons/ri'
import SkillTag from './skill-tags'

const Skills = () => {
  return (
    <Wrap spacing={2}>
      <SkillTag icon={IoPricetag}>Brand design</SkillTag>
      <SkillTag icon={IoShapesSharp}>Vector illustration</SkillTag>
      <SkillTag icon={IoCalendarSharp}>Event design</SkillTag>
      <SkillTag icon={MdCameraRoll}>Event videography</SkillTag>
      <SkillTag icon={RiClapperboardFill}>Directing</SkillTag>
      <SkillTag icon={IoCamera}>Camera operating</SkillTag>
      <SkillTag icon={IoMic}>Sound recording</SkillTag>
      <SkillTag icon={RiScissorsFill}>Video editing</SkillTag>
      <SkillTag icon={RiQuillPenFill}>Screenwriting</SkillTag>
      <SkillTag icon={IoNewspaperSharp}>Copywriting</SkillTag>
    </Wrap>
  )
}

export default Skills
