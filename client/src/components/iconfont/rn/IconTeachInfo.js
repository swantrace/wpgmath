/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconTeachInfo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M921.6 0H102.4A102.72 102.72 0 0 0 0 102.4v819.2C0 977.92 46.08 1024 102.4 1024h819.2c56.32 0 102.4-46.08 102.4-102.4V102.4C1024 46.08 977.92 0 921.6 0z m51.2 921.6c0 25.6-20.48 51.2-51.2 51.2H102.4c-25.6 0-51.2-20.48-51.2-51.2V102.4c0-25.6 20.48-51.2 51.2-51.2h819.2c25.6 0 51.2 20.48 51.2 51.2v819.2zM153.6 870.4h409.6V307.2H153.6v563.2z m51.2-512H512v460.8H204.8V358.4z m409.6 512h256V307.2h-256v563.2z m51.2-512h153.6v460.8h-153.6V358.4z m-512-204.8h716.8v51.2H153.6V153.6z"
        fill={getIconColor(color, 0, '#3567B0')}
      />
    </Svg>
  );
};

IconTeachInfo.defaultProps = {
  size: 18,
};

export default IconTeachInfo;
