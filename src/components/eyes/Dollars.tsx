import React from 'react'
import { G, Path } from '@shopify/react-native-skia'
import { useTheme } from '../../themeContext'
import { RightLash, LeftLash } from './Lashes'
import { EyeProps } from './types'

export const Dollars = ({ withLashes }: EyeProps) => {
  const { colors } = useTheme()

  return (
    <G>
      <Path
        path="M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z"
        color="black"
        fillOpacity="0.1"
      />
      <Path
        path="M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.616 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z"
        color="white"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        path="M586.888 571.466C587.318 556.336 593.558 541.376 601.988 530.136C604.14 527.116 606.521 524.264 609.108 521.606C620.608 509.618 636.01 502.13 652.541 500.489C669.072 498.848 685.646 503.163 699.278 512.656C701.55 514.242 703.73 515.954 705.808 517.786C732.808 539.236 735.928 580.926 721.128 611.016C719.69 613.408 718.093 615.699 716.348 617.876C714.034 620.777 711.5 623.496 708.768 626.006C688.498 643.836 656.958 648.136 631.358 638.426C627.71 637.051 624.182 635.378 620.808 633.426C602.908 622.646 590.438 602.336 587.378 581.196C586.963 577.971 586.8 574.717 586.888 571.466Z"
        color="black"
        fillOpacity="0.1"
      />
      <Path
        path="M592.378 559.996C592.798 545.846 598.798 531.846 606.898 521.336C608.982 518.502 611.275 515.828 613.758 513.336C625.009 502.097 639.817 495.12 655.646 493.598C671.476 492.077 687.342 496.106 700.528 504.996C702.71 506.473 704.807 508.073 706.808 509.786C732.808 529.856 735.808 568.856 721.548 597.006C720.166 599.251 718.629 601.396 716.948 603.426C714.715 606.142 712.278 608.683 709.658 611.026C690.148 627.706 659.798 631.736 635.168 622.646C631.654 621.343 628.253 619.754 624.998 617.896C607.778 607.816 595.778 588.816 592.828 569.046C592.435 566.047 592.285 563.02 592.378 559.996Z"
        color="white"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        path="M366 574.928C366 559.556 350.057 555.277 337.836 549.515C330.414 545.645 331.35 536.407 341.986 535.784C347.886 535.426 353.95 537.181 359.436 539.116L362.021 527.313C355.543 525.335 349.743 524.432 344.571 524.296V517H337.429V524.647C323.536 526.56 316.114 535.304 316.114 545.072C316.114 562.544 336.45 565.21 343.1 568.313C352.171 572.384 350.493 580.855 342.286 582.726C335.164 584.345 326.079 581.521 319.25 578.855L316 590.637C322.386 593.949 330.036 595.712 337.429 595.848V603H344.571V595.454C356.407 593.791 366.014 587.241 366 574.928Z"
        color="#388E3C"
      />
      <Path
        path="M689 574.928C689 559.556 673.057 555.277 660.836 549.515C653.414 545.645 654.35 536.407 664.986 535.784C670.886 535.426 676.95 537.181 682.436 539.116L685.021 527.313C678.543 525.335 672.743 524.432 667.571 524.296V517H660.429V524.647C646.536 526.56 639.114 535.304 639.114 545.072C639.114 562.544 659.45 565.21 666.1 568.313C675.171 572.384 673.493 580.855 665.286 582.726C658.164 584.345 649.079 581.521 642.25 578.855L639 590.637C645.386 593.949 653.036 595.712 660.429 595.848V603H667.571V595.454C679.407 593.791 689.014 587.241 689 574.928Z"
        color="#388E3C"
      />
      {withLashes && (
        <G>
          <LeftLash />
          <RightLash />
        </G>
      )}
    </G>
  )
}
