import './style.css'
import {TextComponentType} from '../../../types'

const TextComponant = (props:TextComponentType) => {
    return (
        <>
        <div className='fullDisplay'>
        <div className="mainComponant" > 
        <h1 className="mainTitle">{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="bio">{props.info}</p>
        {
          props.source.map((item)=>(
          <a href={item.link} className="source">{item.text}</a>
          ))
        }
        </div>
        </div>
        </>
      )
    }
export default TextComponant