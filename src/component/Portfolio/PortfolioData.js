import gitFinder from '../../assets/images/GithubFinder.jpeg';
import leadsTracker from '../../assets/images/LeadsTracker.png';
import conferenceApp from '../../assets/images/conferenceBookingApp.jpeg';
import nasaMediaLibrary from '../../assets/images/nasaMediaLibrary.jpeg';
import languageTranslator from '../../assets/images/languageTranslator.jpeg';
import budgetApp from '../../assets/images/budgetApp.png';

const Data = [
  {
    screenShot: gitFinder,
    title: 'GitHub Finder',
    description: 'Github finder react application makes a call to Github API. '
    + 'For each call, it fetches information about github users and returns the result. '
    + 'The application gets the following information from the API: Username, User unique ID, '
    + 'public repositories, likes, followers, following, profile info, location, social media links, '
    + 'and others.',
    tech: ['Nodejs', 'JavaScript', 'React', 'REST API'],
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
    + 'Participants will be able to register for events, join online, invite friends, view program details, '}${
      +'access speakers bio information, contact event planners, etc. '}`,
    tech: ['CSS', 'JavaScript', 'HTML', 'SCSS'],
    alt: 'Project screenshot',
    liveDemo: 'https://kingsleyibe.github.io/microverse-capstone-1/',
    sourceCode: 'https://github.com/KingsleyIbe/microverse-capstone-1',
  },
  {
    screenShot: nasaMediaLibrary,
    title: 'Nasa Media Library',
    description: 'This web application gets NASA media library data of different centers. User can filter search by some parameters such as start and end date and will be able to search individual media items using item properties such as title, photographer, center etc.',
    tech: ['React', 'JavaScript', 'REST-API', 'Tailwind'],
    alt: 'Project screenshot',
    liveDemo: 'https://nasa-media-library.herokuapp.com/',
    sourceCode: 'https://github.com/KingsleyIbe/NAZA-media-library',
  },
  {
    screenShot: languageTranslator,
    title: 'Language Translator',
    description: 'The Language Translator App is a rails application that allows users to translate any language into other languages of their choice. The application provides the user with over one hundred languages and utilizes various endpoints.',
    tech: ['Ruby', 'Rails', 'REST-API', 'Tailwind'],
    alt: 'Project screenshot',
    liveDemo: 'https://language-tanslator.herokuapp.com/translations/translate',
    sourceCode: 'https://github.com/KingsleyIbe/language-translator',
  },
  {
    screenShot: budgetApp,
    title: 'Budget App',
    description: 'The Ruby on Rails project is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. '
      + 'The application allows the user to: '
      + 'Register and log in, so that the data is private to them. '
      + 'Introduce new transactions associated with a category. '
      + 'See the money spent on each category. ',
    tech: ['Ruby', 'Rails', 'LESS', 'Javascript'],
    alt: 'Project screenshot',
    liveDemo: 'https://budget-m-app.herokuapp.com/',
    sourceCode: 'https://github.com/KingsleyIbe/budget-app',
  },
];

export default Data;
