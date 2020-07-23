/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconContact = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M534.101529 489.933691l-7.71318-3.062183 6.547006-5.104944c48.630994-37.990641 76.533062-94.743759 76.533062-155.725233 0-109.232876-89.449019-198.102721-199.423471-198.102721s-199.443038 88.869845-199.443038 198.102721c0 60.965821 27.902067 117.720896 76.535019 155.725233l6.547006 5.104944-7.711223 3.062183c-128.486476 51.029868-211.515671 172.493867-211.515672 309.454667v67.616532c0 16.021187 13.129234 29.060414 29.256081 29.060414h612.640174c16.132717 0 29.254124-13.033357 29.254124-29.060414v-67.616532c0.01761-136.9608-83.007672-258.424799-211.505888-309.454667zM828.654222 624.632584c-19.116634 0-34.609521 15.492887-34.609521 34.607564 0 19.11272 15.494844 34.609521 34.609521 34.609521h142.744707v-69.215128h-142.744707zM759.102547 483.202758c-19.114677 0-34.607564 15.494844-34.607564 34.60952 0 19.114677 15.492887 34.605607 34.607564 34.605608h212.296382v-69.215128H759.102547zM703.509733 333.237951c-19.114677 0-34.609521 15.494844-34.609521 34.607564 0 19.116634 15.4968 34.609521 34.609521 34.609521h267.889196v-69.217085H703.509733z"
        fill={getIconColor(color, 0, '#3567B0')}
      />
    </Svg>
  );
};

IconContact.defaultProps = {
  size: 18,
};

export default IconContact;