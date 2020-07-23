/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconVideo = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M80 34.4h864v960H80z"
        fill={getIconColor(color, 0, '#8095FF')}
      />
      <path
        d="M176 112m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <path
        d="M176 272m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <path
        d="M176 432m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
      <path
        d="M176 592m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <path
        d="M176 752m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
      <path
        d="M176 912m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 6, '#FFFFFF')}
      />
      <path
        d="M864 112m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <path
        d="M864 272m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
      <path
        d="M864 432m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
      <path
        d="M864 592m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 10, '#FFFFFF')}
      />
      <path
        d="M864 752m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 11, '#FFFFFF')}
      />
      <path
        d="M864 912m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 12, '#FFFFFF')}
      />
      <path
        d="M648 508L436 362.4c-4.8-3.2-11.2-4-16.8-0.8-5.6 3.2-8.8 8.8-8.8 14.4v290.4c0 5.6 3.2 11.2 8.8 14.4 5.6 3.2 12 2.4 16.8-0.8L648 533.6c4.8-2.4 7.2-8 7.2-12.8 0-4.8-3.2-9.6-7.2-12.8z"
        fill={getIconColor(color, 13, '#FFFFFF')}
      />
    </svg>
  );
};

IconVideo.defaultProps = {
  size: 18,
};

export default IconVideo;
