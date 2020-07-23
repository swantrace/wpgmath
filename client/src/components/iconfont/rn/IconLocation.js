/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconLocation = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.786667 0C238.72 0 142.72 206.506667 142.72 337.066667c0 139.093333 25.173333 189.013333 333.653333 667.306666a42.666667 42.666667 0 0 0 70.826667 0C855.68 526.08 880.853333 476.586667 880.853333 337.066667 881.28 206.506667 784.853333 0 511.786667 0z"
        fill={getIconColor(color, 0, '#6DD143')}
      />
      <Path
        d="M469.12 384m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 1, '#65C134')}
      />
      <Path
        d="M511.786667 341.333333m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#C3FF08')}
      />
    </Svg>
  );
};

IconLocation.defaultProps = {
  size: 18,
};

export default IconLocation;