// Ensure the DOM is fully loaded before trying to access the web component
document.addEventListener('DOMContentLoaded', () => {
    const processDiagram = document.querySelector('#celonis-process-diagram');
    const processDiagramTitle = document.querySelector('#celonis-process-diagram-title');
    const processDiagramCounter = document.querySelector('#celonis-process-diagram-counter');
    const processDiagramResetCounter = document.querySelector('#celonis-process-diagram-reset-counter');

    processDiagramTitle.addEventListener('input', (event) => {
        // Update the title of the web component when the input changes
        processDiagram.title = event.target.value;
    });

    processDiagramResetCounter.addEventListener('click', () => {
        // Invokes a method within the web component 
        processDiagram.resetCounter();
    });
    
    if (processDiagram) {
        // Set initial value using directly the property of the web component
        processDiagram.title = processDiagramTitle.value || '';

        // Reads the event emmited by the web component and performs a visual update
        processDiagram.addEventListener('onCounterUpdate', (event) => {
            console.log('Event detail:', event.detail);
            processDiagramCounter.textContent = event.detail.counter;
        });
    }
});