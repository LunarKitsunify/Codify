// External object to store the states of all settings checkboxes
// This object will dynamically update as checkboxes are interacted with
const settingsState = {};

// Example settings data, structured in groups with individual settings
const settingsData = [
    {
        groupName: 'General Settings', // Name of the settings group
        settings: [
            { 
                name: 'Enable Notifications', 
                shortDescription: 'Receive alerts', 
                fullDescription: 'Enables notifications for all important updates.' 
            },
            { 
                name: 'Dark Mode', 
                shortDescription: 'Switch theme', 
                fullDescription: 'Switches the interface to a dark theme for better visibility in low light.' 
            }
        ]
    },
    {
        groupName: 'Privacy Settings', // Name of the settings group
        settings: [
            { 
                name: 'Share Data', 
                shortDescription: 'Enable sharing', 
                fullDescription: 'Allows sharing of your data with third-party applications.' 
            },
            { 
                name: 'Tracking', 
                shortDescription: 'Disable tracking', 
                fullDescription: 'Prevents websites from tracking your activity online.' 
            }
        ]
    }
];

// Create the main container for the application and append it to the document body
const mainContainer = document.createElement('div');
mainContainer.style.width = '100%';
mainContainer.style.height = '100%';
mainContainer.style.backgroundColor = 'green';
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.boxSizing = 'border-box';
document.body.appendChild(mainContainer);

/** 
 * Creates a modal window and returns an object to control it.
 * @param {string} id - Unique identifier for the modal window.
 * @param {HTMLElement} parent - The parent element where the modal will be appended.
 * @param {string} titleText - The title text displayed in the modal header.
 * @returns {object} - Object with methods to open, close, and add content to the modal.
 */
function createModal(id, parent, titleText) {
    // Check if a modal with the given ID already exists
    if (document.getElementById(id)) {
        console.warn(`A modal with ID "${id}" already exists.`);
        return null;
    }

    // Create the overlay (background) for the modal
    const overlay = document.createElement('div');
    overlay.id = id;
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.visibility = 'hidden'; // Initially hidden

    // Create the modal container
    const modal = document.createElement('div');
    modal.style.width = '400px';
    modal.style.padding = '20px';
    modal.style.backgroundColor = '#fff';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.gap = '15px';

    // Create a header container for the title and close button
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.marginBottom = '15px';
    header.style.padding = '10px'; // Padding inside the header
    header.style.backgroundColor = '#f1f1f1'; // Light background to highlight the header
    header.style.borderBottom = '1px solid #ccc'; // Line separating the header from the content
    header.style.borderRadius = '8px'; // Rounded top corners

    // Add the title to the header
    const title = document.createElement('h2');
    title.textContent = titleText;
    title.style.margin = '0';
    title.style.flexGrow = '1'; // The title takes up available space
    header.appendChild(title);

    // Add a close button to the header
    const closeButton = document.createElement('button');
    closeButton.textContent = '×'; // Icon for the close button
    closeButton.style.fontSize = '30px'; // Larger font for better visibility
    closeButton.style.fontWeight = 'bold';
    closeButton.style.color = '#333';
    closeButton.style.border = 'none';
    closeButton.style.background = 'transparent';
    closeButton.style.cursor = 'pointer';
    closeButton.style.marginLeft = '10px';
    closeButton.style.padding = '0';
    closeButton.addEventListener('click', () => {
        modalObj.clearContent(); // Clear dynamic content on close
        modalObj.close();
    });

    // Append the close button to the header
    header.appendChild(closeButton);

    // Add the header to the modal
    modal.appendChild(header);

    // Append the modal to the overlay and the overlay to the parent
    overlay.appendChild(modal);
    parent.appendChild(overlay);

    // Object to control the modal window
    const modalObj = {
        element: overlay, // Reference to the overlay
        content: modal,   // Reference to the modal content
        open: () => {     // Opens the modal
            overlay.style.visibility = 'visible';
        },
        close: () => {    // Closes the modal
            overlay.style.visibility = 'hidden';
        },
        addContent: (content) => { // Adds content to the modal
            modal.appendChild(content);
        },
        clearContent: () => { // Removes all dynamically added content
            Array.from(modal.children).forEach(child => {
                if (child !== header) { // Only keep the header intact
                    modal.removeChild(child);
                }
            });
        },
    };

    return modalObj; // Return the control object
}

/** 
 * Populates the modal with grouped settings and links them to an external state.
 * Each checkbox will use the value from the provided `state` object if it exists.
 * The setting name and checkbox are displayed on the first line, with a short description on the second line.
 * @param {object} modalObj - The modal object returned by createModal.
 * @param {Array} settingsData - Array of groups and their settings.
 * @param {object} state - External object to store the states of checkboxes.
 */
function createSettingsMenu(modalObj, settingsData, state) {
    if (!modalObj || !modalObj.content) {
        console.error('Invalid modal object provided.');
        return;
    }

    settingsData.forEach(group => {
        // Create a group container
        const groupContainer = document.createElement('div');
        groupContainer.style.marginBottom = '20px';
        groupContainer.style.padding = '10px';
        groupContainer.style.border = '1px solid #ccc';
        groupContainer.style.borderRadius = '8px';
        groupContainer.style.backgroundColor = '#f9f9f9';

        // Add group title
        const groupTitle = document.createElement('h3');
        groupTitle.textContent = group.groupName;
        groupTitle.style.margin = '0 0 10px 0';
        groupTitle.style.color = '#333';
        groupContainer.appendChild(groupTitle);

        // Add each setting in the group
        group.settings.forEach(setting => {
            const settingContainer = document.createElement('div');
            settingContainer.style.display = 'flex';
            settingContainer.style.flexDirection = 'column'; // Vertical stacking of rows
            settingContainer.style.marginBottom = '10px';

            // First row: setting name and checkbox
            const topRow = document.createElement('div');
            topRow.style.display = 'flex';
            topRow.style.alignItems = 'center';
            topRow.style.width = '100%';

            // Setting name
            const settingName = document.createElement('label');
            settingName.textContent = setting.name;
            settingName.style.marginRight = '10px';
            settingName.style.cursor = 'help';
            settingName.title = setting.fullDescription; // Tooltip for full description
            topRow.appendChild(settingName);

            // Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.style.marginLeft = 'auto'; // Push the checkbox to the right

            // Use existing value from state or default to false
            if (state.hasOwnProperty(setting.name)) {
                checkbox.checked = state[setting.name]; // Use the stored value
            } else {
                state[setting.name] = false; // Initialize with default value
                checkbox.checked = false;
            }

            // Bind checkbox to the external state
            checkbox.addEventListener('change', () => {
                state[setting.name] = checkbox.checked; // Sync state on change
                console.log(`Setting "${setting.name}" updated: ${state[setting.name]}`);
            });
            topRow.appendChild(checkbox);

            // Second row: short description
            const shortDesc = document.createElement('span');
            shortDesc.textContent = setting.shortDescription;
            shortDesc.style.color = '#555';
            shortDesc.style.fontSize = '0.85em'; // Slightly smaller font size
            shortDesc.style.marginTop = '5px'; // Small top margin
            settingContainer.appendChild(topRow);
            settingContainer.appendChild(shortDesc);

            // Append setting to the group container
            groupContainer.appendChild(settingContainer);
        });

        // Append group container to the modal content
        modalObj.addContent(groupContainer);
    });
}

// Create the modal
const settingsModal = createModal('settings-modal', mainContainer, 'Settings');

// Button to open the modal
const settingsButton = document.createElement('button');
settingsButton.textContent = 'Open Settings';
settingsButton.style.padding = '10px 20px';
settingsButton.style.margin = '20px';
settingsButton.style.border = 'none';
settingsButton.style.borderRadius = '4px';
settingsButton.style.backgroundColor = '#007BFF';
settingsButton.style.color = '#fff';
settingsButton.style.cursor = 'pointer';
settingsButton.addEventListener('click', () => {
    settingsModal.open(); // Open the modal
    createSettingsMenu(settingsModal, settingsData, settingsState); // Populate the modal with settings
    console.log('Settings state:', settingsState);
});

// Append the settings button to the main container
mainContainer.appendChild(settingsButton);
