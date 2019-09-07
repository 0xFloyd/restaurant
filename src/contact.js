const renderContact = () => {
    let divContent = document.getElementById('content');
    let contactTab = document.createElement('li');
    let contactTabLink = document.createElement('a');
    let contactTabContent = document.createElement('div');
    contactTab.className = 'nav-item';
    contactTabLink.className = "nav-link";
    contactTabContent.className = "tabContent";

    const renderContactTab = (() => {
        contactTab.appendChild(contactTabLink);
        document.getElementById('tabList').appendChild(contactTab);
    })();

    const renderContactContent = () => {
        while (divContent.hasChildNodes()) {
            divContent.removeChild(divContent.firstChild);
        }
        contactTabContent.innerHTML = 'Extra stuff and more';
        document.getElementById('content').appendChild(contactTabContent);
    }
   
    contactTabLink.innerText = 'Contact';
    contactTabLink.setAttribute("href", "#");
    contactTabLink.setAttribute("data-toggle", "tab");
    contactTabLink.addEventListener('click', renderContactContent);
  
    return {
        tabList,
        contactTab,
        contactTabLink,
        renderContactContent,
        contactTabContent,
        renderContactTab,
        divContent
    }

}

export {
    renderContact
}