function formReset() {
  document.querySelector(".search-tab").value="";
}
function buttenReset() {
  document.querySelector(".search-tab").value="";
  document.querySelector(".user-list").remove(); 
}
function searchname(){
  const name=  document.querySelector(".search-tab").value;
 
  console.log( '.name' , name );
    fetch(`https://api.nationalize.io/?name[]=${name}` ,
    {
      method: "GET"
    }
  ) 

      .then((data) => {
     
      return data.json();
    })
    .then((users) => loadUsers(users));
   
    
 }


 function loadUsers(users) {
const userList =document.createElement("div");
userList.className="user-list"
users.forEach((user)=>{
  const userContainer = document.createElement("div");
  userContainer.className="user-container";
  
  userContainer.innerHTML=`
  
  
   <div class="headname"><h1>${user.name}</h1></div>
   <div class= "countryid1"><h2>Country ID:${user.country[0].country_id}</h2>
    <h4>Probability:${user.country[0].probability}</h4></div>
    <div class= "countryid2"><h2>Country ID:${user.country[1].country_id}</h2>
     <h4>Probability:${user.country[1].probability}</h4></div>

 
 
  `;
  
  userList.append(userContainer);
})
document.body.append(userList);
 
}
