window.My = {};
window.onload = async function () {
    My.prices = await fetch('../../data/prices.json').then(x => x.json());
    My.info = await fetch('../../data/commisions-info.json').then(x => x.json());
    My.tos = await fetch('../../data/commisions-tos.json').then(x => x.json());

    // Load tags
    loadTagPrice();
    loadTagArt();
    loadTagInfo();
    loadTagTos();
    loadTagGlyph();
}

function loadTagPrice() {
    var priceTags = document.getElementsByTagName("price");
    for (var i = 0; i < priceTags.length; i++) {
        priceTags[i].innerHTML = `<h1>${My.prices[priceTags[i].getAttribute("name")]}</h1>`;
    }
}

function loadTagArt() {
    var artTags = document.getElementsByTagName("art");
    for (var i = 0; i < artTags.length; i++) {
        artTags[i].innerHTML = `<img src="../res/assets/${artTags[i].getAttribute("name")}.png" class="${artTags[i].getAttribute("type")}">`;
    }
}

function loadTagInfo() {
    var infoTags = document.getElementsByTagName("info");
    for (var i = 0; i < infoTags.length; i++) {
        infoTags[i].innerHTML = My.info[infoTags[i].getAttribute("name")];
    }
}

function loadTagTos() {
    var tosTags = document.getElementsByTagName("tos");
    for (var i = 0; i < tosTags.length; i++) {
        tosTags[i].innerHTML = My.tos[tosTags[i].getAttribute("name")];
    }
}

function loadTagGlyph() {
    var glyphTags = document.getElementsByTagName("glyph");
    for (var i = 0; i < glyphTags.length; i++) {
        glyphTags[i].innerHTML = `<img src="../res/glyphs/${glyphTags[i].getAttribute("name")}.svg" class="${glyphTags[i].getAttribute("class")}">`;
    }
}