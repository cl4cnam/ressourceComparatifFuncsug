import { main, action, suspend, race } from "https://esm.sh/effection"

const $ = document.getElementById.bind(document)

function* clicked(elt) {
	elt.disabled = false
	yield* action(function*(resolve){
		const react = evt=>{elt.disabled = true; resolve(evt)}
		elt.addEventListener('click', react, {once:true})
		try {
			      yield* suspend()
		} finally {
			elt.disabled = true
			elt.removeEventListener('click', react)
		}
	}) ;
}

await main(function* () {
	// 1) Afficher la question
	//------------------------
	$('question').innerHTML = 'Que met-on sur les mains ?'

	// 2) Gérer la réponse
	//--------------------
	yield* race( [
		(function* () {
			yield* clicked($('button1'))
			$('reponse').innerHTML = 'Ah, oui, pour faire des marionnettes !'
		})(),
		(function* () {
			yield* clicked($('button2'))
			$('reponse').innerHTML = 'Oui, quand il fait froid.'
		})()
	] )

	// 3) Annoncer la fin
	//--------------------
	$('fin').innerHTML = '-- FIN --'
});
