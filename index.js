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
};

add = document.getElementById("add");

add.addEventListener("click", getAndUpdate);