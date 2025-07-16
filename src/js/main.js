// Ensure the DOM is fully loaded before trying to access the web component
document.addEventListener('DOMContentLoaded', () => {
    const processDiagram = document.querySelector('celonis-process-diagram');

    /*if (processDiagram) {
        // Example: Setting a property (input) on the web component
        // If your Angular web component has an @Input() called 'data',
        // you can set it as a property on the DOM element:
        processDiagram.data = {  your_data_object: 'here'  };

        // Example: Listening to an event (output) from the web component
        // If your Angular web component has an @Output() called 'nodeSelected',
        // you can listen for it:
        processDiagram.addEventListener('nodeSelected', (event) => {
            console.log('Node selected:', event.detail);
            // event.detail will contain the data emitted by your Angular component
        });

        // You can also call methods on the web component if it exposes them
        // processDiagram.refreshDiagram();
    }*/
});