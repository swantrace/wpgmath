/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconSelectdefault = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M51.2 512C51.2 257.489455 257.512727 51.2 512 51.2c254.510545 0 460.8 206.312727 460.8 460.8 0 254.487273-206.312727 460.8-460.8 460.8C257.512727 972.8 51.2 766.487273 51.2 512zM0 512c0 282.763636 229.236364 512 512 512 282.763636 0 512-229.236364 512-512C1024 229.236364 794.763636 0 512 0 229.236364 0 0 229.236364 0 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSelectdefault.defaultProps = {
  size: 18,
};

export default IconSelectdefault;
