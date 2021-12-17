import React from 'react'
import { useTheme } from '../../themeContext'
import { HairProps } from './types'
import { Path, G } from '@shopify/react-native-skia'

export const Back = () => <></>

export const Front = ({ hairColor }: HairProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.hair[hairColor]

  return (
    <G>
      <Path
        path="M749.5 424C598.5 337 408 334 250.5 424C292 290.5 410.5 239.5 496 239.5C633 239.5 722.5 330.5 749.5 424Z"
        color="black"
        fillOpacity="0.15"
      />
      <Path
        path="M458.5 362.5L436 176.238C458.5 120.238 545 127.738 563.5 176.238L545 362.5C532 384 470.5 384.5 458.5 362.5Z"
        color={base}
        stroke={colors.outline}
        strokeWidth="12"
      />
      <Path
        path="M459.5 154.939V186.175C459.5 192.175 469.5 192.175 469.5 186.175V149.128C466.025 150.571 462.676 152.914 459.5 154.939Z"
        color={shadow}
      />
      <Path
        path="M510 143.886V201.675C510 207.675 523 207.675 523 201.675V147.111C518.783 145.781 514.424 144.516 510 143.886Z"
        color={shadow}
      />
    </G>
  )
}
