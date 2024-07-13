import './index.css';
import article from '../Image/article.jpg';
import trevornoah from '../Image/trevornoah.jpg';
import kenyanimage from '../Image/kenyan-image.jpg';
import flag from '../Image/flag.jpg';
import economyimage from '../Image/economy.jpg';

function Blogs(){
    return(
       <div className ='blog-section'>
        <div className = 'header-text'>
        <h2>Blog</h2>
        </div>
        <div class = 'author-section'>
            <h2>Preview Of Born A Crime</h2>
            <img src = {trevornoah} className = 'book' alt = 'born a crime'></img>
            <p>Trevor Noah's "Born a Crime" recounts his experiences growing up as a mixed-race child during apartheid in South Africa.
               As the son of a black mother and white father, Noah's existence is considered a crime under the country's racist laws at the time.
               He describes how he learned to move and interact with different communities, honing his language skills to try to belong.
               Despite being bullied and ostracized, Noah demonstrates resourcefulness, finding success through entrepreneurial ventures.
               Noah's shares a close bond with his hardworking mother, Patricia.
               When his mother is tragically shot by his stepfather, it reaffirms their deep love.
               Some of the issues discussed in the book are similar to the recent happenings in Kenya in our social, political, and economic context.
            </p>
        </div>
        <div className = 'book-section'>
            <div className = 'social-section'>
                <h2>Social Issues</h2>
                <img src = {kenyanimage} className = 'societal-image' alt = 'kenya'></img>
                <p>
                There are several key parallels between the social landscape of recent Kenya and the experiences depicted in Trevor Noah's "Born a Crime."
                Both countries have grappled with long-standing tribalism and ethnic tensions that have at times erupted into violence.
                Widespread poverty and stark socioeconomic divides are also major issues in both contexts.
                However, the memoirs of Trevor Noah and many Kenyans also highlight resilience and perseverance in the face of adversity.
                Additionally, both Kenya and Noah's South Africa have seen gradual, if uneven, shifts in social norms around race, gender, and other identity-based issues.
                While these broad similarities exist, it's important to note that the specific historical and social dynamics differ between the two countries,
                and caution is warranted in drawing direct parallels.
                </p>
            </div>
            <div className = 'political-section'>
                <h2>Political Issues</h2>
                <img src = {flag} className = 'political-image' alt = 'kenya'></img>
                <p>
                Trevor Noah's memoir "Born a Crime" recounts his experiences growing up during apartheid in South Africa,in
                a system where racism  divided the country.
                The recent protests in Kenya, sparked by proposed tax hikes, share some parallels with Noah's experiences,
                as both highlight the challenges of navigating a society divided by race, class, and political tensions.
                There have been records of 72 political violence events and 46 reported fatalities in Nairobi recent riots.
                The resurgence of protests and infighting within civilian and security institutions highlights the ongoing difficulties in Kenya's political landscape.
                These events echo the violence and unrest that Noah witnessed during his childhood
               .
                </p>
            </div>
            <div className = 'economic-section'>
                <h2>Economic Issues</h2>
                <img src = {economyimage} className = 'economic-image' alt = 'kenya'></img>
                <p>
                Recent economic happenings in Kenya, such as the rise in taxation, align with themes in Trevor Noah's memoir "Born a Crime."
                Both contexts highlight the prevalence of economic crimes, including asset misappropriation and fraud committed by consumers,
                which are damaging to businesses and individuals.
                This mirrors the challenges faced by
                Trevor Noah's family during apartheid, where economic and social conditions led to high crime rates and systemic injustices.
                Kenya has also grappled with other economic crimes, such as tax fraud, procurement fraud, and money laundering.
                  Similar to "Born a Crime,"
                many Kenyan businesses and individuals have had to navigate this challenging economic landscape.
                </p>
            </div>
        </div>
        <div className = "project-article">
            <h2>Research On Second-Hand Fashion Waste </h2>
            <img src = {article} className = 'project-image' alt = 'article'></img>
            </div>
        </div>
    )
}
export default Blogs;