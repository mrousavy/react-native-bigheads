import React from 'react'
import { useTheme } from '../../themeContext'
import { BodyProps } from './types'
import { Path, Line } from '@shopify/react-native-skia'

export const Front = ({ clothingColor }: BodyProps) => {
  const { colors } = useTheme()

  const { base } = colors.clothing[clothingColor]

  return (
    <>
      <Path
        path="M426.88,961.63a69.32,69.32,0,0,0,65.62-47,71,71,0,0,1-118.19,6.64L374.26,936C387,951.63,405.15,961.63,426.88,961.63Z"
        opacity={0.1}
      />
      <Path
        path="M573.12,961.63a69.32,69.32,0,0,1-65.62-47,71,71,0,0,0,118.19,6.64l0,14.72C613,951.63,594.85,961.63,573.12,961.63Z"
        opacity={0.1}
      />
      {/* <Path
        path="M494.47,852.86a37.23,37.23,0,0,1,6,12.13,48.61,48.61,0,0,1,.15,27,37.23,37.23,0,0,1-5.93,12.19c.43-4.53,1-8.8,1.29-13.05s.5-8.43.48-12.63-.22-8.39-.6-12.63S495,857.38,494.47,852.86Z"
        color={colors.outline}
        opacity={0.5}
      />
      <Path
        path="M505.76,852.29c-.93,5.5-1.74,10.77-2.1,16a103.31,103.31,0,0,0,2.43,31.17c1.19,5.15,2.8,10.23,4.57,15.53A44.76,44.76,0,0,1,501.6,901,55,55,0,0,1,499,867.6,44.61,44.61,0,0,1,505.76,852.29Z"
        color={colors.outline}
        opacity={0.5}
      /> */}
      <Path path="M407,943.81A69.33,69.33,0,0,1,380.42,831.7" color={base} />
      <Path
        path="M407,943.81a57.14,57.14,0,0,1-31.21-16l-1.62-1.6c-.53-.54-1-1.13-1.53-1.69s-1-1.15-1.48-1.73a22,22,0,0,1-1.43-1.79c-.9-1.23-1.81-2.46-2.68-3.72l-2.37-3.93a69,69,0,0,1-6.71-17.13,70.52,70.52,0,0,1-1.69-18.3,64.09,64.09,0,0,1,3.4-17.93c.26-.71.49-1.43.76-2.14l.88-2.1c.55-1.4,1.26-2.74,1.91-4.09a60.79,60.79,0,0,1,4.74-7.63c.85-1.21,1.82-2.35,2.75-3.49s1.94-2.23,3-3.23a47.65,47.65,0,0,1,6.73-5.59c-5.79,10-9.9,20.19-11.66,30.67A78.09,78.09,0,0,0,367.61,878a84.63,84.63,0,0,0,2,15.41,80.81,80.81,0,0,0,5.12,14.65,76.2,76.2,0,0,0,8.08,13.47,79,79,0,0,0,10.81,11.95A115,115,0,0,0,407,943.81Z"
        color={colors.outline}
      />
      <Path path="M593.05,943.81A69.33,69.33,0,0,0,619.58,831.7" color={base} />
      <Path
        path="M593.05,943.81a115,115,0,0,0,13.35-10.29,79,79,0,0,0,10.81-11.95,76.2,76.2,0,0,0,8.08-13.47,80.81,80.81,0,0,0,5.12-14.65,84.63,84.63,0,0,0,2-15.41,78.09,78.09,0,0,0-1.15-15.67c-1.76-10.48-5.87-20.64-11.66-30.67a47.65,47.65,0,0,1,6.73,5.59c1.08,1,2,2.14,3,3.23s1.9,2.28,2.75,3.49a60.79,60.79,0,0,1,4.74,7.63c.65,1.35,1.36,2.69,1.91,4.09l.88,2.1c.27.71.5,1.43.76,2.14a64.09,64.09,0,0,1,3.4,17.93,70.52,70.52,0,0,1-1.69,18.3,69,69,0,0,1-6.71,17.13L633,917.26c-.87,1.26-1.78,2.49-2.68,3.72a22,22,0,0,1-1.43,1.79c-.49.58-1,1.16-1.48,1.73s-1,1.15-1.53,1.69l-1.62,1.6A57.14,57.14,0,0,1,593.05,943.81Z"
        color={colors.outline}
      />
    </>
  )
}

export const Back = ({ clothingColor, braStraps }: BodyProps) => {
  const { skin, colors } = useTheme()

  const { base, shadow } = colors.clothing[clothingColor]

  return (
    <>
      <Path
        path="M502.07,878.86A69.31,69.31,0,1,1,371,847.39"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path path="M371,847.39a69.68,69.68,0,0,1,15-19.67" color={skin.base} />
      <Path
        path="M365.65,844.66a27,27,0,0,1,3.38-5.84,37.22,37.22,0,0,1,4.53-5c.84-.76,1.69-1.5,2.58-2.19a21.1,21.1,0,0,1,2.81-1.92,15,15,0,0,1,7-2,25,25,0,0,1-1.75,6.81c-.39,1-.83,1.88-1.29,2.77l-1.3,2.67c-.85,1.76-1.69,3.49-2.55,5.19a54.51,54.51,0,0,1-2.76,5Z"
        color={colors.outline}
      />
      <Path path="M489.33,838.82a69,69,0,0,1,12.74,40" color={skin.base} />
      <Path
        path="M489.33,838.82a26.55,26.55,0,0,1,8.69,7.55,38.8,38.8,0,0,1,3.1,4.79c.93,1.67,1.77,3.39,2.55,5.15a55.12,55.12,0,0,1,3.46,11,48,48,0,0,1,.94,11.53h-12c-.19-3.25-.36-6.48-.7-9.73s-.77-6.48-1.4-9.74l-.5-2.44-.58-2.45c-.42-1.63-.87-3.26-1.29-4.93A104.17,104.17,0,0,1,489.33,838.82Z"
        color={colors.outline}
      />
      <Path path="M641.65,878.86a69.14,69.14,0,0,0-21.94-50.6" color={skin.base} />
      <Path
        path="M635.65,878.86A107,107,0,0,0,634.39,866a81.92,81.92,0,0,0-3.12-12.67c-.34-1-.74-2.07-1.11-3.11s-.84-2.05-1.25-3.09-.94-2-1.38-3.05l-1.46-3c-2-4.1-4.17-8.19-6.36-12.75a35.76,35.76,0,0,1,12.22,8.61c.83.94,1.7,1.86,2.47,2.85s1.54,2,2.25,3,1.43,2.09,2.07,3.18,1.31,2.18,1.88,3.32A62.19,62.19,0,0,1,646,863.58a56.6,56.6,0,0,1,1.62,15.28Z"
        color={colors.outline}
      />
      <Path
        path="M503,878.86a69.31,69.31,0,1,0,138.61,0"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path path="M515.77,838.82a69,69,0,0,0-12.73,40" color={skin.base} />
      <Path
        path="M515.77,838.82a104.17,104.17,0,0,1-2.27,10.75c-.42,1.67-.87,3.3-1.29,4.93l-.57,2.45-.5,2.44c-.63,3.26-1.09,6.5-1.41,9.74s-.5,6.48-.69,9.73H497a47,47,0,0,1,.94-11.53,54.48,54.48,0,0,1,3.46-11c.77-1.76,1.61-3.48,2.54-5.15a40,40,0,0,1,3.1-4.79A26.66,26.66,0,0,1,515.77,838.82Z"
        color={colors.outline}
      />
      {braStraps && (
        <>
          <Line
            x1="383.44"
            y1="837.55"
            x2="383.44"
            y2="758.72"
            color="none"
            stroke={colors.outline}
            strokeMiterlimit={10}
            strokeWidth="12px"
          />
          <Line
            x1="616.46"
            y1="837.55"
            x2="616.46"
            y2="758.72"
            color="none"
            stroke={colors.outline}
            strokeMiterlimit={10}
            strokeWidth="12px"
          />
        </>
      )}
      <Path
        path="M470.5,897.78h53.9v19.7c-17.74-6.05-35.71-5.9-53.9,0Z"
        color={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        path="M638.1,878.86a69.06,69.06,0,0,0-18.63-47.28c-4.22-4.52-44.27,6.19-67.81,27.26-23.11,20.69-43.23,54.49-40.35,58.75A69.31,69.31,0,0,0,638.1,878.86Z"
        color={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        path="M598.11,848.39c-6.12,3.67-12.15,7.18-18,11a154.79,154.79,0,0,0-16.53,12.18c-5.15,4.46-10.11,9.32-15,14.26s-9.69,10-14.75,15.07a100,100,0,0,1,11.18-18.17A106.06,106.06,0,0,1,559.72,867a84.36,84.36,0,0,1,18.14-11.73A83.45,83.45,0,0,1,598.11,848.39Z"
        color={colors.white}
      />
      <Path
        path="M361.9,878.86a69.06,69.06,0,0,1,18.63-47.28c4.22-4.52,44.27,6.19,67.81,27.26,23.11,20.69,43.23,54.49,40.35,58.75A69.31,69.31,0,0,1,361.9,878.86Z"
        color={base}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        path="M455.75,938.92a85.36,85.36,0,0,1-85.36-85.36,86.38,86.38,0,0,1,.44-8.71,69.31,69.31,0,0,0,96.31,93.29A85.67,85.67,0,0,1,455.75,938.92Z"
        color={shadow}
      />
      <Path
        path="M361.9,878.86a69.06,69.06,0,0,1,18.63-47.28c4.22-4.52,44.27,6.19,67.81,27.26,23.11,20.69,43.23,54.49,40.35,58.75A69.31,69.31,0,0,1,361.9,878.86Z"
        color="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        path="M401.89,848.39a83.45,83.45,0,0,1,20.25,6.87A84.36,84.36,0,0,1,440.28,867a106.06,106.06,0,0,1,14.65,15.71,100,100,0,0,1,11.18,18.17c-5.06-5-9.84-10.13-14.75-15.07s-9.84-9.8-15-14.26a154.79,154.79,0,0,0-16.53-12.18C414,855.57,408,852.06,401.89,848.39Z"
        color={colors.white}
      />
    </>
  )
}

export const hasBreasts = true
