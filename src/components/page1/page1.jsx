import './page1.css';

import img1 from '../images/recruitImg.png';


function Page1(){


    return (
        <div style={{margin: '70px 0px 150px 0px'}}>
            <div className="intro">
                <div>
                    <h1 style={{fontSize: "50px"}}>Recruitment <span>and</span> HR <br/><span>in one place</span></h1>
                    <p>HR-ON Recruit and HR-ON Staff join your daily HR-duties in one place. A few easy steps lets you automate, gather and assign tasks, which leaves you time to focus on attracting the right talent, evolving your staff and cultivating a viable workplace culture.</p>
                </div>
                <img className='img1' src={img1} alt="Recruit" />
            </div>
            <button className='learnmore-btn'>Learn more &#x2192;</button>
        </div>
    )
}

export default Page1;