//Get #pageContent element
let pageContent = document.getElementById('pageContent');
//get #pictInfo div
let pictInfo = document.getElementById('pictInfo');
//Define the images array
let rawImages = '[{"filename":"image-1.jpg","name":"Test de wing fone","author":"Vincent Gardet","exposure":"100 ISO - 18 mm - f/22 - 302 Sec"},{"filename":"image-2.jpg","name":"test de wing fone","author":"Gardet Vincent","exposure":"200 ISO - 150 mm - f/10 - 1/320 Sec"},{"filename":"image-3.jpg","name":"Transition Jump","author":"Gardet Vincent","exposure":"100 ISO - 59 mm - f/13 - 1/250 Sec"},{"filename":"image-4.jpg","name":"Waterstart","author":"Gardet Vincent","exposure":"100 ISO - 18 mm - f/22 - 531 Sec"},{"filename":"image-5.jpg","name":"Transition jump devant mont olympe","author":"gardet vincent","exposure":"100 ISO - 128 mm - f/11 - 1/250 Sec"},{"filename":"image-6.jpg","name":"cascade en fond de vallée","author":"gardet vincent","exposure":"100 ISO - 150 mm - f/28 - 1/320 Sec"},{"filename":"image-7.jpg","name":"cascade","author":"Gardet Vincent","exposure":"100 ISO - 26 mm - f/10 - 1/100 Sec"},{"filename":"image-8.jpg","author":"gardet vincent","name":"Grand arbre","exposure":"100 ISO - 37 mm - f/11 - 1/400 Sec"},{"filename":"image-9.jpg","name":"ozone edge","author":"gardet Vincent","exposure":"100 ISO - 24 mm - f/5 - 1/200 Sec"},{"filename":"image-10.jpg","name":"champ de lavande","author":"Gardet vincent","exposure":"200 ISO - 150 mm - f/6.3 - 1/320 Sec"},{"filename":"image-11.jpg","name":"sunset sur eucalyptus","author":"Gardet Vincent","exposure":"200 ISO - 39 mm - f/10 - 1/640 Sec"},{"filename":"image-12.jpg","name":"windsurf","author":"Gardet Vincent","exposure":"100 ISO - 20 mm - f/11 - 1/80 Sec"},{"filename":"image-13.jpg","name":"arbre geant","author":"Gardet Vincent","exposure":"200 ISO - 39 mm - f/13 - 1/200 Sec"},{"filename":"image-14.jpg","name":"wake wam park","author":"Gardet Vincent","exposure":"200 ISO - 70 mm - f/8.0 - 1/100 Sec"}]';
let images = JSON.parse(rawImages);

//Choose a random image
let randomImage = images[Math.floor(Math.random() * images.length)];

//apply the image as the background of pageContent
pageContent.style.backgroundImage = `url(./images/${randomImage.filename})`;

if (pictInfo) {
    //Empty the pictInfo div
    while (pictInfo.firstChild) {
        pictInfo.removeChild(pictInfo.firstChild);
    }

    //Create pictInfo title and add it to the Div
    let pictTitle = document.createElement('h1');
    let pictTitleContent = document.createTextNode(randomImage.name);
    pictTitle.appendChild(pictTitleContent);
    pictInfo.appendChild(pictTitle);

    //Create author and exposure P and add them to pictInfo
    let pictauthor = document.createElement('p');
    let pictData = document.createElement('p');
    let pictAuthorContent = document.createTextNode(randomImage.author);
    let pictDataContent = document.createTextNode(randomImage.exposure);
    pictauthor.appendChild(pictAuthorContent);
    pictData.appendChild(pictDataContent);
    pictInfo.appendChild(pictauthor);
    pictInfo.appendChild(pictData);

}