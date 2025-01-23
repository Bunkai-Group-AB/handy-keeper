import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Box } from './restyle'

type Props = {
  imgSrc: string
  label: string
  onPress: () => void
}

const Card = ({ imgSrc, label, onPress }: Props) => {
  const theme = useTheme()
  const buttonVariants = theme.buttonVariants.menuButton.default

  return (
    <Box
      height={buttonVariants.height}
      width={buttonVariants.width}
      borderRadius={'xl'}
      backgroundColor={'buttonPrimary'}
    ></Box>
  )
}

export default Card
