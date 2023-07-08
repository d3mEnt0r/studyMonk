import './page2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBoltLightning, faPeopleRoof, faSackDollar } from '@fortawesome/free-solid-svg-icons';


function Page2(){
    return(
        <div>
            <div className='about'>
                <h1>Why you will <span>love</span> Study<span>Monk</span>!</h1>
                <div className='items'>
                    <div className='block'>
                        <FontAwesomeIcon className='icon' icon={faClock} style={{color: "#62cb2c",}} />
                        <h3>Time-saving</h3>
                        <p>No matter where you are, you can send out job postings anytime with Internet access.</p>
                    </div>
                    <div className='block'>
                        <FontAwesomeIcon className='icon' icon={faBoltLightning} style={{color: "#62cb2c",}} />
                        <h3>Dynamic content</h3>
                        <p>Could build up your employer branding to attract top talents and to boost corporate culture.</p>
                    </div>
                    <div className='block'>
                        <FontAwesomeIcon className='icon' icon={faSackDollar} style={{color: "#62cb2c",}} />
                        <h3>Minimized hiring cost</h3>
                        <p>Labor costs are usually high in terms of advertising, travel expenses, third-party recruiter fees etc.</p>
                    </div>
                    <div className='block'>
                        <FontAwesomeIcon className='icon' icon={faPeopleRoof} style={{color: "#62cb2c",}} />
                        <h3>Broader scope for candidates</h3>
                        <p>Recruiters will be helped in reaching a wider amount of candidates locally and abroad.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2;