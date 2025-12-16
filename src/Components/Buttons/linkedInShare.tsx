import {memo} from 'react';

const LinkedInShare = () => {
    return <a href="https://www.linkedin.com/shareArticle?url=https://fit-tests.com" 
   target="_blank" 
   rel="noopener noreferrer">
    Share On LinkedIn
   {/* <img src="your-custom-linkedin-icon.png" alt="Share on LinkedIn"> */}
</a> 
};

export default memo(LinkedInShare);