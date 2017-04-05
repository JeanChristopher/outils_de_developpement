<?php

//Connexion au serveur
function connection {
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
function addProject($connection,$var1,$var2,$var3,$var4) {
	$requete = "INSERT INTO Projet VALUES($var1,$var2,$var3,$var4)";
	$result = pg_query($link,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
	}
}

// Suppression d'une ligne dans la table 
function removeProject($connection,$nom) {
	$requete = "DELETE FROM projet WHERE nom like '$nom' ";
	$result = pg_query($connection,$requete);
	if (!$result) {
		echo "Une erreur s'est produite.\n";
		exit;
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

?>
