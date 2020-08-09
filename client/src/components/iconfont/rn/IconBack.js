/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconBack = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M705.6 930.8c-6.2 0-12.5-1.9-18-5.8l-486-344.8c-8-5.7-12.8-14.7-13.1-24.5s4-19.1 11.6-25.2l485.7-390.4c13.4-10.8 33-8.6 43.8 4.8 10.8 13.4 8.6 33-4.8 43.8L271.2 553.3l452.4 321c14 10 17.3 29.4 7.4 43.5-6.1 8.5-15.7 13-25.4 13z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBack.defaultProps = {
  size: 18,
};

export default IconBack;
