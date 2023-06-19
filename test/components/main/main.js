import style from './main.module.scss';
import Header from '../header/header';

export default function Main() {
  return (
    <main className={style.main}>
      <Header />
    </main>
  )
};