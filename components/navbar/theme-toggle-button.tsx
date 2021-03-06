import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'
import theme from '../../libs/theme'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('dark', 'light')}
        initial={{ rotate: -180, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 180, scale: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        <IconButton
          aria-label="Toggle theme"
          backgroundColor={useColorModeValue(
            theme.colors.michalGray.base,
            theme.colors.michalCream.base
          )}
          color={useColorModeValue(
            theme.colors.michalCream.base,
            theme.colors.michalGray.base
          )}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          _hover={{
            backgroundColor: useColorModeValue(
              theme.colors.michalGray.base,
              theme.colors.michalCream.saturated
            ),
            color: useColorModeValue(
              theme.colors.michalCream.saturated,
              theme.colors.michalGray.base
            )
          }}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
