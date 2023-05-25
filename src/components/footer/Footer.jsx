import logo from '../../assets/logo.png'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.container}>
        <div className={style.row}>
          <div></div>
          <img className={style.img} src={logo} alt="" />
          <div></div>
          @LucasAraujo639
        </div>
    </div>
  )
}

export default Footer