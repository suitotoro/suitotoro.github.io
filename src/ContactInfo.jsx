import './ContactInfo.css'

const ContactInfo = () =>{
    return(
        <div className="contact-info">
            <h2 className="contact-title">
                Contact Me
            </h2>
            <p className= "contact-link">
                Email:
                <br/>
                <img src='https://cdn-icons-png.flaticon.com/128/3178/3178158.png'
                className='email-icon'/>
                &nbsp;
                <a href="mailto:studytourstudy@gmail.com"
                   target="_blank" rel="noreferrer">
                   studytourstudy@gmail.com
                </a>
                <br/>
                Github:
                <br/>
                <img src='https://cdn-icons-png.flaticon.com/128/733/733609.png'
                className='github-icon'/>
                &nbsp;
                <a href="https://github.com/suitotoro"
                target="_blank"rel="noreferrer">
                https://github.com/suitotoro
                </a>
            </p>
        </div>
    )
}

export default ContactInfo;