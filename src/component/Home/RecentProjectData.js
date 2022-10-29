import prudenceconcept from '../../assets/images/prudenceconcept.png';
import afrikbrand from '../../assets/images/afrikbrand.png';
import leadsTracker from '../../assets/images/LeadsTracker.png';
import conferenceApp from '../../assets/images/conferenceBookingApp.jpeg';

const Data = [
  {
    id: 1,
    screenShot: prudenceconcept,
    title: 'Prudence Concept',
    description: 'Prudence Concept was founded with a mission: to exceed clients '
    + 'expectations by going above and beyond software to provide best-in-class'
    + 'web solutions that transform data into knowledge, allowing them to solve their problems. ',
    tech: ['Tailwind CSS', 'JavaScript', 'React', 'REST API'],
    alt: 'Project screenshot',
    liveDemo: 'https://prudenceconcept.com/',
  },
  {
    id: 2,
    screenShot: afrikbrand,
    title: 'Afrikbrand Limited',
    description: 'I developed the web page for the Afrikbrand - the number one digital marketing consultant in Nigeria '
    + 'The Afrikbrand is a one-stop-shop for all Marketing Agency needs. '
    + 'The website is highly optimized for SEO and loads very fast ',
    tech: ['CSS', 'WordPress', 'CMS', 'SEO'],
    alt: 'Project screenshot',
    liveDemo: 'https://afrikbrand.tech/',
  },
  {
    id: 3,
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
    id: 4,
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
