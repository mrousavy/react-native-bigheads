import React from 'react'
import { useTheme } from '../../themeContext'
import { Path, Line } from '@shopify/react-native-skia'

export const Shades = () => {
  const { colors } = useTheme()

  return (
    <>
      <Path
        path="M725,631.82a265.34,265.34,0,0,0,26.3-59.43c-17.24,35.74-49.84,65.46-92.11,65.46A106.75,106.75,0,0,1,552.58,531.22,105.67,105.67,0,0,1,560.41,491H758a105.33,105.33,0,0,1,7.62,33.39c.73-8,1.12-16.19,1.12-24.42a269.16,269.16,0,0,0-1.58-29H575v0H423.14v0H234.83a269.16,269.16,0,0,0-1.58,29c0,4.73.14,9.42.38,14.09A104.92,104.92,0,0,1,240.1,491H437.7a106.7,106.7,0,0,1-98.8,146.82c-38.8,0-68.82-25.83-87.48-56.89a266.14,266.14,0,0,0,24.76,52.84c19.39,12.07,38.25,24.05,62.72,24.05A126.78,126.78,0,0,0,465.53,531.22c0-1.81,0-3.61-.12-5.4,23.38-8.23,45.52-8.35,67.31-.36-.08,1.91-.14,3.83-.14,5.76A126.78,126.78,0,0,0,659.21,657.85C685,657.85,705,645.1,725,631.82ZM535.26,505.18c-23.4-7.55-47.64-7.42-72.33.39A124.62,124.62,0,0,0,459,491h80.1A122.6,122.6,0,0,0,535.26,505.18Z"
        opacity={0.15}
      />
      <Path
        path="M233.59,469.82s.41,32.23.41,50.2c0,64.41,40.48,116.63,104.9,116.63A116.68,116.68,0,0,0,444.2,469.82Z"
        color={colors.outline}
        opacity={0.95}
      />
      <Path
        path="M553.91,469.82a116.68,116.68,0,0,0,105.3,166.83c64.42,0,107.54-52.22,107.54-116.63,0-18-2.23-50.2-2.23-50.2Z"
        color={colors.outline}
        opacity={0.95}
      />
      <Path
        path="M320,626.86,443.07,503.78a93.05,93.05,0,0,0-10-17.27L302.72,616.88A93.62,93.62,0,0,0,320,626.86Z"
        color={colors.white}
        opacity={0.25}
      />
      <Path
        path="M455.86,507.53c29.52-12,58.53-12.42,87,0"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <Path
        path="M274.28,504.75c2.06,6.51-5.94,11.51-11.94,12.51-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.44,1.12A11.7,11.7,0,0,1,274.28,504.75Z"
        color={colors.white}
      />
      <Path
        path="M285,500.93c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.84-4.1A3.77,3.77,0,0,1,285,500.93Z"
        color={colors.white}
      />
      <Path
        path="M645.19,618.92,751.47,512.64a93.89,93.89,0,0,0-2.41-11.22L634,616.51A94.31,94.31,0,0,0,645.19,618.92Z"
        color={colors.white}
        opacity={0.25}
      />
      <Path
        path="M590.68,505.73c2.06,6.51-5.94,11.51-11.94,12.51-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.12A11.69,11.69,0,0,1,590.68,505.73Z"
        color={colors.white}
      />
      <Path
        path="M601.35,501.91c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.85-4.1A3.76,3.76,0,0,1,601.35,501.91Z"
        color={colors.white}
      />
      <Path
        path="M233.59,469.82s-.34,31.69.41,50.2c2.6,64.36,40.48,116.63,104.9,116.63A116.68,116.68,0,0,0,444.2,469.82Z"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <Path
        path="M553.91,469.82a116.68,116.68,0,0,0,105.3,166.83c64.42,0,107.54-51.53,107.54-115.94,0-18-2.23-50.89-2.23-50.89Z"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <Line
        x1="423.14"
        y1="469.81"
        x2="574.97"
        y2="469.81"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
    </>
  )
}
