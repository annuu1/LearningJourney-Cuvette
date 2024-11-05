// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const columnOptions = document.getElementById('column-options');
    const addColumnButton = document.getElementById('add-column');
    const tradeTable = document.getElementById('trade-table');
    const tradeTableBody = tradeTable.getElementsByTagName('tbody')[0];
    const tableHeader = document.getElementById('table-header');
    const tradeForm = document.getElementById('trade-form');
  
    let columns = loadColumns(); 
    let tradeData = loadTrades(); 
    renderColumns();
    renderTrades();
  
    function loadColumns() {
      const storedColumns = localStorage.getItem('columns');
      return storedColumns ? JSON.parse(storedColumns) : [
        { name: 'stockSymbol', label: 'Stock Symbol' },
        { name: 'tradeType', label: 'Trade Type' },
        { name: 'quantity', label: 'Quantity' },
        { name: 'price', label: 'Price' },
        { name: 'date', label: 'Date' } 
      ];
    }
    function saveColumns() {
      localStorage.setItem('columns', JSON.stringify(columns));
    }
  
    function loadTrades() {
      const storedTrades = localStorage.getItem('trades');
      return storedTrades ? JSON.parse(storedTrades) : [
        { id: 1, stockSymbol: 'AAPL', tradeType: 'Buy', quantity: 10, price: 150.00, date: '2023-01-10', notes: 'Long-term hold' },
        { id: 2, stockSymbol: 'GOOG', tradeType: 'Sell', quantity: 5, price: 2500.00, date: '2023-02-20', notes: 'Took some profit' }
      ]; 
    }
  
    function saveTrades() {
      localStorage.setItem('trades', JSON.stringify(tradeData));
    }
  
    function renderColumns() {
      tableHeader.innerHTML = ''; 
      columnOptions.innerHTML = '';
  
      columns.forEach((column, index) => {
        // Add to table header
        const th = document.createElement('th');
        th.textContent = column.label;
        tableHeader.appendChild(th);
  
        // Add to customization options
        const columnDiv = document.createElement('div');
        columnDiv.innerHTML = `
          <label for="col-name-${index}">${column.label}:</label >
          <input type="text" id="col-name-${index}" value="${column.name}">
          <button class="remove-column">Remove</button>
        `;
        columnOptions.appendChild(columnDiv);
      });
    }
  
    function renderTrades() {
      tradeTableBody.innerHTML = '';
  
      tradeData.forEach((trade) => {
        const row = tradeTableBody.insertRow();
  
        columns.forEach((column) => {
          const cell = row.insertCell();
          cell.textContent = trade[column.name];
        });
      });
    }
  
    addColumnButton.addEventListener('click', () => {
      const newColumn = { name: `column-${columns.length}`, label: `Column ${columns.length}` };
      columns.push(newColumn);
      saveColumns();
      renderColumns();
    });
  
    columnOptions.addEventListener('input', (e) => {
      if (e.target.tagName === 'INPUT') {
        const columnIndex = e.target.id.replace('col-name-', '');
        columns[columnIndex].name = e.target.value;
        saveColumns();
        renderColumns();
      }
    });
  
    columnOptions.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-column')) {
        const columnIndex = e.target.parentNode.querySelector('input').id.replace('col-name-', '');
        columns.splice(columnIndex, 1);
        saveColumns();
        renderColumns();
      }
    });
  
    tradeForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const newTrade = {};
      columns.forEach((column) => {
        newTrade[column.name] = document.getElementById(column.name).value;
      });
  
      tradeData.push(newTrade);
      saveTrades();
      renderTrades();
    });
  });