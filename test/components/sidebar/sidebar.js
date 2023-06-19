import style from './sidebar.module.scss';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import BtnGroup from './btn-group/btn-group';

export default function Sidebar () {
  return(
    <aside className={style.sidebar}>
      <Logo classNames={style.sidebar__logo}/>
      <Navigation classNames={style.sidebar__nav}/>
      <BtnGroup />
    </aside>
  )
}