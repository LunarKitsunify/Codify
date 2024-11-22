// External object to store the states of all settings checkboxes
// This object will dynamically update as checkboxes are interacted with
const settingsState = {};

// Example settings data, structured in groups with individual settings
const settingsData = [
    {
        groupName: 'General Settings',
        settings: [
            { 
                name: 'Enable Notifications', 
                shortDescription: 'Receive alerts', 
                fullDescription: 'Enables notifications for all important updates.', 
                type: 'checkbox' 
            },
            { 
                name: 'Username', 
                shortDescription: 'Enter your username', 
                fullDescription: 'Your unique username for the system.', 
                type: 'text' 
            },
            { 
                name: 'Theme', 
                shortDescription: 'Select a theme', 
                fullDescription: 'Choose between Light and Dark themes.', 
                type: 'dropdown', 
                options: ['Light', 'Dark'] 
            }
        ]
    }
];


document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';
document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';
document.documentElement.style.overflow = 'hidden';

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.overflow = 'hidden';

// Create the main container for the application and append it to the document body
const mainContainer = document.createElement('div');
mainContainer.style.width = '100%';
mainContainer.style.height = '100%';
mainContainer.style.backgroundColor = '#121212'; // Dark background
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.boxSizing = 'border-box';
document.body.appendChild(mainContainer);

/** 
 * Creates a modal window and returns an object to control it.
 * The modal includes 4 equal containers for content organization.
 * @param {string} id - Unique identifier for the modal window.
 * @param {HTMLElement} parent - The parent element where the modal will be appended.
 * @param {string} titleText - The title text displayed in the modal header.
 * @returns {object} - Object with methods to open, close, and add content to specific containers.
 */
function createModal(id, parent, titleText) {
    if (document.getElementById(id)) {
        console.warn(`A modal with ID "${id}" already exists.`);
        return null;
    }

    const overlay = document.createElement('div');
    overlay.id = id;
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.visibility = 'hidden';

    const modal = document.createElement('div');
    modal.style.width = '90%';
    modal.style.height = '70%';
    modal.style.padding = '20px';
    modal.style.backgroundColor = '#1e1e1e';
    modal.style.color = '#ffffff';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.gap = '1%';
    modal.style.overflowY = 'hidden';
    modal.style.overflowX = 'hidden';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.marginBottom = '15px';
    header.style.padding = '10px';
    header.style.backgroundColor = '#2e2e2e';
    header.style.borderBottom = '1px solid white';
    header.style.borderRadius = '8px';

    const title = document.createElement('h2');
    title.textContent = titleText;
    title.style.margin = '0 auto';
    title.style.textAlign = 'center';
    title.style.color = '#ffffff';
    header.appendChild(title);

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.fontSize = '30px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.color = '#ffffff';
    closeButton.style.border = 'none';
    closeButton.style.background = 'transparent';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => modalObj.close());
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.color = '#ff4444';
        closeButton.style.transform = 'scale(1.3)';
    });
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.color = '#ffffff';
        closeButton.style.transform = 'scale(1)';
    });
    header.appendChild(closeButton);

    modal.appendChild(header);

    // Create 4 equal containers inside the modal
    const containers = [];
    const containerWrapper = document.createElement('div');
    containerWrapper.style.display = 'grid';
    containerWrapper.style.gridTemplateColumns = 'repeat(4, 1fr)'; // 2 columns layout
    containerWrapper.style.gridGap = '20px';
    containerWrapper.style.width = '100%';
    containerWrapper.style.height = '100%';
    containerWrapper.style.padding = '0 1% 1% 0';

    for (let i = 0; i < 4; i++) {
        const container = document.createElement('div');
        container.style.border = '1px solid #444';
        container.style.borderRadius = '8px';
        container.style.height = '100%'; // Placeholder height
        container.style.overflowY = 'auto'; // Scrollable if content overflows
        containers.push(container);
        containerWrapper.appendChild(container);
    }

    modal.appendChild(containerWrapper);
    overlay.appendChild(modal);
    parent.appendChild(overlay);

    const modalObj = {
        element: overlay,
        content: modal,
        containers: containers,
        open: () => {
            overlay.style.visibility = 'visible';
        },
        close: () => {
            overlay.style.visibility = 'hidden';
        },
        addContent: (content, containerIndex) => {
            if (containers[containerIndex]) {
                containers[containerIndex].appendChild(content);
            } else {
                console.warn(`Container index ${containerIndex} does not exist.`);
            }
        },
    };

    return modalObj;
}

/** 
 * Populates the specified container in the modal with grouped settings.
 * @param {object} modalObj - The modal object returned by createModal.
 * @param {Array} settingsData - Array of groups and their settings.
 * @param {object} state - External object to store the states of inputs.
 * @param {number} containerIndex - Index of the container where settings will be added.
 */
function createSettingsMenu(modalObj, settingsData, state, containerIndex) {
    if (!modalObj || !modalObj.containers[containerIndex]) {
        console.error('Invalid modal object or container index provided.');
        return;
    }

    const targetContainer = modalObj.containers[containerIndex];
    settingsData.forEach(group => {
        const groupContainer = document.createElement('div');
        groupContainer.style.border = '5px solid #808080';
        groupContainer.style.borderRadius = '8px';
        groupContainer.style.backgroundColor = '#2C2C2C';//'#2e2e2e';
        groupContainer.style.width = '100%';
        groupContainer.style.height = '100%';
        groupContainer.style.boxSizing = 'border-box';
        groupContainer.style.overflowY = 'hidden';
        groupContainer.style.overflowX = 'hidden';
        groupContainer.style.padding = '1%';

        const groupTitle = document.createElement('h3');
        groupTitle.textContent = group.groupName;
        groupTitle.style.margin = '0 0 15px 0';
        groupTitle.style.padding = '10px';
        groupTitle.style.backgroundColor = '#1e1e1e';
        groupTitle.style.color = '#ffffff';
        groupTitle.style.borderRadius = '8px';
        groupTitle.style.textAlign = 'center';
        groupTitle.style.border = '1px solid white';
        groupContainer.appendChild(groupTitle);


        // Add each setting in the group
        group.settings.forEach((setting, index) => {
            const settingContainer = document.createElement('div');
            settingContainer.style.display = 'flex';
            settingContainer.style.flexDirection = 'column'; // Vertical stacking of rows
            settingContainer.style.marginBottom = '15px'; // Space between settings
            settingContainer.style.paddingBottom = '10px'; // Space above the line

            // Add a subtle border for separation (except the last setting)
            if (index < group.settings.length - 1) {
                settingContainer.style.borderBottom = '1px solid #444'; // Thin line
            }

            // First row: setting name and input element
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
            settingName.style.color = '#ffffff'; // White text color
            topRow.appendChild(settingName);

            // Input element based on type
            let inputElement;
            if (setting.type === 'checkbox') {
                inputElement = document.createElement('input');
                inputElement.type = 'checkbox';
                inputElement.style.marginLeft = 'auto';
                inputElement.style.transform = 'scale(1.5)'; // Enlarged checkbox
                inputElement.style.marginRight = '10px'; // Add spacing
                inputElement.checked = state[setting.name] || false;
            } else if (setting.type === 'text') {
                inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.style.marginLeft = 'auto';
                inputElement.style.padding = '5px';
                inputElement.style.width = '200px'; // Fixed width for text input
                inputElement.value = state[setting.name] || ''; // Use existing value or default
            } else if (setting.type === 'dropdown') {
                inputElement = document.createElement('select');
                inputElement.style.marginLeft = 'auto';
                inputElement.style.padding = '5px';
                inputElement.style.width = '200px';
                (setting.options || []).forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    inputElement.appendChild(optionElement);
                });
                inputElement.value = state[setting.name] || (setting.options ? setting.options[0] : '');
            }

            // Bind input element to external state
            inputElement.addEventListener('change', () => {
                state[setting.name] = inputElement.type === 'checkbox' ? inputElement.checked : inputElement.value;
                console.log(`Setting "${setting.name}" updated: ${state[setting.name]}`);
            });
            topRow.appendChild(inputElement);

            // Second row: short description
            const shortDesc = document.createElement('span');
            shortDesc.textContent = setting.shortDescription;
            shortDesc.style.color = '#aaaaaa'; // Light gray for the short description
            shortDesc.style.fontSize = '0.85em'; // Slightly smaller font size
            shortDesc.style.marginTop = '5px'; // Small top margin
            settingContainer.appendChild(topRow);
            settingContainer.appendChild(shortDesc);

            // Append setting to the group container
            groupContainer.appendChild(settingContainer);
        });

        targetContainer.appendChild(groupContainer);
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
settingsButton.style.backgroundColor = '#444'; // Dark button
settingsButton.style.color = '#fff'; // White text color
settingsButton.style.cursor = 'pointer';

settingsButton.addEventListener('click', () => {
    settingsModal.open(); // Open the modal
    createSettingsMenu(settingsModal, settingsData, settingsState, 0); 
    // createSettingsMenu(settingsModal, null, settingsState, 1); 
    // createSettingsMenu(settingsModal, null, settingsState, 2); 
    // createSettingsMenu(settingsModal, null, settingsState, 3); 
    console.log('Settings state:', settingsState);
});

// Append the settings button to the main container
mainContainer.appendChild(settingsButton);
