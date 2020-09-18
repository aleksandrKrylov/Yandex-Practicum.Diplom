function displaysClose (elementClass, hiddenclass) {
  elementClass.classList.add(hiddenclass);
}

function displaysOpen (elementClass, classHidden) {
  elementClass.classList.remove(classHidden);
}

export {displaysClose, displaysOpen};
