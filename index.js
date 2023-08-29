// Adding list in TODO's
function getAndUpdate() {
  console.log("One item added in TODO's list...");

  tit = document.getElementById("title").value;
  desc = document.getElementById("description").value;

  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];

    // Checking the title field (it should be not empty)
    if (tit.length === 0) {
      console.log("TODO's list title can't be empty!");
    }
    else {
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    // clearing the input filed after inserting the title.
    let element = document.getElementsByName("clearInput");
    for (let i = 0; i < element.length; i++) {
      element[i].value = null;
    };
  }
  else {
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    // Checking the title field (it should be not empty)
    if (tit.length === 0) {
      console.log("TODO's list title can't be empty!");
    }
    else {
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    // clearing the input field after inserting the description.
    let element = document.getElementsByName("clearInput");
    for (let i = 0; i < element.length; i++) {
      element[i].value = null;
    };
  }
  reloadItemList();
};


//  Deleting the particular TODO list
function deleted(itemIndex) {
  console.log("deleting item!");
  itemJsonArrayStr = localStorage.getItem('itemsJson');
  itemJsonArray = JSON.parse(itemJsonArrayStr);

  // deleting the item element index from the array
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  reloadItemList();
}

// deleting the all TODO's lists
function clearStorage() {
  if (confirm("Once you click ok, It will delete all the TODOs list!")) {
    console.log("Clearing the storage...");
    localStorage.clear();
    reloadItemList();
  }
}

// featching all the list before and after every action takes place. 
function reloadItemList() {
  if (localStorage.getItem('itemsJson') == null) {
    console.log("Your TODO list is empty!");
  }
  else {
    // Populating the table
    let tableBody = document.getElementById("tableBody")
    let str = "";

    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    itemJsonArray.forEach((element, index) => {
      str += `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-primary btn-sm" onclick="deleted(${index})">Delete</button></td>
            </tr>`
    });
    tableBody.innerHTML = str;
  }
}

add = document.getElementById("add");

add.addEventListener("click", getAndUpdate);
reloadItemList();