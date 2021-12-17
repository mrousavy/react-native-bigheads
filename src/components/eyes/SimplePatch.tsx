import React from 'react'
import { G, Path } from '@shopify/react-native-skia'
import { useTheme } from '../../themeContext'
import { LeftLash } from './Lashes'
import { EyeProps } from './types'

export const SimplePatch = ({ withLashes }: EyeProps) => {
  const { colors } = useTheme()

  return (
    <G>
      <Path
        path="M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z"
        color="black"
        fillOpacity="0.1"
      />
      <Path
        path="M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.615 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z"
        color="white"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        path="M341.508 574.026C348.268 574.026 353.748 568.546 353.748 561.786C353.748 555.026 348.268 549.546 341.508 549.546C334.748 549.546 329.268 555.026 329.268 561.786C329.268 568.546 334.748 574.026 341.508 574.026Z"
        color={colors.outline}
      />
      <Path
        path="M731.448 624.107C748.517 588.27 761.013 550.606 760.975 510.912C665.554 510.912 481.792 372.529 399.803 261.356C380.482 268.67 361.205 277.483 345.96 289.712C416.152 428.074 596.844 662.23 704.176 662.23C712.317 651.235 725.299 637.019 731.448 624.107Z"
        color="black"
        fillOpacity="0.1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        path="M345.96 289.712C361.205 277.483 380.482 268.67 399.803 261.356C481.792 372.529 665.554 510.912 760.975 510.912C761.013 550.606 748.517 588.27 731.448 624.107C725.299 637.019 712.317 651.235 704.176 662.23C596.844 662.23 416.152 428.074 345.96 289.712Z"
        color="black"
        fillOpacity="0.1"
      />
      <Path
        path="M740.88 614.731C757.949 578.895 766.788 539.694 766.75 500C671.329 500 487.568 361.617 405.578 250.444C386.258 257.758 368.008 267.251 351.13 278.624C421.322 416.986 612.148 651.695 719.48 651.695C727.569 640 734.731 627.643 740.88 614.731Z"
        color="#633749"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        path="M351.13 278.624C368.008 267.251 386.258 257.758 405.578 250.444C487.568 361.617 671.329 500 766.75 500C766.788 539.694 757.949 578.895 740.88 614.731C734.731 627.643 727.569 640 719.48 651.695C612.148 651.695 421.322 416.986 351.13 278.624Z"
        color="#633749"
      />
      <Path
        path="M740.88 614.731C757.949 578.895 766.788 539.694 766.75 500C671.329 500 487.568 361.617 405.578 250.444C386.258 257.758 368.008 267.251 351.13 278.624C421.322 416.986 612.148 651.695 719.48 651.695C727.569 640 734.731 627.643 740.88 614.731Z"
        color="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        path="M351.13 278.624C368.008 267.251 386.258 257.758 405.578 250.444C487.568 361.617 671.329 500 766.75 500C766.788 539.694 757.949 578.895 740.88 614.731C734.731 627.643 727.569 640 719.48 651.695C612.148 651.695 421.322 416.986 351.13 278.624Z"
        color="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      {withLashes && <LeftLash />}
    </G>
  )
}
