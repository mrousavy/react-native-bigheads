import React from 'react'
import { useTheme } from '../../themeContext'
import { Circle } from '@shopify/react-native-skia'
import { BgShapeProps } from './types'

export const BgCircle = ({ bgColor }: BgShapeProps) => {
  const { colors } = useTheme()

  const color = colors.bgColors[bgColor]

  return <Circle cx="500" cy="630.1601" r="332.441995" color={color} />
}
