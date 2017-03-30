arrayOfProjects = [ ['0','Gui','0','Chat'],['0','Gui','1','Chat'],['0','Gui','2','Chat'],['1','M','0','Chat'] ];

function fillProjectList() {

projectList = document.getElementById('Projets');

for(var i = 0; i < arrayOfProjects.length; i++)

	//Si le projet n'exite pas, on le crée et on rajoute les divs de materialize.css
	if (!document.getElementById(projectList[i][0])) {
		
	    var project = document.createElement('li');
	    project.setAttribute("id",""+arrayOfProjects[i][0]);
	    
	    var collapsHeader = document.createElement('div');
	    collapsHeader.setAttribute("class","collapsible-header");
	    collapsHeader.value = projectList[i][0];
	    
	    /*var newbadge  = document.createElement('span');
	    newbadge.setAttribute("class","new badge");
	    newbadge.value = "4"*/
	    
	    var materialIcons  = document.createElement('i');
	    materialIcons.setAttribute("class","material-icons");
	    materialIcons.value = "event_note";
	    
	    var collapsBody = document.createElement('div');
	    collapsBody.setAttribute("class","collapsible-body");
	    
	    var listPeople = document.createElement('ul');
	    
	    collapsBody.appendChild(listPeople);
		collapsHeader.appendChild(materialIcons);
		collapsHeader.appendChild(collapsBody);	
	}
	else {
		// Sinon ca existe on recupere uniquement listPeople
		var project = document.getElementById(projectList[i][0]);
		var listPeople = project.getElementsByTagName("ul");
	
	}
    // add person:
    var person = document.createElement('li');
    
    var input = document.createElement('input');
    input.setAttribute("type","checkbox");
    input.setAttribute("class","filled-in");
    input.setAttribute("id",""+projectList[i][2]);
    
	var label = document.createElement('label');
	input.setAttribute("for",""+projectList[i][2]);
	
    // Set its contents:
    label.value = arrayOfProjects[i][2];

    // Add it to the list:
    person.appendChild(input);
    person.appendChild(label);
    listPeople.appendChild(person);
    
}

function createIdPerson() {
	
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
