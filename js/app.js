/**
*
* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
*
* Dependencies: None
*
* JS Version: ES2015/ES6
*
* JS Standard: ESlint
*
* Content:
 * Define Global Variables
 * Start Helper Functions
 * Begin Main Functions
 * Events
 *
*/

/**
 * Define Global Variables
 *
 */


/**
 * End Global Variables
 * Start Helper Functions
 *
 */


const navigationItems = ['Intro', 'About', 'Work', 'Best-Shot'];
const ul = document.querySelector('ul');

const mainSections = ['intro','about', 'work', 'best-shot', 'social'];
const sectionsContainer = document.getElementById('main');

const overlay = document.createElement('div');

const workItems = [
    {
        title: "15 Photos",
        description: " You'll get a set of your colorful and perfectly photoshopped photos."
    },
    {
        title: "1 Month",
        description: "You'll get these photos within one month, I promise."
    },
    {
        title: "Unique Style",
        description: "Every photo set is unique, and you're a star, I'll help you to shine."
    }
];

/* Creating the Navigation bar */
function createNavigationContent() {
    for (let navItem of navigationItems) {
        let li = document.createElement("li");
        if (navItem === 'intro') {
            li.innerHTML += `<a href="#top"><p>${navItem}</p></></a>`;
            li.id = navItem.toLowerCase();
            li.className = "active item";
            ul.appendChild(li);
        }
        else {
            let displayedItem;
            if(navItem.includes('-') > 1 ) displayedItem = navItem.replace('-',' ');
            li.innerHTML += `<a href="#${navItem.toLowerCase()}"><p>${displayedItem ? displayedItem : navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item item";
            ul.appendChild(li);
        }

    }

}

createNavigationContent();


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
/* Creating the Content Sections */
function createMainSectionsDOM() {
    let newSection;
    for (let section of mainSections) {
        newSection = document.createElement("section");
        newSection.className = "manage-space";
        newSection.id = `${section.toLowerCase()}`;
        sectionsContainer.appendChild(newSection);
    }

}

createMainSectionsDOM();



/* Creating the Intro Section */
function createIntroSection() {
    const app = document.getElementById('intro');
    const introContent = createHTMLTag('div');
    const title = createHTMLTag('h2');
    const quote = createHTMLTag('p');
    const action = createHTMLTag('span');
    let introText = {
        title: "Hello, I'm a photographer!",
        quote: "Taking an image, freezing a moment, reveals how rich reality truly is.",
        action: "See my Shots"
    }

    title.innerText = introText.title;
    quote.innerText = introText.quote;
    action.innerText = introText.action;

    title.className = 'section-title';
    introContent.appendChild(title);

    quote.className = 'own-quotes';
    introContent.appendChild(quote);

    action.className = 'goto-gallery';
    introContent.appendChild(action);

    app.appendChild(overlay);
    app.appendChild(introContent);

    overlay.className = "overlay";
    introContent.className = "main-hero-content container align-text-center";
}

createIntroSection();

/* Creating the About Section */
function createAboutSection() {
    const about = document.getElementById('about');
    const aboutContent = document.createElement('div');
    about.appendChild(aboutContent);

    aboutContent.className = "landing-container container";

}

createAboutSection();

/* Creating the Work Section */
function createWorkSection() {
    const work = document.getElementById('work');
    const workContent = document.createElement('div');
    const workItemsContent = document.createElement('div');
    let workItem, workItemHeader, workItemDesc;
    for (let item of workItems) {
        workItem = document.createElement("div");
        workItemHeader = document.createElement("h4");
        workItemDesc = document.createElement("p");
        workItemHeader.innerHTML = item.title;
        workItemDesc.innerHTML = item.description;
        workItem.className = "work-box";
        workItemsContent.appendChild(workItemHeader).appendChild(workItemDesc)
        workContent.appendChild(workItem.appendChild(workItemsContent));
    }
    work.appendChild(workContent);

    workContent.className = "landing-container container";
    workItemsContent.className = "work-statistics";

}

createWorkSection();

/* Creating the Work Section */
function createBestShotSection() {
    const bestShot = document.getElementById('best-shot');
    const aboutContent = document.createElement('div');
    bestShot.appendChild(aboutContent);

    aboutContent.className = "landing-container container";

}

createBestShotSection();
// Add class 'active' to section when near top of viewport

function createHTMLTag(tagName) {
    return document.createElement(`${tagName}`);
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
