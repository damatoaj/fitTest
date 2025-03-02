import { memo } from 'react';

const affiliateLinks = [{
    0 : 'https://referral.getambassador.com/6mQpRh',
    1 : 'Looking to utilize a referral program at your company? Check out the leading referral software company.',
    2 : 'Ambassador Software'
},
{
    0 : 'https://gift.bird.co/links/7H9ahsZRdT4ZUYqB6',
    1 : 'Get a free ride with my link',
    2 : 'Bird Scooters'
},
{
    0 : 'https://i.capitalone.com/JhHRYow0X',
    1 : 'I use Capital One Platinum, if you are a interested in getting one too and apply using my link, I\'ll earn $100 for each friend approved',
    2 : 'Capitol One'
},
{
    0 : 'https://drd.sh/eAxKcnQd8K85jEKX',
    1 : 'Get $30 off of your first three orders.',
    2 : 'DoorDash'
},
{
    0 : 'https://ecosia.co/app/rerrer=friends-or37cj',
    1 : 'is a fully encrypted search engine that uses its profits to plant trees. Download the app through my link and they\'ll plant a tree for both of us.',
    2 : 'Ecosia'
},
{
    0 : 'https://www.lyft.com/i/ARTHUR063951?utm_medium=p2pi_iacc',
    1 : 'Get $18 off of your next two rides',
    2 : 'Lyft'

},
{
    0 : 'https://rover.com/ambas-refer-a-friend/gBGOBz1Q',
    1 : 'Sign up for Rover with my link and get a $20 credit',
    2 : 'Rover'

},{
    0 : 'https://partners.simplygoodcoffee.com/Arthur-Damato',
    1 : 'Get $25 off of Simply Good Coffee\s incredible brewer! I have had one for two years now and it is incredible.',
    2 : 'Simply Good Coffee'

},
{
    0 : 'https://get.venmo.com/8d5RLmAnZCb',
    1 : 'We\'ll both earn $10 when you send at least $5 to another person using Venmo using a funding source linked to your account',
    2 : 'Venmo'
},
{
    0 : 'https://www.wealthfront.com/c/affiliates/invited/AFFB-2H4R-PWBQ-SO3S',
    1 : 'Get your first $5000 managed for free when you fund a Wealthfront investment account.',
    2 : 'Wealthfront Investment Account'
},
{
    0 : 'https://www.wealthfront.com/c/affiliates/invited/AFFB-40XA-UKW7-72GN',
    1 : 'If you sign up for a cash account, we both get a .50% APY boost for three months.',
    2 : 'Wealthfront Cash Account Boost to 5.30%'
}]

const Footer = () => {
    const links = affiliateLinks.map((link, i) => {
        return (<a href={link[0]} title={link[1]} key={i}>
            {link[2]} - {link[1]}
        </a>)
    })

    return (
        <footer>
           
            <address>
                <h4>
                    <a href='mailto:mr.arthurdamato@gmail.com'>
                        Contact here for support or feedback
                    </a>
                </h4>
            </address>
            <details>
                <summary>
                    <h3>Considering checking out some of our affiliate links below!</h3>
                    <p>FitTest is a free application and any support is appreciated, which will help the project grow and provide more functionality to users.</p>
                </summary>
                <ul>
                    {links}
                </ul>
            </details>

        </footer>
    )
};

export default memo(Footer);