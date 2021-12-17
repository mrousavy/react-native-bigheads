import React from 'react'
import { useTheme } from '../../themeContext'
import { FacialHairProps } from './types'
import { Path, G } from '@shopify/react-native-skia'

export const Goatee = ({ color }: FacialHairProps) => {
  const { colors } = useTheme()
  const { base } = colors.hair[color]

  return (
    <G>
      <Path
        path="M463 737L499.5 808L536 737H463Z"
        color={base}
        stroke={colors.outline}
        strokeWidth="12"
        strokeLinejoin="round"
      />
    </G>
  )
}
