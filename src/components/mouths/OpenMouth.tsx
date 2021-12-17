import React from 'react'
import { useTheme } from '../../themeContext'
import { Path, Circle } from '@shopify/react-native-skia'

export const OpenMouth = () => {
  const { colors } = useTheme()

  return (
    <>
      <Circle cx="499.7" cy="642.93" r="53.95" color={colors.outline} />
      <Path
        path="M491.21,663.39c-14.07-3.37-27.62,1-33.45,9.87a48.46,48.46,0,0,0,52.82,20.14,49.33,49.33,0,0,0,6-2C517.93,679.39,507.08,667.18,491.21,663.39Z"
        color={colors.tongue}
      />
      <Path
        path="M478.65,652l.8,0h.65c.43,0,.84,0,1.25.06a17.92,17.92,0,0,1,2.44.35,21,21,0,0,1,4.74,1.53,18.15,18.15,0,0,1,7.78,6.65,17.17,17.17,0,0,1,2.77,9.28,14.75,14.75,0,0,1-2.69,8.47c-1.3-2.76-2.24-5.2-3.31-7.29a24,24,0,0,0-1.62-2.87,12.38,12.38,0,0,0-1.95-2.21,13,13,0,0,0-4.82-2.66,24.72,24.72,0,0,0-2.85-.69c-.49-.07-1-.16-1.47-.22l-.73-.07-.33,0c-.08,0-.26,0-.19,0Z"
        color={colors.outline}
      />
      <Circle
        cx="499.7"
        cy="642.93"
        r="53.95"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
    </>
  )
}
