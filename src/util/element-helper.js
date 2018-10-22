export const selectElement = (selectorClass, targetElementId) => {
    // Clear style for currently-selected elements - if any
    // (this function assumes that there is only one selected element
    // allowed at a time, hence, no querySelectorAll and looping/forEach)
    const selectedElement = 
        document.querySelector(`.${selectorClass}`);
    if (selectedElement) {
        selectedElement.classList.remove(selectorClass);
    }
    // Select element
    document.getElementById(targetElementId)
        .classList.add(selectorClass);
}