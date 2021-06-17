
const docList = document.querySelector('.dList')



const patintList = document.querySelector('.pList')

var create = document.querySelector('.createDoc')
create.addEventListener('click',function(e){
    e.preventDefault()
    window.open("AdocAdd.html")

})
// var createp = document.querySelector('.createp')
// createp.addEventListener('click',function(e){
//     e.preventDefault()
//     window.open("ApatientAdd.html")

// })
var createl = document.querySelector('.createl')
createl.addEventListener('click',function(e){
    e.preventDefault()
    window.open("AlabAdd.html")

})
/////////////////////////////////////////////////////////////////////////
doc();

function doc() {

    //open the request 
    fetch("http://127.0.0.1:5000/api/Doctors")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
          
            posts.forEach(function(post) {
                const tr = document.createElement('tr')
               
                tr.className = 'pInformation';
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');

                td1.appendChild(document.createTextNode(post.username));
                td2.appendChild(document.createTextNode(post.email));
                td3.appendChild(document.createTextNode(post.password));
                td4.innerHTML = `<a href="edit.html?id=${post.DoctorId}"><i class="fas fa-edit"></i></a>`
                td5.innerHTML = `<a href="#" ><i class="far fa-trash-alt"></i></a>`
                td5.id = "del"
                tr.append(td1,td2,td3,td4,td5);
                docList.appendChild(tr);
            
            })
        })
    }
    /////////////////////////////////////////////////////////
const labList = document.querySelector('.lList')
lab();

function lab() {

    //open the request 
    fetch("http://127.0.0.1:5000/api/Laboratorists")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
          
            posts.forEach(function(post) {
                const tr = document.createElement('tr')
               
                tr.className = 'pInformation';
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');

                td1.appendChild(document.createTextNode(post.username));
                td2.appendChild(document.createTextNode(post.email));
                td3.appendChild(document.createTextNode(post.password));
                td4.innerHTML = `<a href="edit.html?id=${post.labId}"><i class="fas fa-edit"></i></a>`
                td5.innerHTML = `<a href="#"><i class="far fa-trash-alt"></i></a>`
               
                

                tr.append(td1,td2,td3,td4,td5);
                labList.appendChild(tr);
            
            })
        })
    }
//////////////////////////////////////////////////////////////////////////////
const pharmaList = document.querySelector('.pharmaList')
pharmacy();

function pharmacy() {

    //open the request 
    fetch("http://127.0.0.1:5000/api/Pharmasist")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
          
            posts.forEach(function(post) {
                const tr = document.createElement('tr')
               
                tr.className = 'pInformation';
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');

                td1.appendChild(document.createTextNode(post.username));
                td2.appendChild(document.createTextNode(post.email));
                td3.appendChild(document.createTextNode(post.password));
                td4.innerHTML = `<a href="edit.html?id=${post.pharmaId}"><i class="fas fa-edit"></i></a>`
                td5.innerHTML = `<a href="delete.html?id=${post.pharmaId}"><i class="far fa-trash-alt"></i></a>`

                tr.append(td1,td2,td3,td4,td5);
                pharmaList.appendChild(tr);
            
            })
        })
    }

    /////////////////////////////////////////////////////////////
const pList = document.querySelector('.pList')
patient();

function patient() {

    //open the request 
    fetch("http://127.0.0.1:5000/api/Patients")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
          
            posts.forEach(function(post) {
                const tr = document.createElement('tr')
               
                tr.className = 'pInformation';
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const td4 = document.createElement('td');
                const td5 = document.createElement('td');
            
                td1.appendChild(document.createTextNode(post.name));
                td2.appendChild(document.createTextNode(post.status));
                td3.appendChild(document.createTextNode(post.email));
                td4.innerHTML = `<a href="Apatientedite.html?id=${post.PatientId}"><i class="fas fa-edit"></i></a>`
                td5.innerHTML = `<a href="delete.html?id=${post.PatientId}"><i class="far fa-trash-alt"></i></a>`
        
                tr.append(td1,td2,td3,td4,td5);
                pList.appendChild(tr);
            
            })
        })
    }