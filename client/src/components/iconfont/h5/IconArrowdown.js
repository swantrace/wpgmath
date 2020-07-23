/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconArrowdown = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512.853333 955.733333a17.015467 17.015467 0 0 1-12.066133-5.000533l-342.186667-342.186667A17.066667 17.066667 0 0 1 170.666667 579.413333h153.6V168.96c0.682667-27.460267 10.615467-51.131733 29.525333-70.724267C373.828267 78.882133 397.499733 68.949333 424.533333 68.266667H600.746667c27.016533 0.682667 50.158933 10.683733 69.239466 29.7472 16.896 16.878933 26.862933 36.590933 29.610667 58.589866 0.648533 4.488533 0.989867 9.284267 0.989867 14.062934 0 4.317867-0.290133 8.9088-0.853334 13.824V580.266667h154.453334a17.0496 17.0496 0 0 1 12.066133 29.1328l-341.333333 341.333333a17.015467 17.015467 0 0 1-12.066134 5.000533zM211.8656 613.546667L512.853333 914.5344 812.987733 614.4H682.666667a17.066667 17.066667 0 0 1-17.066667-17.066667V183.466667c0-0.699733 0.0512-1.416533 0.136533-2.116267 0.4608-3.805867 0.7168-7.3728 0.7168-10.683733 0-3.1744-0.238933-6.365867-0.682666-9.557334-1.8432-14.762667-8.3456-27.409067-19.9168-38.9632-12.8512-12.834133-27.7504-19.3024-45.533867-19.746133H424.96c-18.056533 0.4608-33.570133 6.980267-47.018667 19.968-12.561067 13.021867-19.080533 28.535467-19.541333 47.018667V596.48a17.066667 17.066667 0 0 1-17.066667 17.066667h-129.467733z"
        fill={getIconColor(color, 0, '#1296db')}
      />
    </svg>
  );
};

IconArrowdown.defaultProps = {
  size: 18,
};

export default IconArrowdown;
