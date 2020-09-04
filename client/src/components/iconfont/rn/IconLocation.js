/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconLocation = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 516c-108.248 0-196-87.752-196-196s87.752-196 196-196 196 87.752 196 196-87.752 196-196 196zM388 320c0-68.484 55.516-124 124-124s124 55.516 124 124c0 68.484-55.518 124-124 124s-124-55.516-124-124z"
        fill={getIconColor(color, 0, '#DE1F26')}
      />
    </Svg>
  );
};

IconLocation.defaultProps = {
  size: 18,
};

export default IconLocation;
