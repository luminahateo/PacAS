// HOFFMANN Julien
// Abbad-Menival Safouane
// CHESNEAU Helene

// Project PacMan

// Nota Bene
// Avant de commencer, le programme a subit de nombreuses évolutions.
// Nous n'avons pas rajouter les musiques originales, notre demande envers l'editeur et developpeur du jeu d'origine n'ayant pas abouti.
// De plus, programme a ete pensé dans une version qwerty, mais basculer en azerty afin que vous puissiez le tester sans difficultés.


//Debut
var xPac = 500,
 //Position (x,y) de PacMan
 yPac = 200,

 xLevrePac1, yLevrePac1, xLevrePac2, yLevrePac2, CptLevrePac = 0,
 //Positions (x,y) des Levres superieur et inferieur de PaMan //Coordonnees (x,y) pour la creation des carres du decor
 xRec = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 50, 700, 1000, 50, 150, 200, 250, 350, 450, 500, 550, 600, 700, 800, 850, 900, 1000, 50, 350, 450, 800, 1000, 50, 150, 350, 600, 700, 900, 1000, 50, 250, 300, 350, 450, 600, 700, 750, 800, 1000, 50, 150, 350, 450, 600, 700, 900, 1000, 50, 150, 200, 250, 450, 500, 550, 600, 700, 800, 850, 900, 1000, 50, 350, 1000, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
 yRec = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100, 100, 100, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 200, 200, 200, 200, 200, 250, 250, 250, 250, 250, 250, 250, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 350, 350, 350, 350, 350, 350, 350, 350, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 450, 450, 450, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
 //Coordonees (x,y) de la zone de depart des fantomes
 xRecDepart = [500, 550, 500, 550],
 yRecDepart = [350, 300, 300, 350],
 //Coordonnees (x,y) des Boules de points
 xPts = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 750, 800, 850, 900, 950, 100, 300, 400, 650, 750, 950, 100, 150, 200, 250, 300, 400, 550, 600, 650, 700, 750, 850, 900, 950, 100, 200, 250, 300, 400, 450, 500, 550, 650, 750, 800, 850, 950, 100, 150, 200, 400, 650, 850, 900, 950, 100, 200, 250, 300, 400, 650, 750, 800, 850, 950, 100, 300, 350, 400, 650, 750, 950, 100, 150, 200, 250, 300, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950],
 yPts = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 150, 150, 150, 150, 150, 150, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 300, 300, 300, 300, 300, 300, 300, 300, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 400, 400, 400, 400, 400, 400, 400, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450],
 Pts = 0,
 vies = 3,
 Block = 0,
 //Score, Coins
 cptPtsLu = 0,
 listPtsLu = [],
 listBigPts = [],
 // Afin de compter les points et ne pas les recompter si deja , trois variable
 xGhost = 500,
 yGhost = 300,
 IDGhost, // fantome position general
 xBGhost, yBGhost, xPGhost, yPGhost, xRGhost, yRGhost, xOGhost, yOGhost, // Fantome position
 color, rNg = 0; //Variable de deplacement aleatoire pour les fantomes

function Init() {
  listBigPts[0] = 0; //Parametres generaux utilises dans plusieurs functions //1000Pts
  listBigPts[1] = 16;
  listBigPts[2] = 75;
  listBigPts[3] = 91;
  xLevrePac1 = 45; //Position de base de la bouche
  yLevrePac1 = -5;
  xLevrePac2 = 45;
  yLevrePac2 = 45;
}

Start(); //Lanceur du programme

function Background() { //Construction du decor
  RectanglePlein(65, 65, 1000, 500, 'black'); //arriere plan
  for (var i = 0; i < 103; i++) { //Carre Bleu en relief
    RectanglePlein(xRec[i], yRec[i], 40, 40, '#116A8B');
    RectanglePlein(xRec[i], yRec[i], 35, 35, 'blue');
  }
}

function Frontground() { //Construction de l avant du décors
  Ligne(450, 302, 600, 302, 'blue'); //Ligne de separation du box des fantomes et des couloirs de jeu
}

function Points() { //Construction des points dans le decors
  CerclePlein(xPts[0] + 22, yPts[0] + 22, 30, 'orange'); //Les Big points
  CerclePlein(xPts[16] + 22, yPts[16] + 22, 30, 'orange');
  CerclePlein(xPts[75] + 22, yPts[75] + 22, 30, 'orange');
  CerclePlein(xPts[91] + 22, yPts[91] + 22, 30, 'orange');

  for (var i = 0; i < 92; i = i + 1) { //Les points
    CerclePlein(xPts[i] + 22, yPts[i] + 22, 20, 'orange');
    CerclePlein(xPts[i] + 20, yPts[i] + 20, 15, 'yellow');
  }
}

function PacMan() { //Modelisation de PacMan
  CerclePlein(xPac + 22, yPac + 20, 40, '#FEAE0E');
  CerclePlein(xPac + 22, yPac + 20, 38, '#FFD70C');
  CerclePlein(xPac + 22, yPac + 20, 28, '#F8FF29');

  if (CptLevrePac == 0) { //Modelisation de sa bouche via un triangle et un compteur //Compteur 0 et 1, alternant le mouvement de la bouche
    PolygonePlein(xPac + 20, yPac + 20, xPac + xLevrePac1, yPac + yLevrePac1, xPac + xLevrePac2, yPac + yLevrePac2, 'black');
    CptLevrePac = 1; //dernier yPac - 10*n ferma bouche du bas //yPac-5 > yPac+10 etc ferme la bouche du haut
  } else {
    PolygonePlein(xPac + 20, yPac + 20, xPac + xLevrePac1, yPac + yLevrePac1, xPac + xLevrePac2, yPac + yLevrePac2, 'black'); //dernier yPac - 10*n ferma bouche du bas //yPac-5 > yPac+10 etc ferme la bouche du haut
    CptLevrePac = 0;
  }
}

function Keypressed(k) { //Mouvement de PacMan et tout ce qui en est lie //tableaux de colision, ne peut etre mis en variable general car a  chaque input, le programme doit retester les conditions
  var listW = [32, 24, 25, 26, 43, 61, 50, 51, 68, 69, 70, 39, 29, 30, 31, 71, 72, 73, 74, 75, 56, 57, 34, 40, 35, 47, 76, 77, 78];
  var topW = 0; // 0 pas de colision // 1 colision
  var listS = [21, 24, 25, 26, 43, 27, 50, 51, 60, 69, 70, 28, 29, 30, 31, 53, 45, 72, 73, 46, 56, 57, 33, 34, 35, 47, 76, 77, 65, 81];
  var topS = 0;
  var listD = [21, 32, 24, 43, 27, 38, 44, 50, 61, 60, 68, 28, 39, 45, 53, 54, 62, 63, 71, 46, 55, 64, 75, 33, 40, 47, 65, 76, 81];
  var topD = 0;
  var listA = [21, 32, 26, 32, 43, 27, 38, 44, 52, 61, 60, 70, 31, 39, 45, 53, 54, 62, 63, 74, 46, 57, 64, 75, 35, 40, 47, 65, 78, 81];
  var topA = 0;


  if (k == Caractere_vers_Ascii('P')) {
    Initialiser();
    for (i = 0; i < 93; i++) {
      listPtsLu[i] = 0;
      listBigPts[i] = 0;
    }
    xPac = 500, yPac = 200;
    Pts = 0, vies = 3, Block = 1;
    Main();
  }

  //Selon les touches PacMan se deplacera via une grille de 50/50
  //ZQSD sont les touches pour les claviers fr.
  if (Block == 1) {
    if (k == Caractere_vers_Ascii('W')) { // ou W dans sa version qwerty
      if (yPac - 50 != 50) { //Les colisions du jeu //les bornes
        for (var cptW = 0; cptW < 30; cptW = cptW + 1) { //et independante a  chaques carres rencontres en y
          if (yPac - 50 == yRec[listW[cptW]] && xPac == xRec[listW[cptW]]) {
            topW = 1;
          }
        }
      } else {
        topW = 1;
      }

      if (topW == 0) { //Si il n'y a pas de colision
        yPac = yPac - 50; //PacMan avance en pas de 50 en y
        CerclePlein(xPac + 20, yPac + 70, 49, 'black'); //Derriere lui celui-ci masque son passage, ainsi que le contenu de la case (Pts)
        if (CptLevrePac == 1) { //Animation a  chaque pas un mouvement de sa bouche
          xLevrePac1 = 18;
          yLevrePac1 = 0;
          xLevrePac2 = 23;
          yLevrePac2 = 0;
        } else {
          xLevrePac1 = 0;
          yLevrePac1 = 0;
          xLevrePac2 = 50;
          yLevrePac2 = 0;
        }
        PacMan(); //fonction dessin pacman
        Score(); //agrementation des Pts
        MoveGhost(); //quand pacman bouge les fantomes aussi
      }
    }

    if (k == Caractere_vers_Ascii('S')) {
      if (yPac + 50 == yRecDepart[1] && xPac == xRecDepart[1]) {
        topS = 1;
      }
      if (yPac + 50 == yRecDepart[2] && xPac == xRecDepart[2]) {
        topS = 1;
      }

      if (yPac + 50 != 500) {
        for (var cptS = 0; cptS < 31; cptS = cptS + 1) {
          if (yPac + 50 == yRec[listS[cptS]] && xPac == xRec[listS[cptS]]) {
            topS = 1;
          }
        }
      } else {
        topS = 1;
      }

      if (topS == 0) {
        yPac = yPac + 50;
        CerclePlein(xPac + 20, yPac - 30, 49, 'black');
        if (CptLevrePac == 1) {
          xLevrePac1 = 50;
          yLevrePac1 = 50;
          xLevrePac2 = 0;
          yLevrePac2 = 50;
        } else {
          xLevrePac1 = 25;
          yLevrePac1 = 50;
          xLevrePac2 = 18;
          yLevrePac2 = 50;
        }
        PacMan();
        Score();
        MoveGhost();
      }
    }

    if (k == Caractere_vers_Ascii('D')) {

      if (xPac + 50 != 1000) {
        for (var cptD = 0; cptD < 30; cptD = cptD + 1) {
          if (yPac == yRec[listD[cptD]] && xPac + 50 == xRec[listD[cptD]]) {
            topD = 1;
          }
        }
      } else {
        topD = 1;
      }

      if (topD == 0) {
        xPac = xPac + 50;
        CerclePlein(xPac - 30, yPac + 20, 49, 'black');
        if (CptLevrePac == 1) {
          xLevrePac1 = 50;
          yLevrePac1 = 0;
          xLevrePac2 = 50;
          yLevrePac2 = 50;
        } else {
          xLevrePac1 = 50;
          yLevrePac1 = 18;
          xLevrePac2 = 50;
          yLevrePac2 = 23;
        }
        PacMan();
        Score();
        MoveGhost();
      }
    }

    if (k == Caractere_vers_Ascii('A')) { // ou A dans sa version qwerty

      if (xPac - 50 != 50) {
        for (var cptA = 0; cptA < 31; cptA = cptA + 1) {
          if (yPac == yRec[listA[cptA]] && xPac - 50 == xRec[listA[cptA]]) {
            topA = 1;
          }
        }
      } else {
        topA = 1;
      }

      if (topA == 0) {
        xPac = xPac - 50;
        CerclePlein(xPac + 70, yPac + 20, 49, 'black');
        if (CptLevrePac == 1) {
          xLevrePac1 = 0;
          yLevrePac1 = 50;
          xLevrePac2 = 0;
          yLevrePac2 = 0;
        } else {
          xLevrePac1 = 0;
          yLevrePac1 = 23;
          xLevrePac2 = 0;
          yLevrePac2 = 18;
        }
        PacMan();
        Score();
        MoveGhost();
      }
    }
    // quand fantome mange PacMan ?
    if (xBGhost == xPac && yBGhost == yPac) {
      vies = vies - 1;
      // retour au point de depart
      xPac = 500;
      yPac = 200;
      PacMan();
      DrawGhost(xBGhost, yBGhost, 'blue');
    }
    if (xRGhost == xPac && yRGhost == yPac) {
      vies = vies - 1;
      // retour au point de depart
      xPac = 500;
      yPac = 200;
      PacMan();
      DrawGhost(xRGhost, yRGhost, 'red');
    }
    if (xPGhost == xPac && yPGhost == yPac) {
      vies = vies - 1;
      // retour au point de depart
      xPac = 500;
      yPac = 200;
      PacMan();
      DrawGhost(xPGhost, yPGhost, 'pink');
    }
    if (xOGhost == xPac && yOGhost == yPac) {
      vies = vies - 1;
      // retour au point de depart
      xPac = 500;
      yPac = 200;
      PacMan();
      DrawGhost(xOGhost, yOGhost, 'orange');
    }
    Coins();
  }

}



function Ghost() { //Fantome
  IDGhost = 0;
  for (IDGhost = 0; IDGhost < 4; IDGhost++) {
    if (IDGhost == 0) { //Dessin fantome avec pour chacun des varibles différentes.
      color = 'blue';
      xGhost = xBGhost = 500;
      yGhost = yBGhost = 300;
    }
    if (IDGhost == 1) {
      color = 'red';
      xGhost = xRGhost = 550;
      yGhost = yRGhost = 300;
    }
    if (IDGhost == 2) {
      color = 'pink';
      xGhost = xPGhost = 500;
      yGhost = yPGhost = 350;
    }
    if (IDGhost == 3) {
      color = 'orange';
      xGhost = xOGhost = 550;
      yGhost = yOGhost = 350;
    }
    DrawGhost(xGhost, yGhost, color);
  }
}

function DrawGhost(xGhost, yGhost, color) {
  CerclePlein(xGhost + 20, yGhost + 20, 48, color);
  CerclePlein(xGhost + 20 - 14, yGhost + 20 + 15, 20, color);
  CerclePlein(xGhost + 20 + 14, yGhost + 20 + 15, 20, color);
  CerclePlein(xGhost + 20, yGhost + 20, 40, 'black');
  CerclePlein(xGhost + 20 - 14, yGhost + 20 + 15, 12, 'black');
  CerclePlein(xGhost + 20 + 14, yGhost + 20 + 15, 12, 'black');
  CerclePlein(xGhost + 20 + 9, yGhost + 20 - 5, 10, color);
  CerclePlein(xGhost + 20 + 10, yGhost + 20 - 3, 6, 'black');
  CerclePlein(xGhost + 20 - 10, yGhost + 20 - 5, 10, color);
  CerclePlein(xGhost + 20 - 9, yGhost + 20 - 3, 6, 'black');
}

function MoveGhost() {

  var topW = 0; // 0 pas de colision // 1 colision
  var topS = 0;
  var topD = 0;
  var topA = 0;

  var cpt, i;
  var posPtsInTable;
  var xPTS, yPTS;
  var toppointlu = 0; // 0 pas lu // 1 lu
  var toppoint = 0; // 0 petit point // 1 gros point
  // pour les quatre fantomes -> deplacement!!!
  for (IDGhost = 0; IDGhost < 4; IDGhost++) {
    // choix des couleurs des fantomes
    // et correspondance de la position du fantome
    if (IDGhost == 0) {
      color = 'blue';
      xGhost = xBGhost;
      yGhost = yBGhost;
    }
    if (IDGhost == 1) {
      color = 'red';
      xGhost = xRGhost;
      yGhost = yRGhost;
    }
    if (IDGhost == 2) {
      color = 'pink';
      xGhost = xPGhost;
      yGhost = yPGhost;
    }
    if (IDGhost == 3) {
      color = 'orange';
      xGhost = xOGhost;
      yGhost = yOGhost;
    }

    // une fois que l'on connait la position du fantome
    // on regarde si il etait sur un point/gros point
    // que PacMan n'avait pas manger!
    toppointlu = 0;
    toppoint = 0;
    posPtsInTable = -1;
    xPTS = xGhost;
    yPTS = yGhost;

    // 0) cas particulier case depart des fantomes et de PacMan
    if (xPTS == 500 && yPTS == 200) {
      toppointlu = 1;
    }
    if (xPTS == 500 && yPTS == 300) {
      toppointlu = 1;
    }
    if (xPTS == 550 && yPTS == 300) {
      toppointlu = 1;
    }
    if (xPTS == 500 && yPTS == 350) {
      toppointlu = 1;
    }
    if (xPTS == 550 && yPTS == 350) {
      toppointlu = 1;
    }

    // 1) recherche de la position des coordonnes dans la table
    for (cpt = 0; cpt < 93; cpt = cpt + 1) {
      if (xPTS == xPts[cpt] && yPTS == yPts[cpt]) {
        posPtsInTable = cpt;
        cpt = 93;
      }
    }

    if (posPtsInTable != -1) {
      // 2) recherche si gros point
      for (i = 0; i < 4; i = i + 1) {
        if (listBigPts[i] == posPtsInTable) {
          toppoint = 1;
          i = 4;
        }
      }

      // 3) recherche si point lu
      for (i = 0; i < cptPtsLu + 1; i = i + 1) {
        if (listPtsLu[i] == posPtsInTable) {
          toppointlu = 1;
          i = cptPtsLu;
        }
      }
    }
    Ecrire(IDGhost);
    Ecrire("posPtsInTable ", posPtsInTable);
    Ecrire("toppointlu ", toppointlu);

    // aleatoire
    rNg = Hasard(5);

    if (Pts != 0) { // pour le premier tour
      if (Pts > 0 && Pts < 1000) { // pour les premiers tours les fantomes ne bougent pas
        rNg = -1;
      }
      if (Pts >= 1000 && Pts <= 1200) {
        // pour forcer les fantomes a aller en haut en debut de partie
        rNg = 0;
      }
      // vers le haut
      if (rNg == 0) {
        topW = TestHaut();
        if (topW == 1) {
          topD = TestDroit();
        }
        if (topD == 1) {
          topS = TestBas();
        }
        if (topS == 1) {
          topA = TestGauche();
        }
      }

      // vers le bas
      if (rNg == 1) {
        topS = TestBas();
        if (topS == 1) {
          topA = TestGauche();
        }
        if (topA == 1) {
          topW = TestHaut();
        }
        if (topW == 1) {
          topD = TestDroit();
        }

      }

      // vers la droite
      if (rNg == 2) {
        topD = TestDroit();
        if (topD == 1) {
          topS = TestBas();
        }
        if (topS == 1) {
          topA = TestGauche();
        }
        if (topA == 1) {
          topW = TestHaut();
        }
      }

      // vers la gauche
      if (rNg == 3) {
        topA = TestGauche();
        if (topA == 1) {
          topW = TestHaut();
        }
        if (topW == 1) {
          topD = TestDroit();
        }
        if (topD == 1) {
          topS = TestBas();
        }
      }


      // dessin des points
      if (toppointlu == 0) {
        if (toppoint == 1) {
          CerclePlein(xPTS + 22, yPTS + 22, 30, 'orange');
          DrawGhost(xGhost, yGhost, color);
        }
        CerclePlein(xPTS + 22, yPTS + 22, 20, 'orange');
        CerclePlein(xPTS + 20, yPTS + 20, 15, 'yellow');
        DrawGhost(xGhost, yGhost, color);
      }

      // memorisation position du fantome pour la prochaine fois
      if (IDGhost == 0) {
        xBGhost = xGhost;
        yBGhost = yGhost;
      }
      if (IDGhost == 1) {
        xRGhost = xGhost;
        yRGhost = yGhost;
      }
      if (IDGhost == 2) {
        xPGhost = xGhost;
        yPGhost = yGhost;
      }
      if (IDGhost == 3) {
        xOGhost = xGhost;
        yOGhost = yGhost;
      }

    } // fin tant que
    Ecrire("rNg ", rNg);
    Ecrire("topW ", topW);
    Ecrire("topD ", topD);
    Ecrire("topS ", topS);
    Ecrire("topA ", topA);
  } // fin si du premier tour
}



function TestHaut() {
  var listW = [32, 24, 25, 26, 43, 61, 50, 51, 68, 69, 70, 39, 29, 30, 31, 71, 72, 73, 74, 75, 56, 57, 34, 40, 35, 47, 76, 77, 78];
  var topW = 0;
  if (yGhost - 50 != 50) { //les bornes du jeu
    for (var cptW = 0; cptW < 30; cptW = cptW + 1) {
      if (yGhost - 50 == yRec[listW[cptW]] && xGhost == xRec[listW[cptW]]) {
        // si les futures coordonnees du fantome x et y coorespondent a un rectangle du decor
        // le top est passe a colision
        topW = 1;
      }
    }
  }
  // si la future coordonnee du fantome y correspond a la limite du plateau
  else {
    topW = 1;
  }

  if (topW == 0) {
    // si le top est toujours sur pas de colision
    // on deplace le fantome
    yGhost = yGhost - 50;

    CerclePlein(xGhost + 20, yGhost + 70, 51, 'black');
    CerclePlein(xGhost + 20 - 14, yGhost + 70 + 15, 22, 'black');
    CerclePlein(xGhost + 20 + 14, yGhost + 70 + 15, 22, 'black');
    Score();
    DrawGhost(xGhost, yGhost, color);

  }
  return topW;
}

function TestBas() {
  var listS = [21, 24, 25, 26, 43, 27, 50, 51, 60, 69, 70, 28, 29, 30, 31, 53, 45, 72, 73, 46, 56, 57, 33, 34, 35, 47, 76, 77, 65, 81];
  var topS = 0;
  if (yGhost + 50 != 500) { //les bornes du jeu
    for (var cptS = 0; cptS < 31; cptS = cptS + 1) {

      if (yGhost + 50 == yRec[listS[cptS]] && xGhost == xRec[listS[cptS]]) {
        topS = 1;
      }
    }
  } else {
    topS = 1;
  }

  for (var cpts = 1; cpts < 3; cpts = cpts + 1) {
    if (yGhost + 50 == yRecDepart[cpts] && xGhost == xRecDepart[cpts]) {
      topS = 1;
    }
  }

  if (topS == 0) {
    yGhost = yGhost + 50;

    CerclePlein(xGhost + 20, yGhost - 30, 51, 'black');
    CerclePlein(xGhost + 20 - 14, yGhost - 30 + 15, 22, 'black');
    CerclePlein(xGhost + 20 + 14, yGhost - 30 + 15, 22, 'black');
    Score();
    DrawGhost(xGhost, yGhost, color);

  }
  return topS;
}

function TestDroit() {
  var listD = [21, 32, 24, 43, 27, 38, 44, 50, 61, 60, 68, 28, 39, 45, 53, 54, 62, 63, 71, 46, 55, 64, 75, 33, 40, 47, 65, 76, 81];
  var topD = 0;
  if (xGhost + 50 != 1000) { //les bornes du jeu
    for (var cptD = 0; cptD < 30; cptD = cptD + 1) {
      if (yGhost == yRec[listD[cptD]] && xGhost + 50 == xRec[listD[cptD]]) {
        topD = 1;
      }
    }
  } else {
    topD = 1;
  }

  if (topD == 0) {
    xGhost = xGhost + 50;

    CerclePlein(xGhost - 30, yGhost + 20, 51, 'black');
    CerclePlein(xGhost - 30 - 14, yGhost + 20 + 15, 22, 'black');
    CerclePlein(xGhost - 30 + 14, yGhost + 20 + 15, 22, 'black');
    Score();
    DrawGhost(xGhost, yGhost, color);

  }
  return topD;
}

function TestGauche() {
  var listA = [21, 32, 26, 32, 43, 27, 38, 44, 52, 61, 60, 70, 31, 39, 45, 53, 54, 62, 63, 74, 46, 57, 64, 75, 35, 40, 47, 65, 78, 81];
  var topA = 0;
  if (xGhost - 50 != 50) { //les bornes du jeu
    for (var cptA = 0; cptA < 31; cptA = cptA + 1) {

      if (yGhost == yRec[listA[cptA]] && xGhost - 50 == xRec[listA[cptA]]) {
        topA = 1;
      }
    }
  } else {
    topA = 1;
  }

  if (topA == 0) {
    xGhost = xGhost - 50;

    CerclePlein(xGhost + 70, yGhost + 20, 51, 'black');
    CerclePlein(xGhost + 70 - 14, yGhost + 20 + 15, 22, 'black');
    CerclePlein(xGhost + 70 + 14, yGhost + 20 + 15, 22, 'black');
    Score();
    DrawGhost(xGhost, yGhost, color);

  }
  return topA;
}

function Score() { //System Points et affichage
  var cpt, i;
  var topPts = 0;
  var topPtslu = 0;

  for (cpt = 0; cpt < 93; cpt = cpt + 1) { // pour savoir si c est un gros point
    topPts = 0; // pour savoir si j ai deja lu le point
    topPtslu = 0; // recherche si gros point
    for (i = 0; i < 4; i = i + 1) {
      if (listBigPts[i] == cpt) {
        topPts = 1;
      }
    }

    for (i = 0; i < cptPtsLu + 1; i = i + 1) { // recherche si point deja lu
      if (listPtsLu[i] == cpt) {
        topPtslu = 1;
      }
    }
    if (topPts == 1) {
      if (yPac == yPts[cpt] && xPac == xPts[cpt]) {
        if (topPtslu == 1) {
          Pts = Pts;
        } else {
          listPtsLu[cptPtsLu] = cpt;
          cptPtsLu = cptPtsLu + 1;
          Pts = Pts + 1000;
        }
      }
    } else {

      if (yPac == yPts[cpt] && xPac == xPts[cpt]) { // ce n est pas un gros point
        if (topPtslu == 1) {
          Pts = Pts;
        } else {
          listPtsLu[cptPtsLu] = cpt;
          cptPtsLu = cptPtsLu + 1;
          Pts = Pts + 200;
        }
      }
    }
  }

  RectanglePlein(110, 560, 230, 30, 'orange'); //Affichage
  RectanglePlein(105, 555, 230, 30, 'black');
  setCanvasFont('Arial', '20pt', 'bold');
  Texte(130, 580, 'SCORE ' + Pts, 'Orange');
  GameOver();
}

function Start() {

  var goRecx = [400, 450, 500, 550, 600, 650, 700, 750, 400, 750, 400, 750, 400, 750, 400, 750, 400, 750, 400, 450, 500, 550, 600, 650, 700, 750],
   goRecy = [50, 50, 50, 50, 50, 50, 50, 50, 100, 100, 150, 150, 200, 200, 250, 250, 300, 300, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350];

  Initialiser(); //effacement de la zone de jeu
  RectanglePlein(420, 70, 400, 350, 'orange'); //construction de la fenetre de Bienvenue
  RectanglePlein(415, 65, 400, 350, 'black');
  CerclePlein(622, 187, 40, '#FEAE0E'); //Integration de PacMan
  CerclePlein(622, 187, 38, '#FFD70C');
  CerclePlein(622, 187, 28, '#F8FF29');
  PolygonePlein(622, 190, 650, 170, 650, 220, 'black');
  setCanvasFont('Arial', '20pt', 'bold'); //Affichage
  Texte(465, 200, 'Welcome        PacMan', 'Orange');
  setCanvasFont('Arial', '12pt', 'bold'); //Affichage
  Texte(500, 225, 'Press P for play', 'Orange');
  Ligne(400, 230, 615, 230, 'blue');
  Texte(465, 300, 'PacMan move with ZQSD buttons', 'Orange'); // or WASD dans sa version qwerty
  for (i = 0; i < 26; i++) {
    RectanglePlein(goRecx[i], goRecy[i], 40, 40, '#116A8B');
    RectanglePlein(goRecx[i], goRecy[i], 35, 35, 'blue');
  }
}

  function GameOver() {
    var goRecx = [400, 450, 500, 550, 600, 650, 700, 750, 400, 750, 400, 750, 400, 750, 400, 750, 400, 750, 400, 450, 500, 550, 600, 650, 700, 750, 400, 450, 500, 550, 600, 650, 700, 750, 400, 750, 400, 750, 400, 450, 500, 550, 600, 650, 700, 750],
     goRecy = [50, 50, 50, 50, 50, 50, 50, 50, 100, 100, 150, 150, 200, 200, 250, 250, 300, 300, 350, 350, 350, 350, 350, 350, 350, 350, 450, 450, 450, 450, 450, 450, 450, 450, 500, 500, 550, 550, 600, 600, 600, 600, 600, 600, 600, 600];

    if (Pts == 20600 || vies <= 0) { //si les pts totaux sont alors nouvelle fenetre gameover //21600
      Block = 0; // pour ne plus bouger !!!!!!
      Initialiser(); //effacement de la zone de jeu
      RectanglePlein(0, 0, 1500, 800, 'white');
      RectanglePlein(420, 70, 400, 350, 'orange'); //construction de la fenetre de GAMEOVER
      RectanglePlein(415, 65, 400, 350, 'black');
      RectanglePlein(420, 470, 400, 200, 'orange'); //construction de la fenetre de GAMEOVER
      RectanglePlein(415, 465, 400, 200, 'black');
      for (i = 0; i < 46; i++) {
        RectanglePlein(goRecx[i], goRecy[i], 40, 40, '#116A8B');
        RectanglePlein(goRecx[i], goRecy[i], 35, 35, 'blue');
      }
      CerclePlein(622, 187, 40, '#FEAE0E'); //Integration de PacMan dans le GAME OVER
      CerclePlein(622, 187, 38, '#FFD70C');
      CerclePlein(622, 187, 28, '#F8FF29');
      PolygonePlein(622, 190, 650, 170, 650, 220, 'black');

      for (IDGhost = 0; IDGhost < 4; IDGhost++) { //Construction des fantomes pour le GAME OVER
        //Dessin fantome
        if (IDGhost == 0) {
          color = 'blue';
          xGhost = xBGhost = 600;
          yGhost = yBGhost = 300;
        }
        if (IDGhost == 1) {
          color = 'red';
          xGhost = xRGhost = 450;
          yGhost = yRGhost = 300;
        }
        if (IDGhost == 2) {
          color = 'pink';
          xGhost = xPGhost = 500;
          yGhost = yPGhost = 300;
        }
        if (IDGhost == 3) {
          color = 'orange';
          xGhost = xOGhost = 550;
          yGhost = yOGhost = 300;
        }
        CerclePlein(xGhost + 20, yGhost + 20, 48, color);
        CerclePlein(xGhost + 20 - 14, yGhost + 20 + 15, 20, color);
        CerclePlein(xGhost + 20 + 14, yGhost + 20 + 15, 20, color);
        CerclePlein(xGhost + 20, yGhost + 20, 40, 'black');
        CerclePlein(xGhost + 20 - 14, yGhost + 20 + 15, 12, 'black');
        CerclePlein(xGhost + 20 + 14, yGhost + 20 + 15, 12, 'black');
        CerclePlein(xGhost + 20 + 9, yGhost + 20 - 5, 10, color);
        CerclePlein(xGhost + 20 + 10, yGhost + 20 - 3, 6, 'black');
        CerclePlein(xGhost + 20 - 10, yGhost + 20 - 5, 10, color);
        CerclePlein(xGhost + 20 - 9, yGhost + 20 - 3, 6, 'black');
      }
      setCanvasFont('Arial', '20pt', 'bold'); //Affichage
      Texte(500, 200, 'GAME        VER ', 'Orange');
      Texte(500, 250, 'SCORE ' + Pts, 'Orange');
      Texte(475, 535, 'Press P for restart');
      Texte(450, 575, 'Thank you for playing !');


    }

  }



function Coins() { //Nombres de vies
  if (Block == 1) {
    RectanglePlein(800, 560, 230, 30, 'orange'); //Affichage
    RectanglePlein(795, 555, 230, 30, 'black');
    setCanvasFont('Arial', '20pt', 'bold');
    Texte(820, 580, 'COINS ' + vies, 'Orange');
  }
}



function Main() { //Function directrice du programme
  Init();
  Keypressed();
  Background();
  Points();
  PacMan();
  Ghost();
  Score();
  Frontground();
  GameOver();
}
