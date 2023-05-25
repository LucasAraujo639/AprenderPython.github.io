import style from './Card.module.css'
export const Card = ({title, body}) => {
  return (
    <div>
        <h3>{title}</h3>
        <div className={style.box}>
          {body}
          </div>
    </div>
  )
}
