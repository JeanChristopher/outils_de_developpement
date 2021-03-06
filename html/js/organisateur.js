
// Charge la liste des projets 
function fillProjectList() {
	
	var arrayOfProjects =new Array();
    var features;
    var nom;
    
    //Recupere la table projet en cours de la bdd
    var ajax1 = new XMLHttpRequest();
	ajax1.open('POST', 'php/requete.php', true);
	ajax1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	ajax1.addEventListener('readystatechange',  function(e) {
		if(ajax1.readyState == 4 && ajax1.status == 200) {
            features = JSON.parse(ajax1.responseText);
            var option = document.getElementById("selection")
            
            for (var i = 0; i < features.length; i++ ){
				  arrayOfProjects.push([features[i].id_projet,features[i].nom_projet,features[i].id_employe,features[i].nom_employe,features[i].prenom_employe]);       
            }
            
    // On récupère l'objet liste du dom qui contient tout les futurs projets				
    projectList = document.getElementById('Projets');
    
    // boucle sur le tableau de la bdd
    for(var i = 0; i < arrayOfProjects.length; i++) {
		
    	//Si le projet n'exite pas
    	if (!document.getElementById("idProjet"+arrayOfProjects[i][0])) {
			
			// On créé un élément de la liste = un projet
    	    var project = document.createElement('li');
    	    // On lui donne le même id que celui de la bdd avec le prefix idProjet
    	    project.setAttribute("id","idProjet"+arrayOfProjects[i][0]);
    	    
    	    // Div materialize css
    	    var collapsHeader = document.createElement('div');
    	    collapsHeader.setAttribute("class","collapsible-header");
    	    collapsHeader.textContent = arrayOfProjects[i][1];
    	    
			// Div materialize css
    	    var materialIcons  = document.createElement('i');
    	    materialIcons.setAttribute("class","material-icons");
    	    materialIcons.textContent = "event_note";
			// Div materialize css    	    
    	    var collapsBody = document.createElement('div');
    	    collapsBody.setAttribute("class","collapsible-body");
			
			// Créé la liste des personnes qui vont participer au projet    	    
    	    var listPeople = document.createElement('ul');
			listPeople.setAttribute("class","listPeople");
			
			// Créé un formulaire pour exploiter les tick et le php (encore à définir)
			var form = document.createElement("FORM");
			
			// On ajoute chaque noeud à son parent
    	    form.appendChild(listPeople);
    	    collapsBody.appendChild(form);
    		collapsHeader.appendChild(materialIcons);
    		project.appendChild(collapsHeader);
    		project.appendChild(collapsBody);
			projectList.appendChild(project);
    	}
    	

    	// On récupère les variables sur lequels on travaille
    	var project = document.getElementById("idProjet"+arrayOfProjects[i][0]);
    	var listPeople = project.getElementsByClassName("listPeople")[0];
    	var collapsBody = project.getElementsByClassName("collapsible-body")[0];
    	var form = project.getElementsByTagName("FORM")[0];  	
    	
        // Crée un nouvel élément de liste, correspond à une personne
        var personne = document.createElement('li');
        
        // Créé un élément checkbox pour supprimer ultérieurement une personne
        var input = document.createElement('input');
        input.setAttribute("type","checkbox");
        input.setAttribute("class","filled-in");
        input.setAttribute("id",idProject+"idPersonne"+arrayOfProjects[i][2]);
        input.addEventListener("click",activDesactivBoutonSupprPerso);
        
        //Créé un élément label obligatoire pour aller avec l'input
    	var label = document.createElement('label');
    	label.setAttribute("for",idProject+"idPersonne"+arrayOfProjects[i][2]);
    	
        // Ajoute le nom au label:
        label.textContent = arrayOfProjects[i][3]+" "+arrayOfProjects[i][4];
		
        // Ajoute chaque noeud à son parent 
        personne.appendChild(input);
        personne.appendChild(label);
        listPeople.appendChild(personne);
        form.appendChild(listPeople);
    
	}
            
            
            

		}        
	});
	
	var data = "idFonction=getCurrentProjects";
	ajax1.send(data);	
	
}

// Ajoute un projet dans la liste des projets
function addProject() {
				
	//    Il y a 3 requetes ajax imbriquées :
	// - la première vérifie que le projet n'existe pas déjà dans la bdd
	// - la seconde créer le projet si 1 ok
	// - la troisière récupère l'id du projet créé dès que 2 est finie 
	
		//Vérifie si projet n'existe pas dans la bdd
		var test;
		var nomProjet = document.getElementById('nom_new_projet').value;

    	var ajax2 = new XMLHttpRequest();
        ajax2.open('POST', 'php/requete.php', true);
        ajax2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        ajax2.addEventListener('readystatechange',  function(e) {
            if(ajax2.readyState == 4 && ajax2.status == 200) {
				test = (ajax2.responseText == 't');
				console.log(test)
				if (!test) {
					//Si le projet n'existe pas, on le crée alors.

					//Requete ajax pour créer le projet dans la bdd
					var ajax = new XMLHttpRequest();
					ajax.open('POST', 'php/requete.php', true);
					ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					ajax.addEventListener('readystatechange',  function(e) {
						if(ajax.readyState == 4 && ajax.status == 200) {  
					
						// Si la requete est correcte, alors on ajoute le projet au dom
						var idRetourne;
						//Recupérer l'id du projet généré par le sgbd 
						var ajax1 = new XMLHttpRequest();
						ajax1.open('POST', 'php/requete.php', true);
						ajax1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						ajax1.addEventListener('readystatechange',  function(e) {
							if(ajax1.readyState == 4 && ajax1.status == 200) {
								
								var idRetourne = ajax1.responseText
								
								// DOM
								projectList = document.getElementById('Projets');
										
								// On créé un élément de la liste = un projet
								var project = document.createElement('li');
								
								// On lui donne le même id que celui de la bdd avec le prefix idProjet
								project.setAttribute("id","idProjet"+idRetourne);
								
								// Div materialize css
								var collapsHeader = document.createElement('div');
								collapsHeader.setAttribute("class","collapsible-header");
								collapsHeader.textContent = nomProjet ;
								
								// Div materialize css
								var materialIcons  = document.createElement('i');
								materialIcons.setAttribute("class","material-icons");
								materialIcons.textContent = "event_note";
								// Div materialize css    	    
								var collapsBody = document.createElement('div');
								collapsBody.setAttribute("class","collapsible-body");
								
								// Créé la liste des personnes qui vont participer au projet    	    
								var listPeople = document.createElement('ul');
								listPeople.setAttribute("class","listPeople");
								
								// Créé un formulaire pour exploiter les tick et le php (encore à définir)
								var form = document.createElement("FORM");
								
								// On ajoute chaque noeud à son parent
								form.appendChild(listPeople);
								collapsBody.appendChild(form);
								collapsHeader.appendChild(materialIcons);
								project.appendChild(collapsHeader);
								project.appendChild(collapsBody);
								projectList.appendChild(project);
								
							}        
						});
					
						var data = "idFonction=getIdProject&nomProjet="+nomProjet;
						ajax1.send(data); 
					
						}        
					});
					
					var data = "idFonction=addProject&nomProjet="+nomProjet;
					ajax.send(data);
						
				}
				else {
						
						// !!(opt) Changer la couleur du bouton en rouge
				}

	    	}        
        });
  
        var data = "idFonction=checkIfProjectExists&nomProjet="+nomProjet;
        ajax2.send(data);
        
        //Disable le bouton projet puisque le champs est vide
        var elmtNomNewProjet = document.getElementById("nom_new_projet");
		elmtNomNewProjet.value = "";
		elmtNomNewProjet.className="validate";
		var elmtBtnAjoutPerso = document.getElementById("BtnAjoutPerso");
        
}

//Retire un projet
function removeProject() {
	// On récupère l'objet liste qui contient tout les futurs projets				
    var projectList = document.getElementById('Projets');
    // Trouver le projet actif
    var nomProjet = projectList.querySelector('[class="active"]');
    // Supprimer le projet
    element = projectList.removeChild(projectList.querySelector('[class="active"]'));
    
    //Recupere l'id contenue dans le noeud
    var idProject = nomProjet.id.replace('idProjet','');
	// Supprime de la bdd
	var ajax1 = new XMLHttpRequest();
	ajax1.open('POST', 'php/requete.php', true);
	ajax1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	ajax1.addEventListener('readystatechange',  function(e) {
		if(ajax1.readyState == 4 && ajax1.status == 200) {
			
		}        
	});
	
	//Disable le bouton supprimer projet puisque qu'aucun projet n'est selectionné
	var data = "idFonction=removeProject&idProject="+idProject;
	ajax1.send(data);
	var elmtBtnSuppProjet = document.getElementById("BtnSuppProjet");
	var elmtBtnAjoutPerso = document.getElementById("BtnAjoutPerso");
	
	elmtBtnSuppProjet.className = "waves-effect waves-light btn disabled";
	elmtBtnAjoutPerso.className = "waves-effect waves-light btn disabled"; 
    
}
// Charge la liste des personnes
function fillPeopleList() {
    
    var features;
    var nom;
    
    var ajax1 = new XMLHttpRequest();
	ajax1.open('POST', 'php/requete.php', true);
	ajax1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	ajax1.addEventListener('readystatechange',  function(e) {
		if(ajax1.readyState == 4 && ajax1.status == 200) {
            features = JSON.parse(ajax1.responseText);
            var option = document.getElementById("selection")
              
            for (var i = 0; i < features.length; i++ ){

                  var personne = document.createElement('option');
                  personne.setAttribute("value","idPersonne"+features[i].id);
                  personne.textContent= features[i].nom+" "+features[i].prenom;
                  console.log(personne);
                  option.appendChild(personne);
                  
                    
            }
              $(document).ready(function() {
					$('select').material_select();
				});
    

		}        
	});
	
	var data = "idFonction=addPersonTolist";
	ajax1.send(data); 
    


}

// Ajoute une personne a projet 	
function addPersonne() {
	// On récupère l'objet liste qui contient tout les futurs projets				
    var projectList = document.getElementById('Projets');
    // Trouver le projet actif
    var nomProjet = projectList.querySelector('[class="active"]');
        
    //Recupere l'id contenue dans le noeud
    var idProject = nomProjet.id.replace('idProjet','');
    
    //Recupère le choix de la personne
    var e = document.getElementById("selection");
    //Recupere l'id contenue dans le noeud
	var idPersonne = e.options[e.selectedIndex].value.replace('idPersonne','');
	
	// -> !!! (opt) Regarder si on ne peut pas retirer tout les éléments présents de la liste des choix
	
    // On créé un élément de la liste = un projet
    console.log("test pour vérifier pourquoi creation de n personne parfois...")
    var personne = document.createElement('li');
    
    // Créé un élément checkbox pour supprimer ultérieurement une personne
    var input = document.createElement('input');
    input.setAttribute("type","checkbox");
    input.setAttribute("class","filled-in");
    input.setAttribute("id",idProject+"idPersonne"+idPersonne);
    input.addEventListener("click",activDesactivBoutonSupprPerso);
    
    //Créé un élément label obligatoire pour aller avec l'input
    var label = document.createElement('label');
    label.setAttribute("for",idProject+"idPersonne"+idPersonne);
    
    // Ajoute le nom au label:
    label.textContent = e.options[e.selectedIndex].text;
    
    var listPeople = nomProjet.getElementsByClassName("listPeople")[0];
    // Ajoute chaque noeud à son parent 
    personne.appendChild(input);
    personne.appendChild(label);
    listPeople.appendChild(personne);
    
    //Ajoute une personne dans un projet en cours dans la bdd
    var ajax1 = new XMLHttpRequest();
	ajax1.open('POST', 'php/requete.php', true);
	ajax1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	ajax1.addEventListener('readystatechange',  function(e) {
		if(ajax1.readyState == 4 && ajax1.status == 200) {
			console.log("fini");
		}        
	});
	
	var data = "idFonction=addPersonToProject&idProject="+idProject+"&idPersonne="+idPersonne;
	ajax1.send(data); 
    
}

// Retire une personne
function removePersonne() {
	
	// On récupère l'objet liste qui contient tout les futurs projets				
    var projectList = document.getElementById('Projets');
    // Trouver le projet actif
    var nomProjet = projectList.querySelector('[class="active"]');
    // Supprimer le projet
    var checkedBoxes = nomProjet.querySelectorAll('input[class=filled-in]:checked');

	var projetToRemove = '(';
	for (var i = 0; i < checkedBoxes.length; i++){
		projetToRemove = projetToRemove + String(checkedBoxes[i].getAttribute("id").replace(/\d+idPersonne/,'')+",");
	}
	//Retire la derniere virgule
	projetToRemove = projetToRemove.slice(0,-1) + ')'
	
	console.log(projetToRemove)
	
	var ajax1 = new XMLHttpRequest();
	ajax1.open('POST', 'php/requete.php', true);
	ajax1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	ajax1.addEventListener('readystatechange',  function(e) {
		if(ajax1.readyState == 4 && ajax1.status == 200) {
			
		}        
	});
	
	var data = "idFonction=removePersonFromProject&idsPersonne="+projetToRemove;
	ajax1.send(data); 
    
    for (var i = 0; i < checkedBoxes.length; i++){
		checkedBoxes[i].parentNode.parentNode.removeChild(checkedBoxes[i].parentNode);
	}
	var elmtBtnSupprPerso = document.getElementById("BtnSuppPerso");
	elmtBtnSupprPerso.className = "waves-effect waves-light btn disabled";
    
}

fillProjectList()
fillPeopleList();


// Listeners sur les boutons
document.getElementById('okCreerProjet').addEventListener('click', function () { addProject() });
document.getElementById('BtnSuppProjet').addEventListener('click', function () { removeProject() });
document.getElementById('BtnAjoutPerso').addEventListener('click', function () { addPersonne() });
document.getElementById('BtnSuppPerso').addEventListener('click', function () { removePersonne() });


