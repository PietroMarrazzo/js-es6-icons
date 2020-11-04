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


  const colors = [
      'blue',
      'orange',
      'purple'
  ];

  // icons container
  const containerIcons = $('.icons');

  // show icons
  showIcon(iconsArray, containerIcons);

  // show colored icons
  const colorIcons = colorIcon(iconsArray, colors); 

  showIcon(colorIcons, containerIcons);




}) // <--- end ready

// FUNZIONI
// show icons function
function showIcon(array, container) {
  array.forEach((icon) => {
    
    const {family, prefix, name, color} = icon;

    const html = 
    `<div class="icon">
        <i class="${family} ${prefix}${name}"
           style="color: ${color}"></i>
        <div class="title">${name}</div>
     </div>`;

     container.append(html);

  });
};


// colorIcon
function colorIcon(iconsArray, colors) {
  // trovare i type
  const types = typeFinder(iconsArray);
  
  

  // associare i colori e ritornare l'array che ha i colori in piu
  const colored = iconsArray.map((icon) => {

    const indexType = types.indexOf(icon.type);

    return {
      ...icon,
      color: colors[indexType]
    }

  });

  return colored

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
