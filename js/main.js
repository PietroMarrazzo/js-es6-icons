$(document).ready(function (){
// Icon set
const iconsArray = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
];


const coloredIcons = [
    'blue',
    'orange',
    'purple'
];

// icons container
const containerIcons = $('.icons');

// show icons
showIcon(iconsArray, containerIcons);

// show colored icons
const colorIcons = colorIcon(iconsArray, coloredIcons); 

}) // <--- end ready

// FUNZIONI
// show icons function
function showIcon(iconsArray, containerIcons) {
  iconsArray.forEach((icon) => {
    
    const {family, prefix, name} = icon;

    const html = 
    `<div class="icon">
        <i class="${family} ${prefix}${name}"></i>
        <div class="title">${name}</div>
     </div>`;

     containerIcons.append(html);

  });
};


// colorIcon
function colorIcon(iconsArray, coloredIcons) {
  // trovare i type
  const types = typeFinder(iconsArray);
  
  

  // associare i colori
  const colored = iconsArray.map((icon) => {

    const indexType = types.indexOf(icon.type);

    return {
      ...icon,
      color: coloredIcons[indexType]
    }
  });



}; // end function



// finder type
function typeFinder(iconsArray) {

  const types = [];

  iconsArray.forEach((icon) => {
    if (! types.includes(icon.type)) {
      types.push(icon.type);
    }
  });

  return types;
}; // end function 
