

function fillProjectList() {
	
	// tableau de test
    arrayOfProjects = [ 
    					['0','Projet1','0','Marion'],
    					['0','Projet1','1','Laurent'],
    					['0','Projet1','2','Aiman'],
    					['1','Projet2','3','Jean-Chris'] 
    				];
    // On récupère l'objet liste qui contient tout les futurs projets				
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
        var person = document.createElement('li');
        
        // Créé un élément checkbox pour supprimer ultérieurement une personne
        var input = document.createElement('input');
        input.setAttribute("type","checkbox");
        input.setAttribute("class","filled-in");
        input.setAttribute("id","idPerson"+arrayOfProjects[i][2]);
        
        //Créé un élément label obligatoire pour aller avec l'input
    	var label = document.createElement('label');
    	label.setAttribute("for","idPerson"+arrayOfProjects[i][2]);
    	
        // Ajoute le nom au label:
        label.textContent = arrayOfProjects[i][3];
		
        // Ajoute chaque noeud à son parent 
        person.appendChild(input);
        person.appendChild(label);
        listPeople.appendChild(person);
        form.appendChild(listPeople);
    
	}
}

function addProject(projectList) {
	projectList = document.getElementById('Projets');
	



}	
	
function removeProject(projectList) {
	// On récupère l'objet liste qui contient tout les futurs projets				
    projectList = document.getElementById('Projets');
    
    // Trouver le projet actif
    element = projectList.removeChild(projectList.querySelector('[class="active"]'));
    
    // Ne pas oublier de mettre a jour la bdd
}

function addPerson() {

}

function removePerson() {

}

setListeners {
	document.addEventListener
}

fillProjectList();

