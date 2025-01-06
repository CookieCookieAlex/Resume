import photo from '../assets/leonardo-miscevic.jpg'

export default function Introduction() {
    return (
        <section className="introduction">
            <h1 className='textupper'>Hi, I'm <br /> Leonardo Miščević</h1>
            <img src={photo} alt="Leonardo Miscevic" className="photo" id='cover-photo' />
            <h2 className='textlower'>FRONT-END <br />DEVELOPER</h2>
            <hr />
        </section>
    )
}
