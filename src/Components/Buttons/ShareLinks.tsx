import { memo } from 'react';

const links : string[] = [
    "https://twitter.com/intent/tweet?url={url}&text={title}",
    "https://reddit.com/submit?url={url}&title={title}",
    "https://www.linkedin.com/shareArticle?url={url}",
    "https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}",
    "http://pinterest.com/pin/create/button/?url={url}",
    "https://www.blogger.com/blog-this.g?u={url}&n={title}",
    "https://www.evernote.com/clip.action?url={url}&title={title}",
    "http://www.livejournal.com/update.bml?subject={title}&event={url}",
    "https://share.flipboard.com/bookmarklet/popout?v=2&title={title}&url={url}",
    "https://t.me/share/url?url={url}&text={title}",
    "mailto:{email_address}?subject={title}&body={url}",
    "https://mail.google.com/mail/?view=cm&to={email_address}&su={title}&body={url}",
    "http://compose.mail.yahoo.com/?to={email_address}&subject={title}&body={url}",
    "sms:{phone_number}?body={url}{text}"

];

const ShareLinks = () => {
    return links.map((link)=> {
        let l = link.replace('{url}', 'https://fit-tests.com').replace('{title}', 'Fit%20Tests:%20A%20Free%20Exercise%20Testing%20App')

        return <a href={l} target='_blank' rel="noopener noreferrer">
            {l}
        </a>
    });
};

export default memo(ShareLinks);