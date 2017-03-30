

function fillProjectList() {
	
    arrayOfProjects = [ 
    					['0','Projet1','0','Marion'],
    					['0','Projet1','1','Laurent'],
    					['0','Projet1','2','Aiman'],
    					['1','Projet2','3','Jean-Chris'] 
    				];
    				
    projectList = document.getElementById('Projets');
    
    for(var i = 0; i < arrayOfProjects.length; i++) {
    console.log(document.getElementById("idProjet"+arrayOfProjects[i][0]))
    	//Si le projet n'exite pas, on le crée et on rajoute les divs de materialize.css
    	if (!document.getElementById("idProjet"+arrayOfProjects[i][0])) {
			
    		console.log("creation")
    	    var project = document.createElement('li');
    	    project.setAttribute("id","idProjet"+arrayOfProjects[i][0]);
    	    
    	    var collapsHeader = document.createElement('div');
    	    collapsHeader.setAttribute("class","collapsible-header");
    	    collapsHeader.textContent = arrayOfProjects[i][1];
    	    
    	    /*var newbadge  = document.createElement('span');
    	    newbadge.setAttribute("class","new badge");
    	    newbadge.value = "4"*/
    	    
    	    var materialIcons  = document.createElement('i');
    	    materialIcons.setAttribute("class","material-icons");
    	    materialIcons.textContent = "event_note";
    	    
    	    var collapsBody = document.createElement('div');
    	    collapsBody.setAttribute("class","collapsible-body");
    	    
    	    var listPeople = document.createElement('ul');
			listPeople.setAttribute("class","test");
			
			var form = document.createElement("FORM");
			 	    
    	    form.appendChild(listPeople);
    	    collapsBody.appendChild(form);
    		collapsHeader.appendChild(materialIcons);
    		project.appendChild(collapsHeader);
    		project.appendChild(collapsBody);

    		projectList.appendChild(project);
    		console.log("fin_creation")
    	}
    	

    	// Sinon ca existe on recupere les variables sur lesquelles on bosse
    	var project = document.getElementById("idProjet"+arrayOfProjects[i][0]);
    	var listPeople = project.getElementsByClassName("test")[0];
    	var collapsBody = project.getElementsByClassName("collapsible-body")[0];
    	var form = project.getElementsByTagName("FORM")[0];  	
    	
        // add person
        var person = document.createElement('li');
        var input = document.createElement('input');
        input.setAttribute("type","checkbox");
        input.setAttribute("class","filled-in");
        input.setAttribute("id","idPerson"+arrayOfProjects[i][2]);
        
    	var label = document.createElement('label');
    	label.setAttribute("for","idPerson"+arrayOfProjects[i][2]);
    	
        // Set its contents:
        label.textContent = arrayOfProjects[i][3];
		console.log(label.textContent)
		
        // Add it to the list:
        
        person.appendChild(input);
        person.appendChild(label);
        
        listPeople.appendChild(person);
        
        form.appendChild(listPeople);
        
        
        
        console.log('fin')
    
	}
}

function addProject(projectList) {

}	
	
function removeProject(projectList) {

}

function addPerson() {

}

function removePerson() {

}


fillProjectList();

