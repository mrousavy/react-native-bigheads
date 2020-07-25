import React from 'react'
import { G, Path } from 'react-native-svg'
import { useTheme } from '../../themeContext'
import { LeftLash } from './Lashes'
import { EyeProps } from './types'

export const Cyborg = ({ withLashes }: EyeProps) => {
  const { colors } = useTheme()

  return (
    <G>
      <Path
        d="M740.88 614.731C757.949 578.895 766.788 539.694 766.75 500H558V539.5L697 545V679.901C714.72 660.521 729.526 638.571 740.88 614.731Z"
        fill="#B0B0B0"
        stroke={colors.outline}
        strokeWidth="12"
      />
      <Path
        d="M766.75 500C766.75 372.599 677.432 266.055 558 239.574V500H766.75Z"
        fill="#696969"
        stroke={colors.outline}
        strokeWidth="12"
      />
      <Path
        d="M589 465H624.5"
        stroke="#3E3E3E"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <Path
        d="M589 444H624.5"
        stroke="#3E3E3E"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <Path
        d="M734 473C739.523 473 744 468.523 744 463C744 457.477 739.523 453 734 453C728.477 453 724 457.477 724 463C724 468.523 728.477 473 734 473Z"
        fill="#3E3E3E"
      />
      <Path
        d="M271.4 568.53C270.4 540.17 289.4 516.17 314.68 504.97C317.335 503.883 320.061 502.981 322.84 502.27C336.855 498.806 351.598 499.759 365.05 505C368.118 506.18 371.102 507.57 373.98 509.16C403.51 525.05 416.77 562.41 405.34 592.62C404.182 595.666 402.784 598.615 401.16 601.44C397.172 609.748 391.149 616.913 383.65 622.27C381.148 624.111 378.526 625.781 375.8 627.27C348.42 640.27 311.42 636.27 289.35 615.87C287.14 613.527 285.098 611.031 283.24 608.4C281.117 605.397 279.254 602.219 277.67 598.9C274.317 592.095 272.388 584.677 272 577.1C271.638 574.257 271.437 571.396 271.4 568.53V568.53Z"
        fill="#000000"
        fillOpacity="0.1"
      />
      <Path
        d="M269.77 550.18C268.77 521.82 287.77 497.82 313.05 486.62C315.701 485.533 318.424 484.631 321.2 483.92C335.213 480.438 349.96 481.374 363.42 486.6C366.485 487.78 369.466 489.17 372.34 490.76C401.87 506.65 415.13 544.02 403.7 574.22C402.55 577.269 401.152 580.219 399.52 583.04C398.138 585.749 396.564 588.356 394.81 590.84C393.081 593.302 391.183 595.641 389.13 597.84C386.91 600.037 384.53 602.066 382.01 603.91C379.51 605.753 376.887 607.424 374.16 608.91C346.78 621.91 309.78 617.91 287.72 597.52C285.509 595.174 283.467 592.674 281.61 590.04C279.484 587.037 277.618 583.859 276.03 580.54C272.667 573.761 270.724 566.366 270.32 558.81C269.962 555.947 269.778 553.065 269.77 550.18V550.18Z"
        fill="white"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M338.51 563.03C345.27 563.03 350.75 557.55 350.75 550.79C350.75 544.03 345.27 538.55 338.51 538.55C331.75 538.55 326.27 544.03 326.27 550.79C326.27 557.55 331.75 563.03 338.51 563.03Z"
        fill={colors.outline}
      />
      <Path
        d="M583.89 560.47C584.32 545.34 590.56 530.38 598.99 519.14C601.143 516.12 603.523 513.268 606.11 510.61C617.61 498.622 633.012 491.133 649.543 489.492C666.074 487.852 682.648 492.166 696.28 501.66C698.552 503.245 700.732 504.958 702.81 506.79C729.81 528.24 732.93 569.93 718.13 600.02C716.692 602.411 715.095 604.703 713.35 606.88C711.036 609.781 708.502 612.499 705.77 615.01C685.5 632.84 653.96 637.14 628.36 627.43C624.713 626.054 621.184 624.382 617.81 622.43C599.91 611.65 587.44 591.34 584.38 570.2C583.965 566.974 583.802 563.721 583.89 560.47V560.47Z"
        fill="#000000"
        fillOpacity="0.1"
      />
      <Path
        d="M589.38 549C589.8 534.85 595.8 520.85 603.9 510.34C605.984 507.506 608.277 504.832 610.76 502.34C622.01 491.101 636.819 484.123 652.648 482.602C668.478 481.08 684.344 485.11 697.53 494C699.712 495.477 701.809 497.076 703.81 498.79C729.81 518.86 732.81 557.86 718.55 586.01C717.168 588.255 715.631 590.4 713.95 592.43C711.717 595.146 709.28 597.686 706.66 600.03C687.15 616.71 656.8 620.74 632.17 611.65C628.656 610.346 625.255 608.758 622 606.9C604.78 596.82 592.78 577.82 589.83 558.05C589.437 555.05 589.287 552.024 589.38 549V549Z"
        fill="#F44336"
        stroke="#3E3E3E"
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M660 588C680.435 588 697 571.434 697 551C697 530.565 680.435 514 660 514C639.566 514 623 530.565 623 551C623 571.434 639.566 588 660 588Z"
        fill="#FF8D8D"
      />
      {withLashes && (
        <LeftLash />
      )}
    </G>
  )
}