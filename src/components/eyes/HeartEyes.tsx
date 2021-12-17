import React from 'react'
import { useTheme } from '../../themeContext'
import { EyeProps } from './types'
import { LeftLash, RightLash } from './Lashes'
import { Path } from '@shopify/react-native-skia'

export const HeartEyes = ({ withLashes }: EyeProps) => {
  const { colors, skin } = useTheme()

  return (
    <>
      <Path
        path="M271.4,576.82c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7,70,70,0,0,1,42.21,2.68A71.67,71.67,0,0,1,374,517.4c29.53,15.88,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a69.35,69.35,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,585.39,75.67,75.67,0,0,1,271.4,576.82Z"
        color={skin.shadow}
      />
      <Path
        path="M269.77,558.47c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.25,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.4a67.24,67.24,0,0,1-6.11-7.47,65,65,0,0,1-5.58-9.5A55.59,55.59,0,0,1,270.32,567,71.3,71.3,0,0,1,269.77,558.47Z"
        color={colors.white}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        path="M374,551.07v5.67a2,2,0,0,0-.13.39,21.27,21.27,0,0,1-1.92,6.53,44.36,44.36,0,0,1-8.59,12.09,120.43,120.43,0,0,1-24.25,18.93.87.87,0,0,1-1.06,0,128.66,128.66,0,0,1-19.86-14.63,61.62,61.62,0,0,1-11.37-13.31,24,24,0,0,1-3.08-18.5c3.22-14.32,21-20.17,32.15-10.57.95.81,1.79,1.76,2.74,2.7a2.75,2.75,0,0,1,.19-.28c5-5.56,11.1-8,18.44-6.81,8.05,1.35,13.32,6.16,15.89,13.9A36.94,36.94,0,0,1,374,551.07Z"
        color="#e2495b"
      />
      <Path
        path="M583.89,568.76c.43-15.13,6.67-30.09,15.1-41.33a72.82,72.82,0,0,1,7.12-8.53A69.73,69.73,0,0,1,696.28,510a73.27,73.27,0,0,1,6.53,5.13c27,21.45,30.12,63.14,15.32,93.23a62.31,62.31,0,0,1-4.78,6.86,72.09,72.09,0,0,1-7.58,8.13c-20.27,17.83-51.81,22.13-77.41,12.42a71.34,71.34,0,0,1-10.55-5c-17.9-10.78-30.37-31.09-33.43-52.23A62.93,62.93,0,0,1,583.89,568.76Z"
        color={skin.shadow}
      />
      <Path
        path="M589.38,557.26c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8,68.55,68.55,0,0,1,86.77-8.37,69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6C687.15,625,656.8,629,632.17,619.9A68.79,68.79,0,0,1,622,615.19c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,557.26Z"
        color={colors.white}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        path="M695.19,549.32v5.6a2.91,2.91,0,0,0-.12.39,21,21,0,0,1-1.89,6.44,43.87,43.87,0,0,1-8.49,11.94,118.43,118.43,0,0,1-24,18.69.87.87,0,0,1-1,0,127,127,0,0,1-19.61-14.44,61.31,61.31,0,0,1-11.22-13.14,23.82,23.82,0,0,1-3-18.27c3.18-14.14,20.79-19.91,31.75-10.44.94.8,1.77,1.74,2.7,2.67.06-.1.13-.19.19-.28,4.9-5.49,11-7.94,18.21-6.72,8,1.33,13.16,6.08,15.69,13.72A33.67,33.67,0,0,1,695.19,549.32Z"
        color="#e2495b"
      />

      {withLashes && (
        <>
          <LeftLash />
          <RightLash />
        </>
      )}
    </>
  )
}
