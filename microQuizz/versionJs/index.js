// Préparation
//============
const $ = document.getElementById.bind(document)
function switchState(versFin) {
	$('button1').disabled = versFin
	$('button2').disabled = versFin
	if (versFin) $('fin').innerHTML = '-- FIN --'
}

// Corps du programme
//===================

// 1) Afficher la question
//------------------------
$('question').innerHTML = 'Que met-on sur les mains ?'

// 2) Gérer la réponse
//--------------------
switchState(false)
$('button1').addEventListener('click', evt=>{
	$('reponse').innerHTML = 'Ah, oui, pour faire des marionnettes !'
	switchState(true)
});
$('button2').addEventListener('click', evt=>{
	$('reponse').innerHTML = 'Oui, quand il fait froid.'
	switchState(true)
});

// On ne peut pas écrire l'étape 3) ici !