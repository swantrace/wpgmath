/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconEditLocation = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 85.333333c-164.693333 0-298.666667 133.973333-298.666667 298.666667 0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667c0-164.693333-133.973333-298.666667-298.666667-298.666667z m-66.56 426.666667H384v-61.44l142.933333-142.506667 61.013334 61.013334-142.506667 142.933333z m189.866667-189.866667l-29.866667 29.866667-61.44-61.44 29.866667-29.866667c6.4-6.4 16.64-6.4 23.04 0l38.4 38.4c6.4 6.4 6.4 16.64 0 23.04z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconEditLocation.defaultProps = {
  size: 18,
};

export default IconEditLocation;
