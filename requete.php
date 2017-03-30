<?php
//connexion au serveur
$link = pg_connect ("host=localhost port=5432 dbname=Application user=postgres password=postgres");

if(!$link){
  die ("Erreur de conexion");
}
  else{
    echo "Succès de connexion";
  }

/*//TABLE PROJET

//insertion d'une ligne dans la table projet 

$requeteInsert = "INSERT INTO Projet
                  VALUES(1,'fkkf', 'fllfi', 'kfkfk')";
pg_query($link,$requeteInsert);

// suppression d'une ligne dans la table 
$requeteDelete = "DELETE FROM projet WHERE nom like 'fkkf' ";
pg_query($link,$requeteDelete);
*/

//TABLE UTILISATEURS

//Afficher tous les utilisateurs

$requete = "SELECT id, nom, prenom, FROM employe";

if($result = pg_query($link, $requete)) {
            while($ligne = pg_fetch_assoc($result)) {
                $nom1 = $ligne["nom"];
                $prenom1 = $ligne["prenom"];
            
                echo "<table><tr><td> ".$nom1." ".$prenom1."</table></tr></td>" ;
                
                //"<option value='" .$id. "'>" .$employe. "</option>" 
                                   
            }
        }


// TABLE PROJETS ET UTILISATEURS

$requeteInsert = "INSERT INTO Projet_en_cours
                  VALUES(id_projet, 'nomprojet', 'id_employe', 'nom_employe')";



pg_query($link,$requeteInsert);
*/
?>
