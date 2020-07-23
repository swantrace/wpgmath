/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTravelholidayvacat = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 95.17056C370.4832 202.16832 339.41504 550.7584 339.41504 550.7584 398.09024 492.0832 512 493.44512 512 493.44512s113.90976-1.36192 172.58496 57.31328c0 0-31.06816-348.59008-172.58496-455.58784z"
        fill={getIconColor(color, 0, '#FEE36F')}
      />
      <path
        d="M512 95.17056S162.51904 87.40864 56.38144 500.28544c0 0 149.28896-78.9504 283.0336 50.47296 0 0 31.06816-348.59008 172.58496-455.58784z"
        fill={getIconColor(color, 1, '#3792CF')}
      />
      <path
        d="M512 95.17056s349.48096-7.76192 455.61856 405.11488c0 0-149.28896-78.9504-283.0336 50.47296 0 0-31.06816-348.59008-172.58496-455.58784z"
        fill={getIconColor(color, 2, '#F0566F')}
      />
      <path
        d="M512 95.17056s14.56128-0.31744 38.62528 2.67264c0.06144-0.89088 0.13312-1.77152 0.13312-2.67264a38.76864 38.76864 0 0 0-77.5168 0c0 0.90112 0.07168 1.78176 0.13312 2.67264C497.43872 94.85312 512 95.17056 512 95.17056z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
      <path
        d="M684.58496 555.93984a5.15072 5.15072 0 0 1-3.65568-1.51552c-56.45312-56.45312-167.8848-55.808-168.8576-55.79776-1.16736-0.03072-112.54784-0.63488-168.98048 55.79776a5.18144 5.18144 0 0 1-8.81664-4.12672c1.28-14.32576 32.90112-352.11264 174.61248-459.25376a5.19168 5.19168 0 0 1 6.2464 0c141.71136 107.15136 173.33248 444.928 174.61248 459.25376a5.1712 5.1712 0 0 1-5.16096 5.64224zM512 101.71392c-120.03328 94.96576-158.5664 371.87584-165.9904 436.11136 61.25568-50.19648 161.56672-49.62304 166.05184-49.5616 4.34176-0.07168 104.66304-0.63488 165.92896 49.5616-7.43424-64.23552-45.98784-341.15584-165.9904-436.11136z"
        fill={getIconColor(color, 4, '#136296')}
      />
      <path
        d="M339.41504 555.93984a5.18144 5.18144 0 0 1-3.60448-1.45408c-129.55648-125.37856-275.5584-50.39104-277.01248-49.62304a5.1712 5.1712 0 0 1-7.44448-5.86752c55.31648-215.18336 177.54112-314.94144 270.336-360.73472 100.59776-49.65376 186.76736-48.37376 190.4128-48.26112a5.19168 5.19168 0 0 1 3.01056 9.30816C377.0368 203.70432 344.8832 547.75808 344.576 551.2192a5.18144 5.18144 0 0 1-5.16096 4.72064z m-175.03232-84.30592c50.50368 0 112.0768 14.8992 170.92608 68.18816 6.26688-58.22464 41.68704-332.73856 161.59744-438.95808-29.05088 1.8432-96.73728 10.11712-171.0592 46.8992-89.16992 44.12416-206.20288 139.44832-261.6832 343.36768 17.01888-6.99392 53.97504-19.49696 100.21888-19.49696z"
        fill={getIconColor(color, 5, '#136296')}
      />
      <path
        d="M684.58496 555.93984a5.16096 5.16096 0 0 1-5.15072-4.72064c-0.3072-3.46112-32.49152-347.53536-170.5472-451.92192a5.19168 5.19168 0 0 1 3.01056-9.30816c3.6352-0.12288 89.79456-1.40288 190.4128 48.26112 92.79488 45.79328 215.01952 145.55136 270.336 360.73472a5.19168 5.19168 0 0 1-7.43424 5.86752c-1.46432-0.768-147.64032-75.5712-277.02272 49.62304a5.20192 5.20192 0 0 1-3.60448 1.46432zM527.09376 100.864c119.92064 106.22976 155.33056 380.76416 161.59744 438.95808 112.73216-102.07232 235.53024-63.31392 271.14496-48.70144-55.48032-203.90912-172.51328-299.23328-261.6832-343.36768-74.31168-36.77184-141.99808-45.04576-171.0592-46.88896z"
        fill={getIconColor(color, 6, '#136296')}
      />
      <path
        d="M473.37472 103.02464a5.20192 5.20192 0 0 1-5.16096-4.82304c-0.08192-1.21856-0.14336-2.11968-0.14336-3.03104 0-24.22784 19.712-43.93984 43.93984-43.93984s43.93984 19.712 43.93984 43.93984c0 0.91136-0.06144 1.80224-0.12288 2.70336a5.5808 5.5808 0 0 1-1.88416 3.80928 5.2736 5.2736 0 0 1-3.9424 1.31072c-23.32672-2.89792-37.74464-2.65216-37.87776-2.63168h-0.22528c-0.12288-0.01024-14.5408-0.26624-37.87776 2.63168l-0.64512 0.03072zM512 61.5936a33.61792 33.61792 0 0 0-33.4336 30.43328c19.90656-2.19136 32.0512-2.05824 33.4336-2.02752 1.40288-0.03072 13.54752-0.16384 33.4336 2.02752A33.61792 33.61792 0 0 0 512 61.5936z"
        fill={getIconColor(color, 7, '#136296')}
      />
      <path
        d="M627.18976 470.5792a5.19168 5.19168 0 0 1-2.6112-0.70656 106.4448 106.4448 0 0 0-11.0592-5.28384 5.18144 5.18144 0 0 1 4.03456-9.53344c7.89504 3.33824 12.09344 5.7856 12.26752 5.888a5.18144 5.18144 0 0 1-2.63168 9.63584zM593.32608 457.14432a5.2224 5.2224 0 0 1-1.46432-0.21504 251.648 251.648 0 0 0-22.4256-5.4784 5.18144 5.18144 0 1 1 2.00704-10.15808c7.9872 1.57696 15.84128 3.49184 23.3472 5.71392a5.1712 5.1712 0 0 1-1.46432 10.1376z m-163.05152-0.96256a5.19168 5.19168 0 0 1-1.4336-10.15808 234.53696 234.53696 0 0 1 23.47008-5.44768 5.1712 5.1712 0 1 1 1.8432 10.1888c-7.87456 1.42336-15.4112 3.1744-22.4256 5.21216a5.5296 5.5296 0 0 1-1.45408 0.2048z m116.8896-8.2432a5.57056 5.57056 0 0 1-0.58368-0.03072 303.52384 303.52384 0 0 0-23.11168-1.71008 5.18144 5.18144 0 0 1 0.36864-10.35264c8.05888 0.29696 16.09728 0.89088 23.90016 1.77152a5.18144 5.18144 0 0 1-0.57344 10.32192z m-70.59456-0.29696a5.18144 5.18144 0 0 1-0.50176-10.33216 360.18176 360.18176 0 0 1 23.8592-1.49504 5.19168 5.19168 0 0 1 0.31744 10.35264c-7.91552 0.23552-15.70816 0.72704-23.17312 1.45408a8.22272 8.22272 0 0 1-0.50176 0.02048zM396.81024 470.56896a5.1712 5.1712 0 0 1-3.1232-9.30816c0.16384-0.12288 4.096-3.04128 12.22656-6.81984a5.1712 5.1712 0 1 1 4.36224 9.39008c-7.02464 3.25632-10.35264 5.69344-10.3936 5.71392a5.05856 5.05856 0 0 1-3.072 1.024zM308.13184 477.696a5.18144 5.18144 0 0 1-3.49184-1.35168 123.12576 123.12576 0 0 0-9.6768-7.64928 5.18144 5.18144 0 1 1 6.07232-8.38656c6.7584 4.89472 10.4448 8.25344 10.58816 8.3968a5.1712 5.1712 0 0 1-3.49184 8.99072zM275.12832 455.39328a5.13024 5.13024 0 0 1-2.44736-0.6144 208.7936 208.7936 0 0 0-23.92064-10.98752 5.1712 5.1712 0 1 1 3.70688-9.66656c8.52992 3.2768 16.98816 7.15776 25.11872 11.54048a5.18144 5.18144 0 0 1-2.4576 9.728z m-50.2784-19.26144a4.92544 4.92544 0 0 1-1.20832-0.14336 188.1088 188.1088 0 0 0-25.89696-4.28032 5.18144 5.18144 0 0 1 0.96256-10.30144c9.10336 0.84992 18.29888 2.36544 27.33056 4.51584a5.18144 5.18144 0 0 1-1.18784 10.20928z m-80.35328-1.65888a5.18144 5.18144 0 0 1-0.99328-10.26048 196.28032 196.28032 0 0 1 27.50464-3.38944c2.6624-0.21504 5.28384 2.048 5.43744 4.90496a5.18144 5.18144 0 0 1-4.90496 5.43744c-8.6528 0.44032-17.408 1.52576-26.03008 3.21536a5.91872 5.91872 0 0 1-1.01376 0.09216zM106.20928 445.99296a5.18144 5.18144 0 0 1-1.95584-9.97376c4.12672-1.67936 8.30464-3.24608 12.42112-4.63872a5.16096 5.16096 0 1 1 3.31776 9.79968c-3.92192 1.3312-7.90528 2.82624-11.83744 4.42368a4.9664 4.9664 0 0 1-1.9456 0.38912zM715.86816 477.696a5.16096 5.16096 0 0 1-3.50208-8.99072c0.1536-0.14336 3.82976-3.50208 10.58816-8.3968a5.1712 5.1712 0 1 1 6.07232 8.38656c-6.22592 4.5056-9.64608 7.60832-9.6768 7.64928a5.08928 5.08928 0 0 1-3.4816 1.35168zM748.87168 455.39328a5.1712 5.1712 0 0 1-2.4576-9.73824 216.82176 216.82176 0 0 1 25.11872-11.54048 5.1712 5.1712 0 1 1 3.70688 9.66656 208.7936 208.7936 0 0 0-23.92064 10.98752 5.15072 5.15072 0 0 1-2.44736 0.62464z m50.2784-19.26144a5.1712 5.1712 0 0 1-1.18784-10.21952c9.03168-2.1504 18.2272-3.66592 27.33056-4.51584a5.18144 5.18144 0 0 1 0.96256 10.30144 188.1088 188.1088 0 0 0-25.89696 4.28032 4.5056 4.5056 0 0 1-1.20832 0.1536z m80.35328-1.65888a5.632 5.632 0 0 1-1.00352-0.09216 186.3168 186.3168 0 0 0-26.03008-3.21536 5.1712 5.1712 0 1 1 0.53248-10.3424c9.14432 0.47104 18.39104 1.60768 27.50464 3.38944a5.1712 5.1712 0 0 1-1.00352 10.26048zM917.79072 445.99296a5.08928 5.08928 0 0 1-1.95584-0.38912 208.46592 208.46592 0 0 0-11.83744-4.42368 5.18144 5.18144 0 0 1 3.31776-9.79968c4.11648 1.40288 8.2944 2.95936 12.42112 4.63872a5.1712 5.1712 0 0 1-1.9456 9.97376z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
      <path
        d="M967.61856 847.86176H56.38144a5.18144 5.18144 0 1 1 0-10.36288h911.24736a5.18144 5.18144 0 1 1-0.01024 10.36288z"
        fill={getIconColor(color, 9, '#136296')}
      />
      <path
        d="M74.496 885.61664h-18.1248a5.18144 5.18144 0 0 1 0.01024-10.36288h18.1248a5.18144 5.18144 0 1 1-0.01024 10.36288zM914.49344 885.61664h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-69.9904 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288zM967.61856 885.61664h-18.1248a5.18144 5.18144 0 1 1 0-10.36288h18.1248a5.18144 5.18144 0 1 1 0 10.36288z"
        fill={getIconColor(color, 10, '#136296')}
      />
      <path
        d="M82.26816 930.4576H56.38144a5.18144 5.18144 0 1 1 0-10.36288h25.88672a5.18144 5.18144 0 1 1 0 10.36288zM891.17696 930.4576h-50.55488a5.18144 5.18144 0 1 1 0-10.36288h50.55488a5.18144 5.18144 0 1 1 0 10.36288z m-101.10976 0h-50.55488a5.18144 5.18144 0 1 1 0-10.36288h50.55488a5.18144 5.18144 0 1 1 0 10.36288z m-101.12 0h-50.55488a5.18144 5.18144 0 1 1 0-10.36288h50.55488a5.18144 5.18144 0 1 1 0 10.36288z m-101.10976 0h-50.56512a5.18144 5.18144 0 1 1 0-10.36288h50.56512a5.18144 5.18144 0 1 1 0 10.36288z m-101.12 0h-50.55488a5.18144 5.18144 0 1 1 0-10.36288h50.55488a5.18144 5.18144 0 1 1 0 10.36288z m-101.10976 0H335.0528a5.18144 5.18144 0 1 1 0-10.36288h50.55488a5.18144 5.18144 0 1 1 0 10.36288z m-101.12 0h-50.55488a5.18144 5.18144 0 1 1 0-10.36288h50.55488a5.18144 5.18144 0 1 1 0 10.36288z m-101.10976 0h-50.55488a5.18144 5.18144 0 1 1 0-10.36288h50.55488a5.18144 5.18144 0 1 1 0 10.36288zM967.61856 930.4576h-25.88672a5.18144 5.18144 0 1 1 0-10.36288h25.88672a5.18144 5.18144 0 1 1 0 10.36288z"
        fill={getIconColor(color, 11, '#136296')}
      />
      <path
        d="M74.496 972.76928h-18.1248a5.18144 5.18144 0 0 1 0.01024-10.36288h18.1248a5.18144 5.18144 0 1 1-0.01024 10.36288zM914.49344 972.76928h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-69.9904 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288z m-70.00064 0h-35.00032a5.18144 5.18144 0 1 1 0-10.36288h35.00032a5.18144 5.18144 0 1 1 0 10.36288zM967.61856 972.76928h-18.1248a5.18144 5.18144 0 1 1 0-10.36288h18.1248a5.18144 5.18144 0 1 1 0 10.36288z"
        fill={getIconColor(color, 12, '#136296')}
      />
      <path
        d="M512 847.86176a5.18144 5.18144 0 0 1-5.18144-5.18144V493.44512a5.18144 5.18144 0 1 1 10.36288 0v349.2352a5.19168 5.19168 0 0 1-5.18144 5.18144z"
        fill={getIconColor(color, 13, '#136296')}
      />
    </svg>
  );
};

IconTravelholidayvacat.defaultProps = {
  size: 18,
};

export default IconTravelholidayvacat;