// Adding list in TODO's
    function getAndUpdate()
    {
      console.log("One item added in TODO's list...");
      
      tit = document.getElementById("title").value;
      desc = document.getElementById("description").value;
      
      if(localStorage.getItem('itemsJson') == null)
      {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
      }
      else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
      }
      reloadItemList();
    };

    // featching all the list before and after every action takes place. 
    function reloadItemList()
    {
      if(localStorage.getItem('itemsJson') == null)
      {
        console.log("Your TODO list is empty!");
      }
      else{
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