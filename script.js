let links = JSON.parse(
    localStorage.getItem("prasannaDiaryLinks")
) || [];

function saveLinks() {
    localStorage.setItem(
        "prasannaDiaryLinks",
        JSON.stringify(links)
    );
}

function loadLinks() {

    const skillsContainer =
        document.getElementById("skillsLinks");

    const aiContainer =
        document.getElementById("aiLinks");

    if (!skillsContainer || !aiContainer) {
        return;
    }

    skillsContainer.innerHTML = "";
    aiContainer.innerHTML = "";

    const skills = links.filter(function(link) {
        return link.category === "skills";
    });

    const aiTools = links.filter(function(link) {
        return link.category === "ai";
    });

    if (skills.length === 0) {

        skillsContainer.innerHTML = `
            <p class="empty-message">
                Skills links coming soon ✨
            </p>
        `;

    } else {

        skills.forEach(function(link) {

            const a = document.createElement("a");

            a.className = "website-link";
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.textContent = link.title;

            skillsContainer.appendChild(a);

        });
    }

    if (aiTools.length === 0) {

        aiContainer.innerHTML = `
            <p class="empty-message">
                Free AI tools coming soon ✨
            </p>
        `;

    } else {

        aiTools.forEach(function(link) {

            const a = document.createElement("a");

            a.className = "website-link";
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.textContent = link.title;

            aiContainer.appendChild(a);

        });
    }
}

loadLinks();
