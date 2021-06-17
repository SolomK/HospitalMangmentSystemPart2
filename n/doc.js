

const patintList = document.querySelector('.pList')
doc();

function doc() {

    //open the request 
    fetch("http://127.0.0.1:5000/api/Patients")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
          
            posts.forEach(function(post) {
                if (post.status != "seen") {

                    const tr = document.createElement('tr')
                
                    tr.className = 'pInformation';
                    const td1 = document.createElement('td');
                    const td2 = document.createElement('td');
                    const td3 = document.createElement('td');
                    const td4 = document.createElement('td');
                    td1.appendChild(document.createTextNode(post.name));
                    td2.appendChild(document.createTextNode(post.email));
                    td3.appendChild(document.createTextNode(post.status));
                    
                    td4.innerHTML = `<a href="docedit.html?id=${post.PatientId}"><i class="fas fa-edit"></i></a>`
                
                    

                    tr.append(td1,td2,td3,td4);
                    patintList.appendChild(tr);
                }
            
            })
        })
    }
    fetch("http://127.0.0.1:5000/api/session")
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            console.log(posts)
        }

        )