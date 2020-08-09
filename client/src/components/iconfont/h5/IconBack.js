/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconBack = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M705.6 930.8c-6.2 0-12.5-1.9-18-5.8l-486-344.8c-8-5.7-12.8-14.7-13.1-24.5s4-19.1 11.6-25.2l485.7-390.4c13.4-10.8 33-8.6 43.8 4.8 10.8 13.4 8.6 33-4.8 43.8L271.2 553.3l452.4 321c14 10 17.3 29.4 7.4 43.5-6.1 8.5-15.7 13-25.4 13z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconBack.defaultProps = {
  size: 18,
};

export default IconBack;
