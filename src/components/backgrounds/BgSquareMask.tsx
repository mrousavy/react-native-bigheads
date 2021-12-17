import React from 'react'
import { Mask, Path } from '@shopify/react-native-skia'
import { BgMaskProps } from './types'

export const BgSquareMask = ({ id }: BgMaskProps) => {
  return (
    <Mask
      id={id}
      // @ts-ignore
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="1000"
      height="963"
    >
      <Path path="M1000 0H0V718.31H167.551V962.594H832.441V718.31H1000V0Z" color="white" />
    </Mask>
  )
}
