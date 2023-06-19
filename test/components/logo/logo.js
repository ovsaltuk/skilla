import style from './logo.module.scss';
import Image from 'next/image';
import src from '/components/logo/logo.png';
import Link from 'next/link'
 

export default function Logo({classNames}) {
  return (
    <Link href="/" className={style.logo + ' ' + classNames}>
      <Image
        src = {src} 
        alt = ''
        role = 'presentation'
        widt = '109'
        height = '28'
      />
    </Link>
    
  );
}