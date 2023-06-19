import style from './btn.module.scss';

export default function Btn(props) {
  return(
    <button className={`${style.btn} ${props.classNames}`}>
      <span>{props.title}</span>
       {props.icon}
    </button>
  )
}