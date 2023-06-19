'use client'

import { useState } from 'react';
import style from './navigation.module.scss';
import items from './nav-items';

export default function Navigation({classNames}) {
  const [active, setActive] = useState('nav-4');

  // function handleClick() {
  //   //написать функцию переключения активного класса у элементов списка
  //   alert('You clicked me');
  // }
  
  const listItems = items.map(item => {
    return <li 
      key={item.id} 
      className={item.id === active ? `${style.nav__listItem} ${style.active}` : style.nav__listItem} 
      onClick={() => {setActive(active => active = item.id)}}>
        {item.icon}
        {item.name}
     </li>
  });
  return (
    <nav className={style.nav + ' ' + classNames}>
      <ul className={style.nav__list}>{listItems}</ul>
    </nav>
    
  );
}

