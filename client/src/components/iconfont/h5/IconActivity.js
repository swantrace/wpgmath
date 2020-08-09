/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconActivity = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M350.315789 449.122807h-179.649122l-14.695299 161.684211h209.03972zM134.736842 844.350877h251.508772l-11.425684-125.754386H146.162526z"
        fill={getIconColor(color, 0, '#F9EAB0')}
      />
      <path
        d="M152.701754 646.736842l-3.269614 35.929825h222.118176l-3.269614-35.929825z"
        fill={getIconColor(color, 1, '#FBD490')}
      />
      <path
        d="M146.162526 718.596491h228.657404l-3.269614-35.929824H149.43214zM365.011088 610.807018H155.971368L152.701754 646.736842h215.578948z"
        fill={getIconColor(color, 2, '#D6C990')}
      />
      <path
        d="M853.333333 359.298246h-215.578947c-19.761404 0-35.929825-16.168421-35.929825-35.929825s16.168421-35.929825 35.929825-35.929825h215.578947c19.761404 0 35.929825 16.168421 35.929825 35.929825s-16.168421 35.929825-35.929825 35.929825z"
        fill={getIconColor(color, 3, '#38454F')}
      />
      <path
        d="M343.632842 53.894737H314.385965V24.64786C314.385965 11.030456 303.355509 0 289.738105 0h-58.475789C217.626947 0 206.596491 11.030456 206.596491 24.64786V53.894737H177.349614C163.732211 53.894737 152.701754 64.925193 152.701754 78.542596v40.510878C152.701754 132.688842 163.732211 143.719298 177.349614 143.719298H206.596491v53.894737h107.789474V143.719298h29.246877c13.617404 0 24.64786-11.030456 24.64786-24.647859V78.542596C368.280702 64.925193 357.250246 53.894737 343.632842 53.894737z"
        fill={getIconColor(color, 4, '#FBD490')}
      />
      <path
        d="M368.280702 359.298246h-215.578948l-28.689965-129.113825A26.767719 26.767719 0 0 1 150.132772 197.614035h220.716912a26.767719 26.767719 0 0 1 26.120983 32.570386L368.280702 359.298246z"
        fill={getIconColor(color, 5, '#F9EAB0')}
      />
      <path
        d="M871.298246 844.350877h-251.508772l35.929824-395.22807h179.649123z"
        fill={getIconColor(color, 6, '#1296db')}
      />
      <path
        d="M853.333333 952.140351h-215.578947a53.894737 53.894737 0 1 1 0-107.789474h215.578947a53.894737 53.894737 0 1 1 0 107.789474z"
        fill={getIconColor(color, 7, '#546A79')}
      />
      <path
        d="M925.192982 1024h-359.298245a35.929825 35.929825 0 1 1 0-71.859649h359.298245a35.929825 35.929825 0 1 1 0 71.859649z"
        fill={getIconColor(color, 8, '#38454F')}
      />
      <path
        d="M862.315789 449.122807H628.77193a44.912281 44.912281 0 1 1 0-89.824561h233.543859a44.912281 44.912281 0 1 1 0 89.824561z"
        fill={getIconColor(color, 9, '#546A79')}
      />
      <path
        d="M377.263158 449.122807H143.719298a44.912281 44.912281 0 1 1 0-89.824561h233.54386a44.912281 44.912281 0 1 1 0 89.824561zM368.280702 952.140351h-215.578948a53.894737 53.894737 0 1 1 0-107.789474h215.578948a53.894737 53.894737 0 1 1 0 107.789474z"
        fill={getIconColor(color, 10, '#FBD490')}
      />
      <path
        d="M440.140351 1024h-359.298246a35.929825 35.929825 0 1 1 0-71.859649h359.298246a35.929825 35.929825 0 1 1 0 71.859649z"
        fill={getIconColor(color, 11, '#F9EAB0')}
      />
      <path
        d="M907.22807 89.824561l-51.110175 85.17165a9.557333 9.557333 0 0 1-8.209965 4.652912H793.150877a9.593263 9.593263 0 0 1-9.395649-11.461614L799.438596 89.824561h-107.789473l15.665403 78.362948a9.575298 9.575298 0 0 1-9.377684 11.461614h-54.757053a9.557333 9.557333 0 0 1-8.209964-4.652912L583.859649 89.824561h-71.859649l89.824561 197.614035h287.438597l89.824561-197.614035h-71.859649z"
        fill={getIconColor(color, 12, '#1296db')}
      />
    </svg>
  );
};

IconActivity.defaultProps = {
  size: 18,
};

export default IconActivity;