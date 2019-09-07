const renderMenu = () => {
    let divContent = document.getElementById('content');
    let menuTab = document.createElement('li');
    let menuTabLink = document.createElement('a');
    let menuTabContent = document.createElement('div');
    menuTab.className = 'nav-item';
    menuTabLink.className = "nav-link";
    menuTabContent.className = "tabContent";

    const rendermenuTab = (() => {
        menuTab.appendChild(menuTabLink);
        document.getElementById('tabList').appendChild(menuTab);
    })();

    const rendermenuContent = () => {
        while (divContent.hasChildNodes()) {
            divContent.removeChild(divContent.firstChild);
        }
        menuTabContent.innerHTML = `<ul><li>Sicilian Crust(Thick) - Mini(Personal), Medium(12), & Large (16)</li>
    <li>Regular Crust(Thin) - Medium(12) & Large (16)</li>
    <li>Pan Crust(Super Thick) - Medium(12) & Large (16)</li></ul>`;
        document.getElementById('content').appendChild(menuTabContent);
    }

    menuTabLink.innerText = "Menu"

    menuTabLink.setAttribute("href", "#");
    menuTabLink.setAttribute("data-toggle", "tab");
    menuTabLink.addEventListener('click', rendermenuContent);

    return {
        tabList,
        menuTab,
        menuTabLink,
        rendermenuContent,
        menuTabContent,
        rendermenuTab,
        divContent
    }

}

export {
    renderMenu
}