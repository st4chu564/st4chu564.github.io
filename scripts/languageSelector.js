let polishButton = '<a class="language-button" data-language="polish" href="#">' +
    '<div class="language">' +
    '<img class="language-image" src="img/poland.png" alt="Polish Flag">' +
    '<span class="tarumian language-text">polski</span>' + 
    '</div></a>';

let englishButton = '<a class="language-button" data-language="english" href="#">' +
    '<div class="language">' +
    '<img class="language-image" src="img/greatBritain.png" alt="English Flag">' +
    '<span class="tarumian language-text">english</span>' + 
    '</div></a>';

let frenchButton = '<a class="language-button" data-language="french" href="#">' +
    '<div class="language">' +
    '<img class="language-image" src="img/france.png" alt="French Flag">' +
    '<span class="tarumian language-text">french</span>' + 
    '</div></a>';

let languageSelectBoxStart = '<div class="language-select">';
let languageSelectBoxEnd = '</div>';

$(function(){
    let page = window.location.pathname;
    $('body').append(languageSelectBoxStart + polishButton + englishButton + frenchButton + languageSelectBoxEnd);

    $(".language-button").click(function(e, target){
        let languageSelected = $(this).data('language');
        if(sessionStorage["language"] === null){
            sessionStorage["language"] = languageSelected;
        }
        if(pages[page] === "index"){
            window.location.href = window.location.href + "navigation.html";
        }
        ClearBiography();
        PopulateBiography(languageSelected);
    })
});

function ClearBiography(){
    $(".life-story").html("");

    let achievementsList = $(".achievements-list");
    let headers = $(".list-header");
    let otherTexts = $(".other-text");

    for(i = 0; i < achievementsList.length; i++){
        $(achievementsList[i]).empty();
        $(headers[i]).html("");
    }
    for(i = 0; i < otherTexts.length; i++){
        $(otherTexts[i]).remove();
    }
}

function PopulateBiography(language){
    let languageVersion = languages.biography[language];
    $(".life-story").html(languageVersion.lifeStory);
    $($(".list-header")[0]).html(languageVersion.details.header);
    let achievementsList = $(".achievements-list");
    languageVersion.details.list.forEach(entry => {
        $(achievementsList[0]).append(
            "<li>" +
            "<div class=\"year\">" + entry.year + "</div>" +
            "<div class=\"name\">" + entry.name.replace(new RegExp(';', 'g'), "<br>",) + "</div>" +
            "</li>"
        );
    });
    $($(".list-header")[1]).html(languageVersion.realizations.header);
    languageVersion.realizations.list.forEach(entry => {
        $(achievementsList[1]).append(
            "<li>" +
            "<div class=\"year\">" + entry.year + "</div>" +
            "<div class=\"name\">" + entry.name.replace(new RegExp(';', 'g'), "<br>",) + "</div>" +
            "</li>"
        );
    });
    $($(".list-header")[2]).html(languageVersion.awards.header);
    languageVersion.awards.list.forEach(entry => {
        $(achievementsList[2]).append(
            "<li>" +
            "<div class=\"year\">" + entry.year + "</div>" +
            "<div class=\"name\">" + entry.name.replace(new RegExp(';', 'g'), "<br>",) + "</div>" +
            "</li>"
        );
    });
    languageVersion.otherTexts.forEach(entry => {
        $(".list-container").append("<p class=\"other-text\"><b>" + entry.bold + "</b> " + entry.rest + "</p>");
    });
}

const pages = {
    "/" : "index",
    "/zyciorys.html": "biography",
    "/kontakt.html": "contact",
    "/linoryty.html": "linorites",
    "/malarstwo.html": "paintings",
    "/realizacje.html": "realizations",
}


const languages = {
    "biography": {
        "polish": {
            "title": "Regina Lipecka - galeria autorska",
            "lifeStory": "Urodzona w 1968 roku. Studia na Akademii Sztuk Pięknych w Krakowie - Wydział Malarstwa - w latach 1989-94. Dyplom w pracowni prof. Włodzimierza Kunza. W 1998 r. odbyła 6-cio miesięczny staż w Instytucie Sztuki i Techniki Bretanii Zachodniej w Breście (Francja). Zajmuje się twórczością artystyczną w dziedzinie malarstwa, rysunku, linorytu, sgraffito, projektowania witraży, pisze wiersze. ",
            "details": {
                "header": "Wystawy indywidualne",
                "list": [
                    {"year": 1994, "name": "Teatry \"Stygmator\", Kraków"},
                    {"year": 1995, "name": "Galeria Miriam, Tychy"},
                    {"year": 1997, "name": "Galeria w LO im. Leona Kruczkowskiego, Tychy"},
                    {"year": 1999, "name": "Centrum Sztuki i Kultury Concarneau (Francja);Galeria Miriam, Tychy"},
                    {"year": 2001, "name": "Galeria \"Forma & Colour\", Warszawa;Galeria \"Obok\", Tychy"},
                    {"year": 2002, "name": "Galeria \"Obok\", Tychy"},
                    {"year": 2003, "name": "Instytu Francuski, Kraków"},
                    {"year": 2004, "name": "Miejski Dom Kultury, Mikołów;Młodzieżowy Dom Kultury nr 2, Tychy;Galeria Art - Nova 1, Katowice;Galeria Miriam, Tychy"},
                    {"year": 2005, "name": "Galeria Katowice, Katowice"},
                    {"year": 2006, "name": "Galeria Strefart, Tychy"},
                    {"year": 2007, "name": "Galeria \"Pod Dachem\", Tychy"},
                    {"year": 2008, "name": "Galeria Pryzmat, Kraków"},
                    {"year": 2010, "name": "Ferme des Artisans, Brasparts (Francja);La Fausse ô Makaks, Brest (Francja);Dom Bretanii, Poznań"},
                    {"year": 2011, "name": "Galeria w LO im. Leona Kruczkowskiego, Tychy;Espace du Roudour, Saint-Martin-Des-Champs (Francja)"},
                    {"year": 2014, "name": "Galeria Rękaw, Kraków"},
                    {"year": 2016, "name": "\"La Cantina\", Tychy"},
                    {"year": 2019, "name": "Miejskie Centrum Kultury, Tychy"},
                    {"year": 2020, "name": "Centrum Konferencyjno Wystawiennicze StrefArt, Tychy"}
                ]
            },
            "realizations": {
                "header": "Realizacje",
                "list": [
                    {"year": 1994, "name": "Projekt witrażu - \"Chrzest Chrystusa\", Tychy;Tomik Poetycki pt. \"Latawce\""},
                    {"year": 1996, "name": "Projekt i wykonanie Drogi Krzyżowej techniką sgraffito, Tychy"}
                ]
            }, 
            "awards": {
                "header": "Nagrody",
                "list": [
                    {"year": 1994, "name": "III nagroda \"Grafika Roku 1994\", Kraków"},
                    {"year": 1996, "name": "Wyróżnienie \"Konfrontacje Najmłodszych Artystów Krakowa\", Myślenice"},
                    {"year": 2003, "name": "Nagroda w konkursie \"Praca Roku 2002\", Katowice"},
                    {"year": 2018, "name": "I miejsce Tyski Bank Kultury"}
                ]
            },
            "otherTexts": [
                {
                    "bold": "Udział w kilkunastu wystawach zbiorowych",
                    "rest": "m.in. w Krakowie, Warszawie, Olsztynie, Bielsku Białej, Szczecinku, Legnicy, Katowicach, Tychach, Tokio, Münster."
                },
                {
                    "bold": "Prace w zbiorach prywatnych",
                    "rest": "w Polsce, Austrii, Niemczech, Francji, Portugalii, Japonii, Korei Południowej, Réunion"
                }
            ]
        },
        "english":{
            "lifeStory": "Born in 1968, she is a graduate of Painting Department Art Academy in Cracow, Poland. In 1994 she made hef diploma at Professor Włodzimierz Kunz`s department. In 1998 she made 6 - month - studies in Art and Technology Institute of West Brittany in Brest (France). The domain of her action is painting, drawing, sgraffito and stained glass windows designing. She writes poetry.",
            "details": {
                "header": "Individual Exhibitions",
                "list": [
                    {"year": 1994, "name": "\"Stygmator\" Theatre, Cracow (Poland)"},
                    {"year": 1995, "name": "\"Miriam\" Gallery, Tychy (Poland)"},
                    {"year": 1997, "name": "Leon Kruczkowski Secondary School Gallery, Tychy (Poland)"},
                    {"year": 1999, "name": "Art and Culture Centre, Concarneau (France);\"Miriam\" Gallery, Tychy (Poland)"},
                    {"year": 2001, "name": "\"Forma & Coulour\", Warsaw (Poland)"},
                    {"year": 2002, "name": "\"Obok\" Gallery, Tychy (Poland)"},
                    {"year": 2003, "name": "French Institute, Cracow (Poland)"},
                    {"year": 2004, "name": "Municipal Community Centre, Mikołów (Poland);Community Centre No 2, Tychy (Poland);\"Art - Nova 1\" Gallery, Katowice (Poland);\"Miriam\" Gallery, Tychy (Poland)"},
                    {"year": 2005, "name": "\"Katowice\" Gallery, Katowice (Poland)"},
                    {"year": 2006, "name": "\"Strefart\" Gallery, Tychy (Poland)"},
                    {"year": 2007, "name": "\"Under the Roof\" Gallery, Tychy (Poland)"},
                    {"year": 2008, "name": "\"Pryzmat\" Gallery, Cracow (Poland)"},
                    {"year": 2010, "name": "Ferme des Artisans, Brasparts (France);La Fausse ô Makaks, Brest (France);Dom Bretanii, Poznań (Poland)"},
                    {"year": 2011, "name": "Leon Kruczkowski Secondary School Gallery, Tychy (Poland);Espace du Roudour, Saint-Martin-des-Champs (France)"},
                    {"year": 2014, "name": "\"Rękaw\" Gallery, Cracow (Poland)"},
                    {"year": 2016, "name": "\"La Cantina\", Tychy (Poland)"},
                    {"year": 2019, "name": "City Cultural Center, Tychy (Poland)"},
                    {"year": 2020, "name": "CKW StrefArt, Tychy (Poalnd)"}
                ]
            },
            "realizations": {
                "header": "Realizations", 
                "list": [
                    {"year": 1994, "name": "\"Christ's Baptism\" - stained - glass windows design, Tychy (Poland);Collection of poems \"Kites\""},
                    {"year": 1996, "name": "Design and making of Crucifixion Route in sgraffito technique, Tychy (Poland)"}
                ]
            },
            "awards": {
                "header": "Awards",
                "list":[
                    {"year": 1994, "name": "third prize - \"Graphics of the year 1994\", Cracow (Poland)"},
                    {"year": 1995, "name": "prize in - \"Youngest Cracow Artist Confrontation\", Myślenice (Poland)"},
                    {"year": 2003, "name": "prize in \"Work of the Year 2002\", Katowice (Poland)"},
                    {"year": 2018, "name": "first place - Tyski Bank Kultury"}
                ]
            },
            "otherTexts": [
                {
                    "bold": "She took part in several exhibitions",
                    "rest": "in Cracow, Warsaw, Łódź, Olsztyn, Bielsko - Biała, Sczecinek, Legnica, Katowice, Tychy (all in Poland), Tokyo (Japan), Münster (Germany)."
                }, 
                {
                    "bold": "Works in numerous private collections",
                    "rest": "in Poland, Germany, France, Portugal, Korea, Japan, Réunion"
                }
            ]
        }
    }  
};