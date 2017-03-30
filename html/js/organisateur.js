

arrayOfProjects = [ ['nomProjet','nomPersonne1', 'nomPersonne1','nomPersonne1','nomPersonne1' ] ]
// Add the contents of options[0] to #foo: 

projectList = document.getElementById('Projets');


function fillProjectList(projectList) {


for(var i = 0; i < arrayOfProjects.length; i++)
	//Add div for materialize.css
	
	var collapsHeader = document.createElement('div');
	collapsHeader.setAttribute("class","collapsible-header");
	collapsHeader.value = projectList[i][0] 
	
	/*var newbadge  = document.createElement('span');
	newbadge.setAttribute("class","new badge");
	newbadge.value = "4"*/
	
	var materialIcons  = document.createElement('i');
	materialIcons.setAttribute("class","material-icons");
	materialIcons.value = "event_note"
	
	var collapsBody = document.createElement('div');
	collapsBody.setAttribute("class","collapsible-body")
	
	var listPeople = document.createElement('ul');

    for(var j = 0; j < (arrayOfProjects.lenght-1); j++) {
        // Create the list item:
        var person = document.createElement('li');
        
        var input = document.createElement('input');
        input.setAttribute("type","checkbox");
        input.setAttribute("class","filled-in");
        input.setAttribute("id","A DEFINIR");
       
		var label = document.createElement('label');
		input.setAttribute("for","A DEFINIR");
		
		
		
		//Mettre les variables qui manquent
		
		<input type="checkbox" class="filled-in" id="filled-in-box1"/><label for="filled-in-box1">Personne 1</label>
        // Set its contents:
        person.value = arrayOfProjects[i][j];

        // Add it to the list:
        listPeople.appendChild(person);
    }
    
	collapsBody.appendChild(listPeople)
	
	collapsHeader.appendChild(materialIcons)
	collapsHeader.appendChild(collapsBody)	

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



