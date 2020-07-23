/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconHome = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M950.153231 461.510311l-122.16073-111.794026-1.27984-1.087864 0-136.87889c0-10.110736-8.190976-18.365704-18.365704-18.365704l-82.549681 0c-10.110736 0-18.365704 8.190976-18.365704 18.365704l0 35.835521-5.11936-4.351456-150.829146-134.255218c-0.63992-0.575928-1.343832-1.023872-1.983752-1.471816-11.070616-8.766904-24.060992-13.43832-37.563305-13.43832-14.07824 0-27.51656 4.991376-38.971129 14.526184-0.127984 0.191976-0.31996 0.383952-0.511936 0.447944l-398.670166 352.595926c-10.55868 9.086864-12.926384 26.428696-5.247344 38.907137 7.67904 12.414448 22.525184 15.230096 33.083865 6.207224l398.350206-352.40395c0.063992 0 0.191976-0.127984 0.255968-0.191976C503.68104 151.149106 507.712536 149.613298 512 149.613298s8.31896 1.535808 11.710536 4.415448c0.191976 0.127984 0.383952 0.255968 0.575928 0.383952l398.094238 352.211974c10.55868 9.022872 25.404824 6.271216 33.083865-6.207224C963.079615 487.939008 960.775903 470.597175 950.153231 461.510311z"
        fill={getIconColor(color, 0, '#3567B0')}
      />
      <path
        d="M543.868016 271.1981c0-0.063992-0.127984-0.127984-0.191976-0.191976-9.342832-7.807024-20.349456-11.966504-31.740032-12.030496-11.390576 0-22.333208 4.15948-31.67604 11.902512-0.063992 0.127984-0.191976 0.191976-0.31996 0.31996l-276.189476 247.969004c-6.207224 5.311336-9.790776 13.694288-9.790776 22.525184l0.191976 328.598925c0 32.955881 26.748656 59.704537 59.704537 59.704537l156.780402 0 0-204.198475c0-41.338833 28.412448-74.742657 63.480065-74.742657l65.911761 0c35.067617 0 63.544057 33.403825 63.544057 74.742657l0 204.198475 166.315211 0c32.955881 0 59.704537-26.748656 59.704537-59.704537l0.255968-328.598925c0-8.830896-3.647544-17.213848-9.790776-22.525184L543.868016 271.1981z"
        fill={getIconColor(color, 1, '#3567B0')}
      />
    </svg>
  );
};

IconHome.defaultProps = {
  size: 18,
};

export default IconHome;
