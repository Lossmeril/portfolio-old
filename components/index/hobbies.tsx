import { Box, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { FaDiceD20, FaRecordVinyl } from 'react-icons/fa'
import { GiCat, GiVisoredHelm } from 'react-icons/gi'
import { IoGameController } from 'react-icons/io5'
import { MdCatchingPokemon } from 'react-icons/md'
import { RiBook2Fill, RiFilmFill } from 'react-icons/ri'
import HobbyIcon from './hobby-icon'

const Hobbies = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <Box>
        <List>
          <ListItem>
            <HobbyIcon as={RiBook2Fill} />
            Books
          </ListItem>
          <ListItem>
            <HobbyIcon as={RiFilmFill} />
            Movies
          </ListItem>
          <ListItem>
            <HobbyIcon as={IoGameController} />
            Videogames
          </ListItem>
          <ListItem>
            <HobbyIcon as={FaRecordVinyl} />
            Music on vinyl
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <HobbyIcon as={FaDiceD20} />
            Dungeons and Dragons
          </ListItem>
          <ListItem>
            <HobbyIcon as={MdCatchingPokemon} />
            Pokémon
          </ListItem>
          <ListItem>
            <HobbyIcon as={GiCat} />
            Cats
          </ListItem>
          <ListItem>
            <HobbyIcon as={GiVisoredHelm} />
            Medieval history
          </ListItem>
        </List>
      </Box>
    </SimpleGrid>
  )
}

export default Hobbies
