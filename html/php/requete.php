<?php

//~ function console($data) {
	//~ echo("<script>console.log(".$data.");</script>");
//~ }

//~ console("hello");

function evaluer($connexion,$context){
    switch ($context['idFonction']){	
        case"addProject":
            addProject($connexion,$context['nomProjet']);
            break;
    	
    	case"removeProject" :
    	    removeProject($connexion,$context['idProject']);
    	    break;
    	
    	case"getPersonnes":
    	    getPersonnes($connexion);
    	    break;
    	
    	case"addPersonToProject":
    	    addPersonToProject($connexion,$context['idProject'],$context['idPersonne']);
    	        break;
    	    	
    	case"removePersonFromProject":
    	    removePersonFromProject($connexion,$context['idPersonne']);
    	        break;
    	    
    	case"getCurrentProjects":
    	    getCurrentProjects($connexion);
    	    break;
        
        case"checkIfProjectExists":
    	    checkIfProjectExists($connexion,$context['nomProjet']);
    	    break;
    	    
    	case"getIdProject":
    	    getIdProject($connexion,$context['nomProjet']);
    	    break;
    	
    	default:
			echo "Exception to put here";
    	    //throw new Exception('Methode inconnue');
    	    break;
		
		}
}



//Connexion au serveur
function connexion() {
	$connexion = pg_connect("host=localhost port=5432 dbname=Application user=postgres password=postgres");

	if(!$connexion) {
		die("Erreur de connexion");
	}
		else {
		return $connexion;
	}
}

//TABLE PROJET

// Insertion d'une ligne dans la table projet 
function addProject($connexion,$nomProjet) {
	$requete = "INSERT INTO projet(nom) VALUES('$nomProjet');";
	$result = pg_query($connexion,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
}

// Suppression d'une ligne dans la table 
function removeProject($connexion,$id) {
	$requete = "DELETE FROM projet WHERE id='$id' ";
	$result = pg_query($connexion,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
}

// Recupere id d'un projet 
function getIdProject($connexion,$nom) {
	$requete = "SELECT id FROM projet WHERE nom LIKE '$nom'";
	$result = pg_query($connexion,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
    else {
        echo pg_fetch_result($result,0,0);
    }
}

//checkIfProjectExists
function checkIfProjectExists($connexion,$nom) {
	$requete = "SELECT EXISTS(SELECT 1 FROM projet WHERE nom='$nom');";
	$result = pg_query($connexion,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
    else {
        echo pg_fetch_result($result,0,0);
    }
}

//TABLE UTILISATEURS

// Insertion d'une ligne dans la table utilisateur


// TABLE PROJETS ET UTILISATEURS

// Ajoute une personne à un projet
function addPersonToProject($connexion,$idProject,$idPersonne) {
	$requete = "INSERT INTO Projet_en_cours(id_projet,id_employe) VALUES($idProject,$idPersonne)";
	$result = pg_query($connexion,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}

}

// Retirer une personne à d'un projet
function removePersonFromProject($connexion,$idPersonne) {
	$requete = "DELETE FROM Projet_en_cours employe WHERE id_employe='$idPersonne'";
	$result = pg_query($connexion,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
}

// Recupère tout les projets en cours
function getCurrentProjects($connexion) {
	$requete = "SELECT * FROM Projet_en_cours";
	$result = pg_query($connexion,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
	else {
		echo json_encode(pg_fetch_all($result));
	}
}


$connexion = connexion();
evaluer($connexion, $_POST);



?>
