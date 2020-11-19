DROP TABLE IF EXISTS RECETTE;

CREATE TABLE IF NOT EXISTS  RECETTE (
    recette_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(250) NOT NULL,
    description VARCHAR(3000),
    lien_image VARCHAR(500),
    lien_video VARCHAR(500),
    temps_preparation INT,
    temps_cuisson INT,
    note VARCHAR(50)
);
