/*
INSERT INTO RECETTE (categorie, auteur, nom, description, lien_image, lien_video, temps_preparation, temps_cuisson, note)
VALUES ('Plat', 'Mich', 'Blanquette de Veau', 'Une délicieuse blanquette accompagnée de champignons et de carottes.',
        'https://assets.afcdn.com/recipe/20190529/93189_w600.jpg',
        'https://www.youtube.com/watch?v=fW2flBSkv1M&ab_channel=Rujay', '15', '75', '9/10'),

       ('Plat', 'Mich', 'Spaghetti bolognaise',
        'Des pâtes accompagnées d''une délicieuse sauce de Bologne à base de viande de boeuf, de tomates et d''oignons.',
        'https://i.imgur.com/xqnMHjD.jpg',
        'https://www.youtube.com/watch?v=fW2flBSkv1M&ab_channel=Rujay', '15', '15', '7.5/10'),

       ('Plat', 'Mich', 'Riz et cordon bleu', 'La recette de la dèche, incroyablement succulent mais un peu sec.',
        'https://i.imgur.com/yuDFiaA.jpg',
        'https://www.youtube.com/watch?v=fW2flBSkv1M&ab_channel=Rujay', '5', '20', '6/10'),

       ('Plat', 'Mich', 'Banh cuong', 'La meilleure des crêpes, elle est vietnamienne.',
        'https://i.imgur.com/5CkZQsL.jpg',
        'https://www.youtube.com/watch?v=fW2flBSkv1M&ab_channel=Rujay', '60', '15', '9/10'),

       ('Entrée', 'Mich', 'Tomates mozarella',
        'Inspiré par la délicieuse recette de Sovi, la tomate mozarella sera l''entrée parfaite pour vous et vos invités.',
        'https://img.cuisineaz.com/610x610/2018-02-24/i135965-salade-tomate-mozzarella.jpeg',
        'https://www.youtube.com/watch?v=fW2flBSkv1M&ab_channel=Rujay', '60', '0', '9/10');

INSERT INTO INGREDIENT (recette_id, nom, quantite)
VALUES (1, 'blanquette de veau', '1 kg'),
       (1, 'cube de bouillon de légumes', '1'),
       (1, 'carottes', '2'),
       (1, 'oignon', '1'),
       (1, 'champignons coupés', '250g'),
       (1, 'petit pot de crème fraiche', '1'),
       (1, 'citron', '1'),
       (1, 'jaune d''oeuf', '1'),
       (1, 'farine', '30g'),
       (1, 'vin Blanc', '20cl'),
       (1, 'Sel', ''),
       (1, 'Poivre', '')
;
*/

/*
INSERT INTO ETAPE (recette_id, etape)
VALUES (1, 'Saupoudrer de 2 cuillères de farine. Bien remuer.'),
       (1, 'Ajouter 2 ou 3 verres d''eau, les cubes de bouillon, le vin et remuer. Ajouter de l''eau si nécessaire pour couvrir.'),
       (1, 'Couper les carottes en rondelles et émincer les oignons puis les incorporer à la viande, ainsi que les champignons.'),
       (1, 'Laisser mijoter à feu très doux environ 1h30 à 2h00 en remuant.'),
       (1, 'Si nécessaire, ajouter de l''eau de temps en temps.'),
       (1, 'Dans un bol, bien mélanger la crème fraîche, le jaune d’oeuf et le jus de citron. Ajouter ce mélange au dernier moment, bien remuer et servir tout de suite.');

*/
