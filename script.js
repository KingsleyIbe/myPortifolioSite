window.onload = () => {
    const hamburger = document.querySelector('.menu1');
    const closeBtn = document.querySelector('.closeBtn');
    const projectBtn1 = document.querySelector('.btn-1');
    const projectBtn2 = document.querySelector('.btn-2');
    const projectBtn3 = document.querySelector('.btn-3');
    const projectBtn4 = document.querySelector('.btn-4');
    const projectBtn5 = document.querySelector('.btn-5');
    const projectBtn6 = document.querySelector('.btn-6');
    const projectBtn7 = document.querySelector('.btn-7');
    const form = document.querySelector('.form');
    const email = document.querySelector('.email');
    const emailErrorDisplay = document.querySelector('.email-error-display');
    const name = document.querySelector('.name');
    const text = document.querySelector('.text');
    const formInput = form.querySelectorAll('input, textarea');
  
  
    const projectItems = [
      {
        id: 1,
        title: 'Github Finder',
        displayImage: '',
        tech: ['CSS', 'JavaScript', 'React'],
        description: 'Github finder react application makes a call to Github API. ' +
        'For each call, it fetches information about github users and returns the result. ' + 
        'The application gets the following information from the API: Username, User unique ID, ' + 
        'public repositories, likes, followers, following, profile info, location, social media links, ' + 
        'and others.',
        linkToSource: 'See Source',
        linkToLive: 'See Live'
      },
      {
        id: 2,
        title: 'Contact Keeper Application',
        displayImage: '',
        tech: ['CSS', 'React', 'JavaScript'],
        description: 'Contact keeper is used to store contact information such as, ' +
        'name, email, phone number, address, occupation, and gender. It also allows you to choose contact ' + 
        'category such as professional or personal. Users will have to create an account and will be required to login ' + 
        'to access saved contacts. Saved contacts can be edited or deleted at any time. The application uses ' + 
        'mongoDB to store and manage all data. ',
        linkToSource: 'See Source',
        linkToLive: 'See Live'
      },
      {
        id: 3,
        title: 'IT Logger Application',
        displayImage: '',
        tech: ['CSS', 'JavaScript', 'React'],
        description: 'IT logger is used to keep track of application update. It Tracks the information about: ' +
        'What kind of update happened on the application (for example a bug fix, new feature added), who made the ' + 
        'changes, time and date changes were made. You can also schedule changes and state if its urgent or not ' + 
        'New technicians can be added and old ones can be edited or removed. ',
        linkToSource: 'See Source',
        linkToLive: 'See Live'
      },
      {
        id: 4,
        title: 'Online Conference Page',
        displayImage: '',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'Online conference application is a website that hosts conferences and other events. ' +
        'Participants will be able to register for events, join online, invite friends, view program details, ' + 
        'access speakers bio information, contact event planners, etc. ' ,
        linkToSource: 'See Source',
        linkToLive: 'See Live'
      },
      {
        id: 5,
        title: 'Prudence Concept Website',
        displayImage: '',
        tech: ['HTML', 'Bootstrap', 'JavaScript'],
        description: 'Before your visit the live link, let me tell you a bit about Prudence Concept and their awesome work. ' +
        'Prudence Concept specializes in wedding photography, corporate, family and senior portraits, ' +
        'often traveling to your destination to capture the perfect moment in the perfect place. ' + 
        'Supporting their client with every step of the way to guarantee their special moments are captured for all time. ' +
        'To Prudence, photography is about people being real and then letting creators paint a picture of that moment ' +
        'to remember it forever. This is the story that matters most: real people, real stories, real moments. ' +
        'They are incredibly blessed to have a team of photographers who work with them on any given weekend. ' + 
        'Please take a few minutes to get to know Prudence. They would love to visit with you by phone or in  ' +
        'person and talk about your wedding, event, portrait session or video project.' +
        'Please reach out to Prudence to get super quality service. ',
        linkToSource: 'See Source',
        linkToLive: 'See Live'
      },
      {
        id: 6,
        title: 'Leads Tracker - Google Chrome Extension',
        displayImage: '',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'Leads Tracker can be used to save URL from any website. ' +
        'Build a list of targeted leads to grow your business from any website. ' + 
        'For sites with great leads potential as LinkedIn, Leads Tracker can be a tool to save the URL for 1st, ' + 
        '2nd and 3rd level LinkedIn connections. Just visit any URL you wish to save, ' + 
        'click on ‘save tab’ button and the URL of your current tab is saved. ' +
        'You can also add a description of your URL using the ‘save input’ button. ' +
        'With Lead Tracker, you don’t have to worry about keeping track of important links anymore. ',
        linkToSource: 'See Source',
        linkToLive: 'See Live'
      },
      {
        id: 7,
        title: 'Portfolio Website for Software Developer',
        displayImage: '',
        tech: ['HTML', 'Bootstrap', 'JavaScript'],
        description: "A one page leading page of a software developer. You will have access to developer's " +
        'recent projects, tools and technologies, skills, contact information and a brief history. ',
        linkToSource: 'See Source',
        linkToLive: 'See Live'
      }
    ];
  
    hamburger.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'block';
    });
  
    close(closeBtn,'.mobile-menu');
    closeBtn.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'none';
      close(menu);
    });
  
    const backToMainPage = document.querySelector('.menuPopUp');
    close(backToMainPage,'.mobile-menu');
    backToMainPage.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'none';
    });
  
     function close(menu, toBeClose){
       menu.addEventListener('click' , () =>{
          const value = document.querySelector(toBeClose);
          value.style.display = 'none';
          const bodyColor = document.querySelector('.body').style.opacity = '1';
       });
    };
  
    const closeBtn1 = document.querySelector('.closeBtn-1');
    close(closeBtn1,'.mobile-project-details');
  
    projectBtn1.addEventListener('click', () => {
      const projectDetails = document.querySelector('.mobile-project-details');
      projectDetails.style.display = 'block';
      const bodyColor = document.querySelector('.body').style.opacity = '0.2';
      const title = document.querySelector('.title-2').innerHTML=projectItems[0].title;
      const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[0].tech[0];
      const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[0].tech[1];
      const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[0].tech[2];
      const featureImage = document.querySelector('.image').innerHTML=projectItems[0].displayImage;
      const projectDescription = document.querySelector('.description').innerHTML=projectItems[0].description;
      const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[0].linkToLive;
      const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[0].linkToSource;
    });
  
    projectBtn2.addEventListener('click', () => {
      const projectDetails = document.querySelector('.mobile-project-details');
      projectDetails.style.display = 'block';
      const bodyColor = document.querySelector('.body').style.opacity = '0.2';
      const title = document.querySelector('.title-2').innerHTML=projectItems[1].title;
      const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[1].tech[0];
      const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[1].tech[1];
      const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[1].tech[2];
      const featureImage = document.querySelector('.image').innerHTML=projectItems[1].displayImage;
      const projectDescription = document.querySelector('.description').innerHTML=projectItems[1].description;
      const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[1].linkToLive;
      const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[1].linkToSource;
    });
  
    projectBtn3.addEventListener('click', () => {
      const projectDetails = document.querySelector('.mobile-project-details');
      projectDetails.style.display = 'block';
      const bodyColor = document.querySelector('.body').style.opacity = '0.2';
      const title = document.querySelector('.title-2').innerHTML=projectItems[2].title;
      const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[2].tech[0];
      const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[2].tech[1];
      const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[2].tech[2];
      const featureImage = document.querySelector('.image').innerHTML=projectItems[2].displayImage;
      const projectDescription = document.querySelector('.description').innerHTML=projectItems[2].description;
      const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[2].linkToLive;
      const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[2].linkToSource;
    });
  
    projectBtn4.addEventListener('click', () => {
      const projectDetails = document.querySelector('.mobile-project-details');
      projectDetails.style.display = 'block';
      const bodyColor = document.querySelector('.body').style.opacity = '0.2';
      const title = document.querySelector('.title-2').innerHTML=projectItems[3].title;
      const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[3].tech[0];
      const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[3].tech[1];
      const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[3].tech[2];
      const featureImage = document.querySelector('.image').innerHTML=projectItems[3].displayImage;
      const projectDescription = document.querySelector('.description').innerHTML=projectItems[0].description;
      const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[3].linkToLive;
      const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[3].linkToSource;
    });
  
    projectBtn5.addEventListener('click', () => {
      const projectDetails = document.querySelector('.mobile-project-details');
      projectDetails.style.display = 'block';
      const bodyColor = document.querySelector('.body').style.opacity = '0.2';
      const title = document.querySelector('.title-2').innerHTML=projectItems[4].title;
      const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[4].tech[0];
      const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[4].tech[1];
      const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[4].tech[2];
      const featureImage = document.querySelector('.image').innerHTML=projectItems[4].displayImage;
      const projectDescription = document.querySelector('.description').innerHTML=projectItems[4].description;
      const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[4].linkToLive;
      const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[4].linkToSource;
    });
  
    projectBtn6.addEventListener('click', () => {
      const projectDetails = document.querySelector('.mobile-project-details');
      projectDetails.style.display = 'block';
      const bodyColor = document.querySelector('.body').style.opacity = '0.2';
      const title = document.querySelector('.title-2').innerHTML=projectItems[5].title;
      const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[5].tech[0];
      const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[5].tech[1];
      const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[5].tech[2];
      const featureImage = document.querySelector('.image').innerHTML=projectItems[5].displayImage;
      const projectDescription = document.querySelector('.description').innerHTML=projectItems[5].description;
      const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[5].linkToLive;
      const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[5].linkToSource;
    });
  
    projectBtn7.addEventListener('click', () => {
      const projectDetails = document.querySelector('.mobile-project-details');
      projectDetails.style.display = 'block';
      const bodyColor = document.querySelector('.body').style.opacity = '0.2';
      const title = document.querySelector('.title-2').innerHTML=projectItems[6].title;
      const techList0 = document.querySelector('.tech-list-0').innerHTML=projectItems[6].tech[0];
      const techList1 = document.querySelector('.tech-list-1').innerHTML=projectItems[6].tech[1];
      const techList2 = document.querySelector('.tech-list-2').innerHTML=projectItems[6].tech[2];
      const featureImage = document.querySelector('.image').innerHTML=projectItems[6].displayImage;
      const projectDescription = document.querySelector('.description').innerHTML=projectItems[6].description;
      const liveBtn = document.querySelector('.live-btn').innerHTML=projectItems[6].linkToLive;
      const sourceBtn = document.querySelector('.source-btn').innerHTML=projectItems[6].linkToSource;
    });
  
    form.addEventListener('submit', (event) => {
      if (email.value === email.value.toLowerCase()) {
        emailErrorDisplay.textContent = '';
      }else{
        event.preventDefault();
        emailErrorDisplay.textContent = '*All email letters must be in Lower case';
      }
    });
  
    const setDataToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
    const getDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
  
    const formData = getDataFromLocalStorage('formData')
    if (formData !== null){
      name.value = formData.name;
      email.value = formData.email;
      text.value = formData.message;
    }
  
    formInput.forEach((fe) => {
      fe.addEventListener('input', () => {
        const localStorageObject = {
          name: name.value,
          email: email.value,
          text: text.value
        };
        setDataToLocalStorage('formData', localStorageObject);
      });
    });
  };
  