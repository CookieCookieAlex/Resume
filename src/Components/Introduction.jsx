import photo from '../public/lm.jpg';
import { ResumeData } from '../ResumeData.js';

export default function Introduction() {
    return (
        <>
            <div>
                {ResumeData.aboutMe.map((item, index) => (
                    <section className="introduction" key={index}>
                        <h1 className='textupper'>Hi, I'm <br /> {item.title}</h1>
                        <img src={photo} alt="Leonardo Miscevic" className="photo" id='cover-photo' />
                        <h2 className='textlower'>FRONT-END <br />DEVELOPER</h2>
                        <hr />
                    </section>
                ))}
            </div>
        </>
    );
}

//this contains only the introduction part to the website