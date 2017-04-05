<?php

function evaluer($connection,$context){
	switch ($context['idFonction']) {
		
	    case "addProject":
	        addProject($connection,$context['nomProjet']);
	        break;
	
	    case "removeProject":
	        removeProject($connection,$nomProjet);
	        break;
	
	    case "getPersonnes":
	        getPersonnes($connection);
	        break;
	
		case "addPersonToProject":
	        addPersonToProject($connection,$idProject,$nomProjet,$idPersonne,$nomPersonne);
	        break;
	
	 	case "getCurrentProjects":
	        getCurrentProjects($connection);
	        break;
        
        case "getIdProject":
	        getIdProject($connection,$nomProjet);
	        break;
	
		default:
			throw new Exception('Methode inconnue');
			break;
	}
}

//Connexion au serveur
function connection() {
	$link = pg_connect ("host=localhost port=5432 dbname=Application user=postgres password=postgres");

	if(!$link) {
		die ("Erreur de connexion");
	}
		else {
		return $links;
	}
}

//TABLE PROJET

// Insertion d'une ligne dans la table projet 
function addProject($connection,$nomProjet) {
	$requete = "INSERT INTO Projet VALUES($nomProjet)";
	$result = pg_query($link,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
}

// Suppression d'une ligne dans la table 
function removeProject($connection,$nom) {
	$requete = "DELETE FROM projet WHERE nom LIKE '$nom' ";
	$result = pg_query($connection,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
}

// Suppression d'une ligne dans la table 
function getIdProject($connection,$nom) {
	$requete = "SELECT id FROM projet WHERE nom LIKE '$nom'";
	$result = pg_query($connection,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
    else {
        return pg_fetch_result ($result,0,0)
    }
}

//TABLE UTILISATEURS

// Insertion d'une ligne dans la table projet 
function getPersonnes($connection) {
	$requete = "SELECT id, nom, prenom, FROM employe";
	$result = pg_query($connection,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
	else {
		return pg_fetch_all($result);
	}
}

// TABLE PROJETS ET UTILISATEURS

// Ajoute une personne à un projet
function addPersonToProject($connection,$idProject,$nomProjet,$idPersonne,$nomPersonne) {
	$requete = "INSERT INTO Projet_en_cours VALUES($idProject,$nomProjet,$idPersonne,$nomPersonne)";
	$result = pg_query($connection,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
}

// Recupère tout les projets en cours
function getCurrentProjects($connection) {
	$requete = "SELECT * FROM Projet_en_cours";
	$result = pg_query($connection,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
	else {
		return pg_fetch_all($result);
	}
}


$link = connection();
evaluer($link, $_POST);

?>
