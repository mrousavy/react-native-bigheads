import React from 'react'
import { useTheme } from '../../themeContext'
import { Path } from '@shopify/react-native-skia'

export const AngryEyebrows = () => {
  const { colors } = useTheme()

  return (
    <>
      <Path
        path="M427.29,501.13l-13-4.39-31.2-10.54-37.6-12.71-32.49-11c-5.27-1.78-10.51-3.68-15.81-5.34l-.22-.08a10,10,0,0,0-5.32,19.29l13,4.39,31.2,10.54,37.6,12.7,32.49,11c5.26,1.78,10.5,3.67,15.81,5.34l.22.08a10,10,0,0,0,5.32-19.29Z"
        color={colors.outline}
      />
      <Path
        path="M697.18,453.9,684.46,459l-30.54,12.31-36.81,14.84L585.3,499q-7.74,3.12-15.47,6.24l-.22.08c-2.51,1-4.56,2.17-6,4.6a10.18,10.18,0,0,0-1,7.71,10.06,10.06,0,0,0,4.6,6c2.22,1.18,5.26,2,7.7,1l12.73-5.13,30.54-12.31L655,492.33l31.81-12.82c5.15-2.08,10.32-4.15,15.47-6.24l.22-.09c2.51-1,4.56-2.17,6-4.59a10,10,0,0,0-3.59-13.69c-2.22-1.17-5.27-2-7.71-1Z"
        color={colors.outline}
      />
    </>
  )
}
