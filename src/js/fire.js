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
      var gi = document.getElementById("gi").value;
      var cp = document.getElementById("cp").value;
      var vc = document.getElementById("vc").value;
      var des = document.getElementById("des").value;
      var des2 = document.getElementById("des2").value;
      var des3 = document.getElementById("des3").value;
      var total = document.getElementById("total").value;
      var des4 = document.getElementById("des4").value;
      var des5 = document.getElementById("des5").value;
      var des6 = document.getElementById("des6").value;
      var des7 = document.getElementById("des7").value;
      var des8 = document.getElementById("des8").value;
      var des9 = document.getElementById("des9").value;
      var des10 = document.getElementById("des10").value;
      var des11 = document.getElementById("des11").value;
    

      
    db.collection("public").add({
        //cambiar2
        nombre: nombre,
        dir: dir,
        direccion: direccion,
        departamento:departamento,
        registro: registro,
        gi: gi,
        cp: cp,
        vc: vc,
        des: des,
        des2: des2,
        des3: des3,
        des4: des4,
        des5: des5,
        des6: des6,
        des7: des7,
        des8: des8,
        des9: des9,
        des10: des10,
        des11: des11
        
        
       
    })
    .then(function(docRef) {
        //cambiar3
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("dir").value = "";
        document.getElementById("nombre").value = "";
        
        document.getElementById("direccion").value = "";
        
        document.getElementById("registro").value = "";
        document.getElementById("gi").value = "";
        document.getElementById("vc").value = "";
        document.getElementById("des").value = "";
        document.getElementById("des2").value = "";
        document.getElementById("des3").value = "";
        document.getElementById("des4").value = "";
        document.getElementById("des5").value = "";
        document.getElementById("des6").value = "";
        document.getElementById("des7").value = "";
        document.getElementById("des8").value = "";
        document.getElementById("des9").value = "";
        document.getElementById("des10").value = "";
        document.getElementById("des11").value = "";
      
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });test.firestore.js
  }

 //tabla de datos
 var tabla = document.getElementById('tabla');
 db.collection("public").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        //cambiar4
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
       
       
       
        <td>${doc.data().nombre}</td>
        <td>${doc.data().dir}</td>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().direccion}</td>
        <td>${doc.data().registro}</td>
        <td>${doc.data().gi}</td>
        
        <td>${doc.data().des}</td>
        <td>${doc.data().des2}</td>
        <td>${doc.data().des3}</td>
        <td>${doc.data().des4}</td>
        <td>${doc.data().des5}</td>
        <td>${doc.data().des6}</td>
        <td>${doc.data().des7}</td>
        <td>${doc.data().des8}</td>
        <td>${doc.data().des9}</td>
        <td>${doc.data().des10}</td>
        <td>${doc.data().des11}</td>
       
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
      </tr>
      `
    });
});

//borrar datos
function eliminar(id){
    db.collection("public").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });test.firestore.js
}

//edit

//cambiar5
function editar(id,nombre,dir,fa,gi,vc) {
//cambiar 6
  document.getElementById('nombre').value = nombre;
    document.getElementById('dir').value = dir;
   
    document.getElementById('gi').value = gi;
    document.getElementById('vc').value = vc;
    
    var boton = document.getElementById('boton');
    boton.innerHTML = 'editar';

    boton.onclick = function () {
        var washingtonRef = db.collection("public").doc(id);

        // Set the "capital" field of the city 'DC'
        ///cambiar8

        var nombre = document.getElementById('nombre').value;
        var dir = document.getElementById('dir').value;
    
        var gi = document.getElementById('gi').value;
        var vc = document.getElementById('vc').value;
        

        return washingtonRef.update({
            nombre: nombre,
            dir: dir,
          
            gi: gi,
            vc: vc
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
  // Subsequent queries will use persistence, if it was enabled successfully


  // The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
// for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
// to disable clean-up.
firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  });
  
  firebase.firestore().enablePersistence()


  db.collection("public").where("state", "==", "CA")
  .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
              console.log("New : ", change.doc.data());
          }

          var source = snapshot.metadata.fromCache ? "local cache" : "server";
          console.log("Data came from " + source);
      });
  });