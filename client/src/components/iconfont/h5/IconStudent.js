/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconStudent = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M682.666667 1002.666667H213.333333V789.333333a170.666667 170.666667 0 0 1 170.666667-170.666666 85.333333 85.333333 0 0 0 85.333333 85.333333c23.68 0 42.666667-28.586667 42.666667-64 0 35.413333 18.986667 64 42.666667 64a85.333333 85.333333 0 0 0 85.333333-85.333333 170.666667 170.666667 0 0 1 170.666667 170.666666v213.333334z"
        fill={getIconColor(color, 0, '#FFCA6B')}
      />
      <path
        d="M576 618.666667h64a85.333333 85.333333 0 0 1-85.333333 85.333333c-23.68 0-42.666667-28.586667-42.666667-64a64 64 0 0 0 64-64zM512 640c0 35.413333-18.986667 64-42.666667 64a85.333333 85.333333 0 0 1-85.333333-85.333333h64v-42.666667a64 64 0 0 0 64 64z"
        fill={getIconColor(color, 1, '#F3596B')}
      />
      <path
        d="M341.333333 362.666667a172.8 172.8 0 0 0 1.28 21.12L341.333333 384h-21.333333a42.666667 42.666667 0 0 1 0-85.333333h21.333333zM448 576v-55.04a171.712 171.712 0 0 0 128 0V576a64 64 0 0 1-128 0zM746.666667 341.333333a42.794667 42.794667 0 0 1-42.666667 42.666667h-21.333333l-1.28-0.213333A172.8 172.8 0 0 0 682.666667 362.666667v-64h21.333333a42.794667 42.794667 0 0 1 42.666667 42.666666z"
        fill={getIconColor(color, 2, '#F2CAC1')}
      />
      <path
        d="M576 520.96a171.712 171.712 0 0 1-128 0 170.666667 170.666667 0 0 1-105.386667-137.173333A172.8 172.8 0 0 1 341.333333 362.666667v-85.333334h21.333334c106.666667 0 149.333333-149.333333 149.333333-149.333333s42.666667 149.333333 149.333333 149.333333h21.333334v85.333334a170.453333 170.453333 0 0 1-106.666667 158.293333z"
        fill={getIconColor(color, 3, '#F2CAC1')}
      />
      <path
        d="M682.666667 384s213.333333 0 213.333333 213.333333c0 0-213.333333 0-213.333333-213.333333zM128 597.333333c0-213.333333 213.333333-213.333333 213.333333-213.333333C341.333333 597.333333 128 597.333333 128 597.333333zM704 213.333333v64h-42.666667c-106.666667 0-149.333333-149.333333-149.333333-149.333333s-42.666667 149.333333-149.333333 149.333333h-42.666667v-64a192 192 0 0 1 384 0z"
        fill={getIconColor(color, 4, '#7C8691')}
      />
      <path
        d="M661.333333 853.333333h42.666667v149.333334h-42.666667zM320 853.333333h42.666667v149.333334h-42.666667zM490.666667 789.333333h42.666666v42.666667h-42.666666zM490.666667 874.666667h42.666666v42.666666h-42.666666z"
        fill={getIconColor(color, 5, '#2A3244')}
      />
      <path
        d="M810.666667 1024H213.333333a21.333333 21.333333 0 0 1-21.333333-21.333333V789.333333a192.234667 192.234667 0 0 1 192-192h42.666667v-85.333333h42.666666v106.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-64a149.504 149.504 0 0 0-149.333333 149.333333v192h554.666666v-192a149.504 149.504 0 0 0-149.333333-149.333333h-64a21.333333 21.333333 0 0 1-21.333333-21.333333v-106.666667h42.666666v85.333333h42.666667a192.234667 192.234667 0 0 1 192 192v213.333334a21.333333 21.333333 0 0 1-21.333333 21.333333zM704 298.666667h-21.333333v-85.333334a170.666667 170.666667 0 0 0-341.333334 0v85.333334h-21.333333a21.333333 21.333333 0 0 1-21.333333-21.333334v-64a213.333333 213.333333 0 0 1 426.666666 0v64a21.333333 21.333333 0 0 1-21.333333 21.333334z"
        fill={getIconColor(color, 6, '#DE1F26')}
      />
      <path
        d="M512 554.666667a192.234667 192.234667 0 0 1-192-192v-85.333334a21.333333 21.333333 0 0 1 21.333333-21.333333h21.333334c89.6 0 128.448-132.522667 128.832-133.866667A21.333333 21.333333 0 0 1 512 106.666667a21.333333 21.333333 0 0 1 20.501333 15.445333C532.885333 123.456 572.16 256 661.333333 256h21.333334a21.333333 21.333333 0 0 1 21.333333 21.333333v85.333334a192.234667 192.234667 0 0 1-192 192z m-149.333333-256v64a149.333333 149.333333 0 0 0 298.666666 0v-64c-78.016 0-125.12-65.322667-149.333333-113.770667C487.786667 233.344 440.682667 298.666667 362.666667 298.666667z"
        fill={getIconColor(color, 7, '#2A3244')}
      />
      <path
        d="M704 405.333333h-21.333333v-42.666666h21.333333a21.333333 21.333333 0 0 0 0-42.666667h-21.333333v-42.666667h21.333333a64 64 0 0 1 0 128zM341.333333 405.333333h-21.333333a64 64 0 0 1 0-128h21.333333v42.666667h-21.333333a21.333333 21.333333 0 0 0 0 42.666667h21.333333z"
        fill={getIconColor(color, 8, '#2A3244')}
      />
      <path
        d="M896 618.666667c-2.346667 0-234.666667-2.688-234.666667-234.666667a21.333333 21.333333 0 0 1 21.333334-21.333333c2.346667 0 234.666667 2.688 234.666666 234.666666a21.333333 21.333333 0 0 1-21.333333 21.333334z m-191.061333-211.669334c11.349333 132.757333 120.661333 161.258667 168.789333 167.338667-11.349333-132.736-120.661333-161.258667-168.789333-167.338667zM128 618.666667a21.333333 21.333333 0 0 1-21.333333-21.333334c0-231.978667 232.32-234.666667 234.666666-234.666666a21.333333 21.333333 0 0 1 21.333334 21.333333C362.666667 615.978667 130.346667 618.666667 128 618.666667z m191.04-211.584c-48.106667 6.272-157.312 35.114667-168.746667 167.168 48.106667-6.293333 157.312-35.136 168.746667-167.168zM512 661.333333a85.333333 85.333333 0 0 1-85.333333-85.333333h42.666666a42.666667 42.666667 0 0 0 85.333334 0h42.666666a85.333333 85.333333 0 0 1-85.333333 85.333333z"
        fill={getIconColor(color, 9, '#DE1F26')}
      />
      <path
        d="M554.666667 725.333333c-35.882667 0-64-37.482667-64-85.333333h42.666666c0 26.048 12.629333 42.666667 21.333334 42.666667a64 64 0 0 0 64-64h42.666666a106.794667 106.794667 0 0 1-106.666666 106.666666z"
        fill={getIconColor(color, 10, '#2A3244')}
      />
      <path
        d="M469.333333 725.333333a106.794667 106.794667 0 0 1-106.666666-106.666666h42.666666a64 64 0 0 0 64 64c8.704 0 21.333333-16.618667 21.333334-42.666667h42.666666c0 47.850667-28.117333 85.333333-64 85.333333z"
        fill={getIconColor(color, 11, '#2A3244')}
      />
    </svg>
  );
};

IconStudent.defaultProps = {
  size: 18,
};

export default IconStudent;