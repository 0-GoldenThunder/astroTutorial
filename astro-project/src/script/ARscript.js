import {
  organizedArray
} from '../components./script/Retriever.js';

function generateHtmlList(objectArray, listType = 'ul', parent = null) {
  const listElement = document.createElement(listType);
  const fragment = document.createDocumentFragment();

  for (const obj of objectArray) {
    const listItemElement = document.createElement('li');
    const span = document.createElement('span');

    // Extract data from object properties
    const textContent = obj.textContent || obj.name || obj.recording || obj.title || JSON.stringify(obj); // Use preferred property or fallback to JSON

    // Set list item content
    span.textContent = textContent;
    listItemElement.appendChild(span)

    // Handle nested arrays (if applicable)
    if (obj.sub && Array.isArray(obj.sub)) {
      const nestedList = nestedItems(obj.sub, listType, listItemElement);

      // Optional customization for parent items
      listItemElement.classList.add('parent-item');
      span.classList.add('button');
    }

    fragment.appendChild(listItemElement);
  }

  if (parent) {
    parent.appendChild(fragment);
  } else {
    // Attach the generated list to the DOM, replacing previous content
    const targetElement = document.getElementById('list-container'); // Modify 'list-container' as needed
    targetElement.innerHTML = 'Error';
    targetElement.appendChild(listElement);
  }

  return listElement;
}

function nestedItems(objectArray, listType = 'ul', parent = null) {
  const listElement = document.createElement(listType);
  const fragment = document.createDocumentFragment();

  listElement.classList.add('parent-sub-item');

  for (const obj of objectArray) {
    const listItemElement = document.createElement('li');
    const span = document.createElement('span');

    // Extract data from object properties
    const textContent = obj.textContent || obj.name || obj.kitabName || obj.recording || obj.title || JSON.stringify(obj); // Use preferred property or fallback to JSON

    // Set list item content
    span.textContent = textContent;
    listItemElement.appendChild(span);

    // Handle nested arrays (if applicable)
    if (obj.sub && Array.isArray(obj.sub)) {
      const nestedList = nestedItems(obj.sub, listType, listItemElement);
      // nestedList.classList.add('listElement');

      // Optional customization for parent items
      listItemElement.classList.add('parent-item');
      span.classList.add('button');
    }

    listElement.appendChild(listItemElement);
  }

  if (parent) {
    parent.appendChild(listElement);
  } else {
    // Attach the generated list to the DOM, replacing previous content
    const targetElement = document.getElementById('list-container'); // Modify 'list-container' as needed
    targetElement.innerHTML = 'Error';
    targetElement.appendChild(listElement);
  }
};

// Example usage:
const dataArray = organizedArray;

console.log(organizedArray);

generateHtmlList(dataArray, "ul", document.getElementById("container"));

let parentItem = document.querySelectorAll(".parent-item");
let subItem = document.querySelectorAll(".parent-sub-item");
let button = document.querySelectorAll(".button");

console.log(parentItem);

button.forEach((_button, index) => {
  _button.addEventListener("click", () => {
    parentItem[index].classList.toggle('engage')
    subItem[index].classList.toggle("active");
  })
})