const renderContact = () => {
    let divContent = document.getElementById('content');
    let contactTab = document.createElement('li');
    let contactTabLink = document.createElement('a');
    let contactTabContent = document.createElement('div');
    contactTab.className = 'nav-item';
    contactTabLink.className = "nav-link";
    contactTabContent.className = "tabContent col-lg-6";

    const renderContactTab = (() => {
        contactTab.appendChild(contactTabLink);
        document.getElementById('tabList').appendChild(contactTab);
    })();

    const renderContactContent = () => {
        while (divContent.hasChildNodes()) {
            divContent.removeChild(divContent.firstChild);
        }
        contactTabContent.innerHTML = `
    Location:
    8292 Brewerton Rd, Cicero NY 13039<br>
    (315) 699-2775<br>
    ccp@cicerycountrypizza.com<br>
    Service Area: Cicero & the Northern Syracuse Suburbs<br>
    Located Two Blocks South of Route 11 & 31, next to the M&T Bank™
`;
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