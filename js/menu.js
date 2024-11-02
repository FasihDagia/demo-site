let unclickedElements = document.getElementsByClassName('cousine-unclicked');

for (let i = 0; i < unclickedElements.length; i++) {
    unclickedElements[i].addEventListener('click', (event) => {
        // Reset styles for all elements
        for (let j = 0; j < unclickedElements.length; j++) {
            unclickedElements[j].style.color = ''; 
            unclickedElements[j].style.borderBottom = ''; 
            unclickedElements[j].classList.remove('clicked'); // Optional if using classes
        }
        
        event.preventDefault();
        // Apply styles to the clicked element
        unclickedElements[i].style.color = "black"; 
        unclickedElements[i].style.borderBottom = "1px solid black"; 
        console.log('hello');
    });
}