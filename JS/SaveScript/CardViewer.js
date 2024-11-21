//#region Main Div
const mainContainer = document.createElement('div');
mainContainer.style.width = '100%';
mainContainer.style.height = '100%';
mainContainer.style.backgroundColor = 'green';
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.boxSizing = 'border-box';
document.body.appendChild(mainContainer);

const topContainer = document.createElement('div');
topContainer.style.width = '75%';
topContainer.style.height = '85%';
topContainer.style.backgroundColor = '#fcba03';
topContainer.style.display = 'flex';
topContainer.style.flexDirection = 'column';
topContainer.style.justifyContent = 'center';
mainContainer.appendChild(topContainer);

const bottomContainer = document.createElement('div');
bottomContainer.style.width = '75%';
bottomContainer.style.height = '15%';
bottomContainer.style.backgroundColor = 'lightgreen';
bottomContainer.style.display = 'flex';
bottomContainer.style.justifyContent = 'center';
mainContainer.appendChild(bottomContainer);


//#endregion

//#region Card Viewer Rows
const createCardRows = (cardsArray, parent) => {
    const cardsPerRow = 10;
    const numberOfRows = Math.ceil(cardsArray.length / cardsPerRow);
  
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = document.createElement('div');
      row.style.width = '100%';
      row.style.height = '150px';
      row.style.display = 'flex';
      row.style.justifyContent = 'space-between';
      row.style.alignItems = 'center';
      row.style.margin = '10px 0';
      row.style.padding = '0 10px';
      row.style.boxSizing = 'border-box';
  
      for (let i = 0; i < cardsPerRow; i++) {
        const cardIndex = rowIndex * cardsPerRow + i;
        if (cardIndex >= cardsArray.length) break;
  
        const card = document.createElement('div');
        card.style.width = 'calc((100% - 20px) / 10 - 10px)';
        card.style.height = '100%';
        card.style.backgroundColor = 'lightblue';
        card.style.display = 'flex';
        card.style.justifyContent = 'center';
        card.style.alignItems = 'center';
        card.style.textAlign = 'center';
        card.style.boxSizing = 'border-box';
        card.style.border = '1px solid #ccc';
        card.style.borderRadius = '5px';
        card.textContent = cardsArray[cardIndex];
        row.appendChild(card);
      }
  
      parent.appendChild(row);
    }
  };
//#endregion
  
// Использование
const cards = Array.from({ length: 30 }, (_, i) => i + 1);
createCardRows(cards, topContainer);
  