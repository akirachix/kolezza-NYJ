import './index.css';

const Podcast = () =>{
    return(
        <div className='container'>
            <div className='live'>
            <img src="/images/micc.png" alt='mic' className='mic-png'/>
            <h1>K<span className='highlight'>o</span>lezza P<span className='highlight'>o</span>dcast</h1>
            <div className='prompt'>LIVE</div>
            </div>
            <div className='content'>
                <h2>How to be calm under pressure </h2>
                <p>As Kolezza, we've faced numerous challenges, but persevered. Develop resilience, maintain positivity,
                     seek support, and stay focused on your vision to navigate tough times in business. Embrace resilience,
                      surround yourself with a supportive network, and break down big challenges. Join a mastermind group, hire a coach,
                       and attend conferences. Review your plan, set objectives, and stay true to your values. Tough times don't last, but tough people do.
                </p>
                <img src="/images/youtube.png" alt='youtube' className='youtube-png'/>
            </div>
            <div>
                <img src="/images/coming.png" alt='coming soon' className='comingsoon-png'/>
            </div>
        </div>
    )
}
export default Podcast;