import style from './page.module.scss';
import Sidebar from '../components/sidebar/sidebar';
import Main from '../components/main/main';

export default function App() {
  return (
    <div className={style.app}>
      <Sidebar />
      <Main />
    </div>
  )
}
