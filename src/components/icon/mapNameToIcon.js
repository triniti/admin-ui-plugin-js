import angleDoubleLeft from './angle-double-left.svg';
import angleDoubleRight from './angle-double-right.svg';
import angleLeft from './angle-left.svg';
import angleRight from './angle-right.svg';
import arrowLeft from './arrow-left.svg';
import back from './back.svg';
import circle from './circle.svg';
import close from './close.svg';
import cog from './cog.svg';
import deleteIcon from './delete.svg';
import eye from './eye.svg';
import menu from './menu.svg';
import moreVertical from './more-vertical.svg';
import save from './save.svg';
import search from './search.svg';
import sort from './sort.svg';
import user from './user.svg';

const icons = {
  'angle-double-left': angleDoubleLeft,
  'angle-double-right': angleDoubleRight,
  'angle-left': angleLeft,
  'angle-right': angleRight,
  'arrow-left': arrowLeft,
  back,
  circle,
  close,
  cog,
  delete: deleteIcon,
  eye,
  menu,
  'more-vertical': moreVertical,
  save,
  search,
  sort,
  user,
};

export default name => icons[name];
