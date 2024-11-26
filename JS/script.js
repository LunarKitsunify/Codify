import { createModal, createSettingsMenu } from './MoonObjs/SettingsMenu.js';

import { createCardRows } from './MoonObjs/CardViewer.js';

//#region  Main Div

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

//#endregion

//#region Property and const

// Example settings data, structured in groups with individual settings
const settingsData = [
    {
        groupName: 'General Settings',
        settings: [
            {
                name: 'Enable Notifications',
                shortDescription: 'Receive alerts',
                fullDescription: 'Enables notifications for all important updates.',
                type: 'checkbox',
                defaultValue: true,
                onChange: (newValue) => {
                    console.log(`Notifications: ${newValue}`);
                }
            },
            {
                name: 'Username',
                shortDescription: 'Enter your username',
                fullDescription: 'Your unique username for the system.',
                type: 'text',
                defaultValue: 'User123',
                onChange: (newValue) => {
                    console.log(`Username updated to: ${newValue}`);
                }
            },
            {
                name: 'Theme',
                shortDescription: 'Select a theme',
                fullDescription: 'Choose between Light and Dark themes.',
                type: 'dropdown',
                options: ['Light', 'Dark'],
                defaultValue: 'Light',
                onChange: (newValue) => {
                    console.log(`Theme changed to: ${newValue}`);
                }
            },
            {
                name: 'Reset Settings',
                shortDescription: 'Reset all settings to default',
                fullDescription: 'Click this button to reset all settings to their default values.',
                type: 'button',
                onClick: () => {
                    console.log('Settings have been reset to default!');
                    // Логика сброса настроек к значениям по умолчанию
                }
            }
        ]
    }
];


//#endregion


// Create the modal
const settingsModal = createModal('settings-modal', mainContainer, 'Settings');
const menuContainer1 = settingsModal.addMenuContainer('row');
const menuContainer2 = settingsModal.addMenuContainer('row');
const menuContainer3 = settingsModal.addMenuContainer('row');

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
    createSettingsMenu(menuContainer1, settingsData);
    createSettingsMenu(menuContainer2, settingsData);
    createSettingsMenu(menuContainer3, settingsData);
});

// Append the settings button to the main container
mainContainer.appendChild(settingsButton);