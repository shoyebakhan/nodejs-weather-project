document.addEventListener('DOMContentLoaded', () => {
const submitButton = document.getElementById('submitButton')
const cityname = document.getElementById('cityname')
const city_name = document.getElementById('city_name')

const getInfo=()=>{
    Event.preventDefault();
    alert('hii')
}

// const getInfo= async (event) =>{
//     event.preventDefault();
//     let cityval = cityname.value;
// if(cityval === ""){
//         city_name.innerText=`plzz write the name before the search`;
// }else{
//         try{
//             let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=90e6c4097bc76acc4f2178710d4068a4`;
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(da);
//         }
//         catch{
//         city_name.inerText = `plz enter tha city name properly`;
//         }
//     }
// }

submitButton.addEventListener('click', getInfo);

});