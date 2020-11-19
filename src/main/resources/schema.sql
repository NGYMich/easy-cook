DROP TABLE IF EXISTS RECETTE;

CREATE TABLE IF NOT EXISTS  RECETTE (
    recette_id INT AUTO_INCREMENT PRIMARY KEY,
    categorie VARCHAR(3000),
    nom VARCHAR(250) NOT NULL,
    description VARCHAR(3000),
    lien_image VARCHAR(500),
    lien_video VARCHAR(500),
    temps_preparation VARCHAR(50),
    temps_cuisson VARCHAR(50),
    temps_total VARCHAR(50),
    note VARCHAR(50)
);
