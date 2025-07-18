// Ensure the DOM is fully loaded before trying to access the web component
document.addEventListener('DOMContentLoaded', () => {
    const processDiagram = document.querySelector('#celonis-process-diagram');
    const processDiagramTitle = document.querySelector('#celonis-process-diagram-title');
    const processDiagramCounter = document.querySelector('#celonis-process-diagram-counter');

    processDiagramTitle.addEventListener('input', (event) => {
        // Update the title of the web component when the input changes
        if (processDiagram) {
            processDiagram.title = event.target.value;
        }
    });
    
    if (processDiagram) {
        processDiagram.title = processDiagramTitle.value || '';

        // Reads the event emmited by the web component and performs a visual update
        processDiagram.addEventListener('onCounterUpdate', (event) => {
            console.log('Event detail:', event.detail);
            processDiagramCounter.textContent = event.detail.counter;
        });
    }
});