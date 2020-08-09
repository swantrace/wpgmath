/* eslint-disable */


import IconBack from './IconBack';
import IconDizhidingwei from './IconDizhidingwei';
import IconActivity from './IconActivity';
import IconArrowright from './IconArrowright';
import IconArrowleft from './IconArrowleft';
import IconTeachInfo from './IconTeachInfo';
import IconTravelholidayvacat from './IconTravelholidayvacat';
import IconLocation from './IconLocation';
import IconLishi from './IconLishi';
import IconContact from './IconContact';
import IconArrowdown from './IconArrowdown';
import IconHome from './IconHome';
import IconSchedule from './IconSchedule';
import IconQuestion from './IconQuestion';
import IconShoucex from './IconShoucex';
import IconVideo from './IconVideo';
import IconShare from './IconShare';
import IconStudent from './IconStudent';
import IconCustomTeacher from './IconCustomTeacher';
import IconSelectdefault from './IconSelectdefault';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'back':
      return <IconBack {...rest} />;
    case 'dizhidingwei':
      return <IconDizhidingwei {...rest} />;
    case 'activity':
      return <IconActivity {...rest} />;
    case 'Arrowright':
      return <IconArrowright {...rest} />;
    case 'Arrowleft':
      return <IconArrowleft {...rest} />;
    case 'teach-info':
      return <IconTeachInfo {...rest} />;
    case 'travelholidayvacat':
      return <IconTravelholidayvacat {...rest} />;
    case 'location':
      return <IconLocation {...rest} />;
    case 'lishi':
      return <IconLishi {...rest} />;
    case 'contact':
      return <IconContact {...rest} />;
    case 'Arrowdown':
      return <IconArrowdown {...rest} />;
    case 'home':
      return <IconHome {...rest} />;
    case 'SCHEDULE':
      return <IconSchedule {...rest} />;
    case 'question':
      return <IconQuestion {...rest} />;
    case 'shoucex':
      return <IconShoucex {...rest} />;
    case 'video':
      return <IconVideo {...rest} />;
    case 'Share':
      return <IconShare {...rest} />;
    case 'student':
      return <IconStudent {...rest} />;
    case 'custom-teacher':
      return <IconCustomTeacher {...rest} />;
    case 'selectdefault':
      return <IconSelectdefault {...rest} />;
  }

  return null;
};

export default IconFont;
