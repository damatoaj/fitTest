import {memo} from 'react';



const TwitterShare = () => {
    return <a href="https://twitter.com/intent/tweet?url=https://www.fit-test.com/&text=Fit%20Tests:%20A%20Free%20Exercise%20Testing%20App&via={user_id}" 
   target="_blank" 
   rel="noopener noreferrer">
    Share On X
   {/* <img src="your-custom-linkedin-icon.png" alt="Share on LinkedIn"> */}
</a> 
};

export default memo(TwitterShare);