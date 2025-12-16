import {memo} from 'react';



const RedditShare = () => {
    return <a href="https://reddit.com/submit?url=https://www.fit-test.com/&title=Fit%20Tests:%20A%20Free%20Exercise%20Testing%20App" 
   target="_blank" 
   rel="noopener noreferrer">
    Share On Reddit
   {/* <img src="your-custom-linkedin-icon.png" alt="Share on LinkedIn"> */}
</a> 
};

export default memo(RedditShare);