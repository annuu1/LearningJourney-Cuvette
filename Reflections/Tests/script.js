const tradeTable =  document.getElementById("trade-table")
const tradeTableHead = document.getElementById("table-head")
const tradeTableBody = document.getElementsByTagName("tbody")[0]

let tradeTableHeaders = ["Roll No.", "Name", "class"]
let tradeTableRows = [
    {"Roll No.": '1', 'Name':"bindu","class":'6th'},
    {"Roll No.": '2', 'Name':"bindu","class":'6th'},
    {"Roll No.": '3', 'Name':"bindu","class":'6th'}
    ]

loadTable()
renderColumnsList()

let addHeaderBtn = document.getElementById("add-header-btn")

function renderColumnsList() {
    const columnsList = document.getElementById("table-columns");
    columnsList.innerHTML = "";
    
    tradeTableHeaders.forEach((header, index) => {
        const column = document.createElement("div");
        column.classList.add("column");
        column.innerHTML = `
        <input type="text" value="${header}" class="column-input">
        <button class="column-btn" data-index="${index}">Delete</button>
        `;
        columnsList.appendChild(column);

        // Add event listener to the delete button
        const deleteButton = column.querySelector(".column-btn");
        deleteButton.addEventListener("click", deleteColumn);
    });

    const addColumn = document.createElement("div");
    addColumn.innerHTML = `
    <input type="text" id='header-name'>
    <input type="button" value="Add Header" id="add-header-btn">
    `;
    columnsList.appendChild(addColumn);
    
    // Re-attach the add header button event listener
    const addHeaderBtn = document.getElementById("add-header-btn");
    addHeaderBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let newHeader = document.querySelector("#header-name").value;
        if (tradeTableHeaders.includes(newHeader)) return;
        if (newHeader) {
            tradeTableHeaders.push(newHeader);
        }
        loadTable();
        renderColumnsList(); // Re-render the columns list to update indices
    });
}

function deleteColumn(event){
    const column = event.target.parentNode
    const index = column.querySelector(".column-btn").getAttribute("data-index")
    tradeTableHeaders.splice(index, 1)
    renderColumnsList()
    loadTable()
}


function loadTable(){
    tradeTableHead.innerHTML= ''
    tradeTableHeaders.forEach((header)=>{
        const th = document.createElement("th")
        th.innerText = header;
        tradeTableHead.appendChild(th)
    })
    tradeTableBody.innerHTML = ''
    tradeTableRows.forEach((row)=>{
        const tr = document.createElement('tr')
        tradeTableHeaders.forEach((header)=>{
            const td = document.createElement('td')
            td.innerText = row[header] || ""
            tr.appendChild(td)
        })
        tradeTableBody.appendChild(tr)
    })
}
addHeaderBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let newHeader  =  document.querySelector("#header-name").value
    if(tradeTableHeaders.includes(newHeader)) return;
    if(newHeader){
        tradeTableHeaders.push(newHeader)
    }
    loadTable()
})
