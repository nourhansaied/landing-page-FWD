/**
*
* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
*
* Dependencies: None
* JS Version: ES2015/ES6
*
* JS Standard: ESlint
*
* Content:
 * Define nourPhotography
 * nourPhotography and renderView
 * Begin Main Functions
 * Events
 *
*/
const nourPhotography = {
    init: () => {
        // render view
        renderView.init();

        // Hide navbar when scrolling
        let new_scroll_position = 0,last_scroll_position;
        let header = document.getElementById("header");

        window.addEventListener('scroll', function(e) {
            last_scroll_position = window.scrollY;
            if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
                header.classList.remove("slideDown");
                header.classList.add("slideUp");

            } else if (new_scroll_position > last_scroll_position) {
                header.classList.remove("slideUp");
                header.classList.add("slideDown");
            }
            new_scroll_position = last_scroll_position;
        });
    },
}


/**
 * Define Global Variables
 *
 */

const navigationItems = ['Intro', 'About', 'Work', 'Best-Shot'];
const ul = document.querySelector('ul');

const mainSections = ['intro','about', 'work', 'best-shot'];
const sectionsContainer = document.getElementById('main');




// Set sections as active
const renderView = {
    init: function () {
        this.createNavigationContent();
        this.createMainSectionsDOM();
        this.createIntroSection();
        this.createAboutSection();
        this.createWorkSection();
        this.createBestShotSection();
        this.createFooterContent();

        let mainNavLinks = document.querySelectorAll("nav ul li a");
        window.addEventListener("scroll", event => {
            let fromTop = window.scrollY + 110;

            mainNavLinks.forEach(link => {

                let section = document.querySelector(link.hash);
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.parentElement.classList.add("current");
                } else {
                    link.parentElement.classList.remove("current");
                }
            });
        });
    },
    createNavigationContent: () => {
        for (let navItem of navigationItems) {
            let li = renderView.createHTMLTag("li");
            let displayedItem;
            if(navItem.includes('-') > 1 ) displayedItem = navItem.replace('-',' ');
            li.innerHTML += `<a href="#${navItem.toLowerCase()}"><p>${displayedItem ? displayedItem : navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item";
            ul.appendChild(li);
        }

    },
    createMainSectionsDOM: () => {
        let newSection;
        for (let section of mainSections) {
            newSection = renderView.createHTMLTag("section");
            newSection.className = "manage-space";
            newSection.id = `${section.toLowerCase()}`;
            sectionsContainer.appendChild(newSection);
        }

    },
    createIntroSection: () => {
        const app = document.getElementById('intro');
        const introContent = renderView.createHTMLTag('div');
        const grayScale = renderView.createHTMLTag('div');
        const title = renderView.createHTMLTag('h2');
        const quote = renderView.createHTMLTag('p');
        const action = renderView.createHTMLTag('span');

        title.innerText = introText.title;
        quote.innerText = introText.quote;
        action.innerText = introText.action;

        grayScale.className = 'gray-scale';
        introContent.appendChild(grayScale);

        title.className = 'section-title';
        introContent.appendChild(title);

        quote.className = 'own-quotes';
        introContent.appendChild(quote);

        action.className = 'goto-gallery';
        introContent.appendChild(action);

        const overlay = renderView.createHTMLTag('div');

        app.appendChild(overlay);
        app.appendChild(introContent);

        overlay.className = "overlay";
        introContent.className = "main-hero-content container align-text-center";
    },
    createAboutSection: () => {
        const about = document.getElementById('about');
        const aboutContent = renderView.createHTMLTag('div');
        const aboutHead = renderView.createHTMLTag('h2');
        const quote = renderView.createHTMLTag('p');
        const aboutSubText = renderView.createHTMLTag('p');
        const aboutSub2Text = renderView.createHTMLTag('p');

        aboutHead.innerText = aboutText.title;
        quote.innerText = aboutText.quote;
        aboutSubText.innerText = aboutText.sub;
        aboutSub2Text.innerText = aboutText.sub2;

        aboutContent.appendChild(aboutHead);
        aboutContent.appendChild(quote);
        aboutContent.appendChild(aboutSubText);
        aboutContent.appendChild(aboutSub2Text);
        about.appendChild(aboutContent);

        aboutContent.className = "landing-container container";
        aboutHead.className = 'section-main-title';

    },
    createWorkSection: () => {
        const work = document.getElementById('work');
        const workContent = renderView.createHTMLTag('div');
        const workContentTitle = renderView.createHTMLTag('h2');
        const workItemsContent = renderView.createHTMLTag('div');
        workContentTitle.innerText = 'My work';
        workContentTitle.className = 'section-main-title';
        let workItem, workItemHeader, workItemDesc;
        workContent.appendChild(workContentTitle);
        for (let item of workItems) {
            workItem = renderView.createHTMLTag("div");
            workItemHeader = renderView.createHTMLTag("h4");
            workItemDesc = renderView.createHTMLTag("p");
            workItemHeader.innerHTML = item.title;
            workItemDesc.innerHTML = item.description;
            workItem.className = "work-box";
            workItemsContent.appendChild(workItemHeader).appendChild(workItemDesc)
            workContent.appendChild(workItem.appendChild(workItemsContent));
        }


        work.appendChild(workContent);

        workContent.className = "landing-container container";
        workItemsContent.className = "work-statistics";

    },
    createBestShotSection: () => {
        const overlay = renderView.createHTMLTag('div');
        const bestShot = document.getElementById('best-shot');
        const bestContent = renderView.createHTMLTag('div');
        bestContent.innerHTML = `<h2 class="best-shot-desc">Every sunset is an opportunity to reset.</h2><p class='best-shot-content'>So, Just RELAX and SMILE</p>`;
        let newOverlay = overlay;
        newOverlay.className = 'overlay';
        bestShot.appendChild(newOverlay);
        bestShot.appendChild(bestContent);
        bestContent.className = "landing-container container";

    },
    createFooterContent: () =>{
        const footer = document.getElementsByClassName('page-footer')[0];
        const footerContent = renderView.createHTMLTag('div');
        const footerTitleContent = renderView.createHTMLTag('h2');
        const footerUlContent = renderView.createHTMLTag('ul');
        footerTitleContent.innerHTML = 'Contact me &#128526'
        socialMedia.map(item => {
            const li = renderView.createHTMLTag('li');
            const anchor = renderView.createHTMLTag('a');
            anchor.setAttribute('href',item.link);
            anchor.innerText = item.name;
            li.appendChild(anchor);
            footerUlContent.appendChild(li);
        });
        footerTitleContent.className = 'section-main-title';
        footerContent.append(footerTitleContent)
        footerContent.append(footerUlContent);

        footer.prepend(footerContent);
        footerContent.className = "landing-container container";

    },
    createHTMLTag:(tagName) => {
        return document.createElement(`${tagName}`);
    }
}

nourPhotography.init();
