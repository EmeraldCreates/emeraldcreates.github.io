async function buildLinks() {
    var data = await fetch('../data/links.json').then(x => x.json());
    for (var key in data) {
        document.getElementById("links").innerHTML += `
            <a href="${data[key]["href"]}" class="button-anchor">
                <div class="button lined${Math.floor(Math.random() * (2 - 1 + 1) + 1)}">
                    <div class="button-img">
                        <svg>
                            <use xlink:href="#icon-${data[key]["icon"]}" />
                        </svg>
                    </div>
                    <div class="button-content">
                        <p>${key}</p>
                    </div>
                </div>
            </a>
        `;
    }
}