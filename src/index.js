import { renderHome } from './home'
import { renderContact } from './contact'
import { renderMenu } from './menu'


const pageHeader = (() => {
    let pageDocument = document.getElementById("pageDocument");
    let navList = document.createElement('ul');
    let pageHeader = document.createElement('div');
    let pageHeaderTitle = document.createElement('h1');
    let mainContent = document.createElement('div');

    navList.className = 'nav nav-tabs';
    navList.setAttribute('id', 'tabList');
    mainContent.setAttribute('id', 'content');
    pageHeader.className = 'pageHeader';
    pageHeaderTitle.className = "pageHeaderTitle";
    pageHeaderTitle.innerHTML = "APizza Authentic Italian Pizza";

    pageHeader.appendChild(pageHeaderTitle);
    pageDocument.appendChild(pageHeader);
    pageDocument.appendChild(navList);
    pageDocument.appendChild(mainContent);

    /*
    <ul class="nav nav-tabs" id="tabList"></ul> 
    <div id="content">
    */




    return {
        pageHeader,
        pageDocument,
        pageHeaderTitle,
        mainContent,
        navList
    }

})();

renderHome();
renderContact();
renderMenu();

