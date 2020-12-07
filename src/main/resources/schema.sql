CREATE TABLE IF NOT EXISTS RECETTE (
    recette_id SERIAL PRIMARY KEY,
    categorie VARCHAR(150),
    auteur VARCHAR(100),
    nom VARCHAR(250),
    description VARCHAR(3000),
    lien_image VARCHAR(500),
    lien_video VARCHAR(500),
    temps_preparation VARCHAR(50),
    temps_cuisson VARCHAR(50),
    temps_total VARCHAR(50),
    note VARCHAR(50),
    nb_personnes FLOAT
);

CREATE TABLE IF NOT EXISTS INGREDIENT (
    ingredient_id SERIAL PRIMARY KEY,
    recette_id INT,
    nom VARCHAR(250),
    quantite VARCHAR(100),
    lien_image VARCHAR(500),
    FOREIGN KEY (recette_id) references RECETTE(recette_id)
);

CREATE TABLE IF NOT EXISTS ETAPE(
    recette_id INT,
    etape VARCHAR(500),
    FOREIGN KEY (recette_id) references RECETTE(recette_id)
);



/*h2*/
/*

DROP TABLE IF EXISTS RECETTE;

CREATE TABLE IF NOT EXISTS RECETTE (
    recette_id INT AUTO_INCREMENT PRIMARY KEY,
    categorie VARCHAR(150),
    auteur VARCHAR(100),
    nom VARCHAR(250),
    description VARCHAR(3000),
    lien_image VARCHAR(500),
    lien_video VARCHAR(500),
    temps_preparation VARCHAR(50),
    temps_cuisson VARCHAR(50),
    temps_total VARCHAR(50),
    note VARCHAR(50),
    nb_personnes FLOAT
);

CREATE TABLE IF NOT EXISTS INGREDIENT (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    recette_id INT,
    nom VARCHAR(250),
    quantite VARCHAR(100),
    lien_image VARCHAR(500),
    FOREIGN KEY (recette_id) references RECETTE(recette_id)
);

CREATE TABLE IF NOT EXISTS ETAPE(
    recette_id INT,
    etape VARCHAR(500),
    FOREIGN KEY (recette_id) references RECETTE(recette_id)
)

*/
