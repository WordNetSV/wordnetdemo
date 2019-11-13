// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAq0wkR2NFSIrGF7DFiVkKcsgS9qhoMttE',
    authDomain: 'wordnet-electron.firebaseapp.com',
    projectId: 'wordnet-electron'
  });
  
  var db = firebase.firestore();

  function guardar(){
      //cambiar1
      var nombre = document.getElementById("nombre").value;
      var dir = document.getElementById("dir").value;
      
      var direccion = document.getElementById("direccion").value;
      var departamento = document.getElementById("departamento").value;
      var registro = document.getElementById("registro").value;
      var nit = document.getElementById("nit").value;
      var gi = document.getElementById("gi").value;
      var phone = document.getElementById("phone").value;
     
    

      
    db.collection("client1p").add({
        //cambiar2
        nombre: nombre,
        dir: dir,
        direccion: direccion,
        departamento:departamento,
        registro: registro,
        gi: gi,
        phone: phone,
        nit: nit
    
     
        
        
       
    })
    .then(function(docRef) {
        //cambiar3
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("nombre").value = "";
        document.getElementById("dir").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("departamento").value = "";
        document.getElementById("registro").value = "";
        document.getElementById("nit").value = "";
        document.getElementById("gi").value = "";
        document.getElementById("phone").value = "";
            
      
      
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });test.firestore.js
  }

 //tabla de datos
 var tabla = document.getElementById('tabla');
 db.collection("client1p").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        //cambiar4
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().dir}</td>
        
        <td>${doc.data().direccion}</td>
        <td>${doc.data().departamento}</td>
        <td>${doc.data().registro}</td>
        <td>${doc.data().gi}</td>
        <td>${doc.data().phone}</td>
        <td>${doc.data().nit}</td>
    
      
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td><button class="btn btn-info"  onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().dir}','${doc.data().direccion}','${doc.data().departamento}','${doc.data().registro}','${doc.data().gi}','${doc.data().phone}','${doc.data().nit}')">Nueva</button></td>
        
        </button></td>
      </tr>
      `
    });
});

//borrar datos
function eliminar(id){
    db.collection("client1p").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });test.firestore.js
}

//edit

//cambiar5
function editar(id,nombre,dir,direccion,departamento,registro,gi,phone,nit) {
//cambiar 6
  document.getElementById('nombre').value = nombre;
    document.getElementById('dir').value = dir;
   
    document.getElementById('direccion').value = direccion;
    document.getElementById('departamento').value = departamento;
    document.getElementById('registro').value = registro;
    document.getElementById('gi').value = gi;
    document.getElementById('phone').value = phone;
   
    document.getElementById('nit').value = nit;
    
    
    var boton = document.getElementById('boton');
    boton.innerHTML = 'editar';

    boton.onclick = function () {
        var washingtonRef = db.collection("client1p").doc(id);

        // Set the "capital" field of the city 'DC'
        ///cambiar8

        var nombre = document.getElementById('nombre').value;
        var dir = document.getElementById('dir').value;
        var direccion = document.getElementById('direccion').value;
        var departamento = document.getElementById('departamento').value;
        var registro = document.getElementById('registro').value;
        
        var gi = document.getElementById('gi').value;
        var phone = document.getElementById('phone').value;
       
        var nit = document.getElementById('nit').value;
    
        
        

        return washingtonRef.update({
            nombre: nombre,
            dir: dir,
            direccion: direccion,
            departamento: departamento,
            registro: registro,
            gi: gi,
            phone: phone,
            
          
            
            nit: nit
           
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });test.firestore.js
        
        }
    }

    
   
    firebase.firestore().enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });
  // Subsequent queries will use persistence, if it was enabled successfullytest.firestore.js
    

  db.collection("client1p").where("state", "==", "CA")
  .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
              console.log("New city: ", change.doc.data());
          }

          var source = snapshot.metadata.fromCache ? "local cache" : "server";
          console.log("Data came from " + source);
      });
  });test.firestore.js
  
  