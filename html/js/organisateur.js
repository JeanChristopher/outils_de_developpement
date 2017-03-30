

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
	materialIcons.value = "filter_drama"
	
	var collapsBody = document.createElement('div');
	collapsBody.setAttribute("class","collapsible-body")
	
	var listPeople = document.createElement('ul');

    for(var j = 0; j < (arrayOfProjects.lenght-1); j++) {
        // Create the list item:
        var person = document.createElement('li');

		//Mettre les variables qui manquent
		
        // Set its contents:
        person.value = arrayOfProjects[i][j];

        // Add it to the list:
        listPeople.appendChild(person);
    }
	collapsBody.appendChild(listPeople)
	
	collapsHeader.appendChild(collapsBody)	
    collapsHeader.appendChild(collapsBody)
    
	

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));

    // Add it to the list:
    list.appendChild(item);
}

function removeProjectFromList(projectList) {

}

function addPerson() {

}

function removePerson() {

}



