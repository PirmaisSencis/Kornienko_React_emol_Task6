import './style.css'
const TextComponant = ()=> {
    return (
        <>
        <div className="mainComponant">
        <h1 className="mainTitle">Sunsetting Create React App</h1>
        <p className="date">February 13,2025</p>
        <p className="bio">Today, we're deprecating Create React App for new apps, and encouraging existing apps to migrate to a framework, or to migrate to a build tool like Vite, Parcel, or RSBulld. We're also providing docs for when a framework isn't a good fit for your project, you want to build your own framework, or you just want to learn how React works by building a React app from scratch...</p>
        <a href="/" className="source">read more</a>
        </div>
        </>
      )
    }
export default TextComponant