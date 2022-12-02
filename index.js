/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/
function callApi(){
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(res => res.json())
      .then(data => {
          console.log(data)
          const h4 = document.getElementById('H4').textContent = data.activity
          document.getElementById('body').classList.add('ui')
      })
}

const btn = document.getElementById('btn').addEventListener('click',
callApi
)