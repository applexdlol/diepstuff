let zoomEnabled = false;
    let zoomLevel = 1;
    let zoomFactor = 1.1;

    function zoom(event) {
        if (!zoomEnabled) {
            return;
        }

        event.preventDefault();
        const delta = Math.sign(event.deltaY);
        zoomLevel *= delta > 0 ? (1 / zoomFactor) : zoomFactor;
        zoomLevel = Math.max(0.5, Math.min(4, zoomLevel));

        const canvas = document.querySelector('#canvas');
        canvas.style.transform = `scale(${zoomLevel})`;
    }

    window.addEventListener('wheel', zoom);

    // Create a div for the gray box
    const box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.width = '80%';
    box.style.height = '80%';
    box.style.top = '10%';
    box.style.left = '10%';
    box.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
    box.style.border = '2px solid #ccc';
    box.style.zIndex = 9999;
    box.style.display = 'none';

    // Create the title
    const title = document.createElement('h2');
    title.textContent = 'hack menu';
    title.style.position = 'absolute';
    title.style.top = '10px';
    title.style.left = '10px';
    box.appendChild(title);

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '20px';
    closeButton.addEventListener('click', () => {
        box.style.display = 'none';
    });
    box.appendChild(closeButton);
        // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.top = '50px';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100% - 50px)';
    iframe.style.border = 'none';
    box.appendChild(iframe);

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'spritelol is so good';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.backgroundColor = 'white';
    toggleButton.style.border = '1px solid #ccc';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.fontSize = '14px';
    toggleButton.style.padding = '5px';
    toggleButton.style.zIndex = 9998;
    toggleButton.addEventListener('click', () => {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
    });
    document.body.appendChild(toggleButton);

    // Create the toggle zoom button
    const toggleZoomButton = document.createElement('button');
    toggleZoomButton.textContent = 'Toggle Zoom';
    toggleZoomButton.style.position = 'absolute';
    toggleZoomButton.style.top = '60px';
    toggleZoomButton.style.left = '10px';
    toggleZoomButton.style.backgroundColor = 'red';
    toggleZoomButton.style.border = '1px solid #ccc';
    toggleZoomButton.style.cursor = 'pointer';
    toggleZoomButton.style.fontSize = '14px';
    toggleZoomButton.style.padding = '5px';
    toggleZoomButton.addEventListener('click', () => {
        zoomEnabled = !zoomEnabled;
        toggleZoomButton.style.backgroundColor = zoomEnabled ? 'green' : 'red';
    });
    box.appendChild(toggleZoomButton);
        // Listen for the 'esc' key to toggle the box's
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            box.style.display = box.style.display === 'none' ? 'block' : 'none';
        }
    });

    // Add the box to the page
    document.body.appendChild(box);
