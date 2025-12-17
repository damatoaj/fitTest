import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faShare,faSms,faMessage } from '@fortawesome/free-solid-svg-icons';
import {faSnapchat, faThreads, faBluesky, faXTwitter, faGoogle, faYahoo, faTelegram, faPinterest,faFlipboard,faBlogger,faEvernote,faLinkedin,faReddit,faTumblr} from '@fortawesome/free-brands-svg-icons'
const links : any = [
    ["https://twitter.com/intent/tweet?url={url}&text={title}", faXTwitter],
    ["https://reddit.com/submit?url={url}&title={title}", faReddit],
    ["https://www.linkedin.com/shareArticle?url={url}", faLinkedin],
    ["https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}", faTumblr],
    ["http://pinterest.com/pin/create/button/?url={url}", faPinterest],
    ["https://www.blogger.com/blog-this.g?u={url}&n={title}", faBlogger],
    ["https://www.evernote.com/clip.action?url={url}&title={title}", faEvernote],
    // ["http://www.livejournal.com/update.bml?subject={title}&event={url}", 'livejournal'],
    ["https://share.flipboard.com/bookmarklet/popout?v=2&title={title}&url={url}", faFlipboard],
    ["https://t.me/share/url?url={url}&text={title}", faTelegram],
    ["mailto:{email_address}?subject={title}&body={url}", faMessage],
    ["https://mail.google.com/mail/?view=cm&to=&su={title}&body={url}",faGoogle],
    ["http://compose.mail.yahoo.com/?to=&subject={title}&body={url}", faYahoo],
    ["sms:''?body={url}", faSms],
    ["https://bsky.app/intent/compose?text={url}", faBluesky],
    ['https://threads.net/intent/post?text={url}', faThreads],
    ['https://www.snapchat.com/share?link={url}', faSnapchat]
];

const ShareLinks = () => {
    return <ul id='share-links-container'>
        {links.map((link : any)=> {
            let l = link[0].replace('{url}', 'https%3A%2F%2Ffit-tests.com%2F').replace('{title}', 'Fit%20Tests:%20A%20Free%20Exercise%20Testing%20App')
            let i = link[1] as IconProp;
            console.log(i)
            return <>
                <a href={l} target='_blank' rel="noopener noreferrer" className='share-links'>
                    <FontAwesomeIcon icon={i} />
                </a>
            </>
        })}
    </ul>
};

export default ShareLinks;