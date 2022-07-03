import gitFinder from '../../assets/images/GithubFinder.jpeg';
import leadsTracker from '../../assets/images/LeadsTracker.png';
import conferenceApp from '../../assets/images/conferenceBookingApp.jpeg';

const Data = [
  {
    screenShot: gitFinder,
    title: 'GitHub Finder',
    description: 'Github finder react application makes a call to Github API. '
    + 'For each call, it fetches information about github users and returns the result. '
    + 'The application gets the following information from the API: Username, User unique ID, '
    + 'public repositories, likes, followers, following, profile info, location, social media links, '
    + 'and others.',
    tech: ['CSS', 'JavaScript', 'React', 'REST API'],
    alt: 'Project screenshot',
    liveDemo: 'https://githubfinder83948989.netlify.app/',
    sourceCode: 'https://github.com/KingsleyIbe/Github-Finder',
  },
  {
    screenShot: leadsTracker,
    title: 'Leads Tracker Chrome Extension',
    description: `${'Leads Tracker can be used to save URL from any website. '
    + 'Build a list of targeted leads to grow your business from any website. '
    + 'For sites with great leads potential as LinkedIn, Leads Tracker can be a tool to save the URL for 1st, '}${
      '2nd and 3rd level LinkedIn connections. Just visit any URL you wish to save, '
    }click on ‘save tab’ button and the URL of your current tab is saved. `
    + 'You can also add a description of your URL using the ‘save input’ button. '
    + 'With Lead Tracker, you don’t have to worry about keeping track of important links anymore. ',
    tech: ['CSS', 'JavaScript', 'HTML', 'Webpack'],
    alt: 'Project screenshot',
    liveDemo: 'https://chrome.google.com/webstore/detail/leads-tracker/ocokmojbnnoapdbobddbcbcbegolglfh',
    sourceCode: 'https://github.com/KingsleyIbe/LeadsTrackerChromeExtension',
  },
  {
    screenShot: conferenceApp,
    title: 'Online Conference Page',
    description: `${'Online conference application is a website that hosts conferences and other events. '
    + 'Participants will be able to register for events, join online, invite friends, view program details, '
    + 'access speakers bio information, contact event planners, etc. '}`,
    tech: ['CSS', 'JavaScript', 'HTML', 'SCSS'],
    alt: 'Project screenshot',
    liveDemo: 'https://kingsleyibe.github.io/microverse-capstone-1/',
    sourceCode: 'https://github.com/KingsleyIbe/microverse-capstone-1',
  },
];

export default Data;
