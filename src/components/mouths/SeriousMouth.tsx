import React from 'react'
import { useTheme } from '../../themeContext'
import { Line } from '@shopify/react-native-skia'

export const SeriousMouth = () => {
  const { colors } = useTheme()

  return (
    <Line
      x1="446.66"
      y1="606.02"
      x2="542.53"
      y2="606.02"
      color="none"
      stroke={colors.outline}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth="12px"
    />
  )
}
