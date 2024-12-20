// Préparation
//============
const $ = document.getElementById.bind(document)

function clicked(button) {
	return new Promise(resolve => {
		button.disabled = false
		button.addEventListener( 'click', evt=>{button.disabled = true; console.log(button.id); resolve()}, {once: true} );
	});
}

// Corps du programme
//===================

async function main() {
	// 1) Afficher la question
	//------------------------
	$('question').innerHTML = 'Que met-on sur les mains ?'

	// 2) Gérer la réponse
	//--------------------
	await Promise.any( [
		(async function() {
			await clicked($('button1'));
			$('reponse').innerHTML = 'Ah, oui, pour faire des marionnettes !'
			$('button2').disabled = true
		})(),
		(async function() {
			await clicked($('button2'));
			$('reponse').innerHTML = 'Oui, quand il fait froid.'
			$('button1').disabled = true
		})()
	] )

	// 3) Annoncer la fin
	//--------------------
	$('fin').innerHTML = '-- FIN --'
}

main()