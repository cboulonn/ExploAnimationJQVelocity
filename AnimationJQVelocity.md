# Animations avec jQuery et Velocity
	
#### Sommaire

1. Définitions
2. Installation
3. Possibilités d'utilisation
4. Utilisation
5. Exemples
6. Sources

## 1. Définitions
    
Jquery est une librairie de JS qui permet de simplifier l'écriture du code Javascript. Il est notamment utilisé pour créer de l'interaction au sein d'une interface utilisateur.

Velocity est un moteur d'animation web avec la même API que "jQuery's $animate()".
Il peut fonctionner avec ou sans JQuery Plus rapide que JQuery, il permet de mettre en place des animations en couleurs, transformations, boucles, "easing" (assouplissement), support du format SVG (Scalable Vector Graphic), et défilement. C'est une combinaison de JQuery  il est donc possible d'utiliser Velocity en solution toute faite au lieu de créer la votre ( ou de la lier sur JQuery ) : faire des boucles, des retours arrieres, programmer des retards, montrer /cacher des éléments, utiliser des éléments/opérations mathématiques  (+, -, *, /). Velocity remplace tout ce qu'il est possible de faire avec la fonction -animate- de JQuery.  
   
## 2. Installation
   
### **Velocity**

Télécharger les fichiers ici : https://github.com/julianshapiro/velocity

Inclure dans sa page avec cette balise : <script src="js/velocity.js" type="text/javascript"></script>

Remplacer toutes les instances $.animate() de JQuery par $.velocity().

Pour un démarrage rapide, voici le code HTML vous permettant d'accquerir Velocity sans avoir à le télécharger : <script src="//cdn.jsdelivr.net/velocity/1.2.3/velocity.min.js"></script>

Il est possible d'utiliser la console avec npm ou bower : npm install velocity-animate / bower install velocity

### **JQuery**

Télécharger les fichiers ici : http://jquery.com/download/

Inclure dans sa page avec cette balise : <script src="js/jquery.js" type="text/javascript"></script> que vous devez integrer a votre site entre les balises <head> et </head>

Pour un démarrage rapide, voici le code HTML vous permettant d'accquerir jQuery sans avoir à le télécharger : <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" />  

## 3. Possibilités d'utilisation
	
#### 3.1 Possibilités d'animation

Les principaux sont : fading, reversing, scrolling, delaying, looping, sequences.

Animate possible :   http://www.w3schools.com/jquery/jquery_events.asp

Mouse Events : click, dblclick, mouseenter, mouseleave.

Keyboard Events : keypress, keydown, keyup.

Form Events: submit, change, focus, blur.

Document/Window Events : load, resize, scroll, unload

#### 3.2 Possibilités de selecteurs
	
Selecteurs possibles : http://www.w3schools.com/jquery/jquery_selectors.asp

Pour sélectionner une balise :  $("p") pour un paragraphe.

Pour selectionner une classe:  $(".classe")

Pour selectionner un ID : $("#id").

## 4. Utilisation

On utilise Velocity en remplaçant  animate() en JQuery par l'appel de velocity().
Velocity() est syntaxiquement similaire à animate(), on peut donc utiliser le reste de la syntaxe de JQuery.  
 
Par exemple, pour le code utilisant JQuery :
````
$('#element').animate({
    left: '+=50'
}, 1000);
````
On va avoir ce code utilisant Velocity:
````
	$('#element').velocity({
	   left: '+=50'
	}, 1000);
````
L'interet de Velocity.js est qu'il est plus rapide et dans certains cas, il raccourcit le code. Exemple des boucles:
	
Avec JQuery:
````
for (var i = 0; i < 5; i++) {
    $div
	/* Slide the element up by 100px. */
	.animate({ top: -100 })
	/* Then animate back to the original value. */
	.animate({ top: 0 });}
````
Avec Velocity, les boucles consistent simplement en la mise en place de l'option boucle avec un entier égal au nombre de boucles voulues.
	
	$div.velocity(
	  { top: -100 }, 
	  { loop: 5 });
	
## 5. Exemples
#### 5.1  Exemples concrets jQuery: 
````
$("p").dblclick(function(){
    $(this).hide();
});
````
Avec cet exemple nous ciblons tout les "p" et nous exécutons la fonction hide qui cible (this) donc les "p" avec l'action .dblclick (double clic).
````
$("p").on({
mouseenter: function(){
	$(this).css("background-color", "lightgray");
}, 
mouseleave: function(){
	 $(this).css("background-color", "lightblue");
}, 
click: function(){
	(this).css("background-color", "yellow");
} 
});
````
Dans cet exemples il se passe trois animations, avec ".css" nous ajoutons du css lors d'une action précise sur un élément précis.

#### 5.2 Exemples concrets Vélocity : 

````
$div.velocity("slideDown", function() { 
/* Then fade in its children over a duration of 1000ms. */ 
$children.velocity("fadeIn", 1000);
});
````
## 6. Sources et liens utiles

http://codepen.io/collection/tIjGb/ ==> "Velocity.js: The Official Collection" exemples de codes et d'animations avec Vélocity.

http://julian.com/research/velocity/ ==> Documentation officielle de velocity.js.

https://css-tricks.com/improving-ui-animation-workflow-velocity-js/ ==> Définition, tutoriel et explications pour velocity.js

http://webdesign.tutsplus.com/tutorials/silky-smooth-web-animation-with-velocityjs--cms-24266 ==> Autre tutoriel pour Vélocity.

http://www.w3schools.com/jquery/jquery_animate.asp ==> Tutoriel pour comprendre JQuery.

http://api.jquery.com/animate/ ==> Exemples de codes Jquery.

https://davidwalsh.name/css-js-animation ==> Article sur l'animation CSS , JS et Velocity.js et leurs différences. 

http://www.grafikart.fr/tutoriels/jquery/velocityjs-animation-jquery-506 ==> Tutoriel vidéo Velocity.js en français.

http://libscore.com/#libs ==> Scanne et donne le top du mois des sites qui utilisent JavaScript Library.

©COPYRIGHT SANGPEDRO - OURSANE - MEDY - AMBREA - KARENE - NIMO
