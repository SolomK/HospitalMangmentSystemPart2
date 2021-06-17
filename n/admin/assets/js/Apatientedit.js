const urlParams = new URLSearchParams(window.location.search);
const id = String(urlParams.get("id"));
console.log(id)

var namP,userP,emailP,addressP,passP
var form = document.getElementById('form')
var form1 = document.getElementById('form1')

form.addEventListener('submit',function(e){
    e.preventDefault()
    var docname = document.getElementById('docname').value
    var date = document.getElementById('date').value


    fetch(`http://127.0.0.1:5000/api/Patients/${id}`)
    .then(function(res) {
        return res.json(); //return the JSON Promise
    })
    .then(function(posts) {
        //iterate over each post [100 posts]
        fetch(`http://127.0.0.1:5000/api/Patients/${id}`,{
        method:"PUT",
        headers: {
            'Content-Type': "application/json"
        },
        
        body: JSON.stringify({
            
            'status': "unseen",
            'labtest':posts.labtest,
            'result':posts.result,
            'labresult':posts.labresult,
            'docname': docname,
            'date': date,
            

            

        })
        
    })
})
      
location.reload()  
    })
  



   
            
            