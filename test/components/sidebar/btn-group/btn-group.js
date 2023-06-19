import style from './btn-group.module.scss';
import icons from '../../svg/icons';
import Btn from '../../btn/btn';

export default function BtnGroup() {
  return (
    <div className={style.btnGroup}>
      <Btn 
        classNames={style.btnGroup__btn}
        title = 'Добавить заказ'
        icon = {icons.plus}
      />
      <Btn 
        classNames={style.btnGroup__btn}
        title = 'Оплатить'
        icon = {icons.alert}
      />
    </div>
  );
}