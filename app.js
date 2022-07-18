const header = document.querySelector('#header')
const carte = document.querySelector('#carte')



fetch("https://pachyderme.net/students.json")
    .then(response => response.json())
    .then(function (myJson){
        console.log(myJson)
        
        for (var i = 0; i < myJson.students.length ; i++) {
            
            let card = document.createElement("div")
            card.id = "card-" + i
            card.classList.add('max-w-sm', 'rounded','overflow-hidden', 'shadow-lg', 'gap-4', 'p-5', 'bg-neutral-300', 'carte')
            header.appendChild(card)
            

            let divfirstname = document.createElement("div")
            divfirstname.classList.add('text-gray-900', 'text-xl', 'leading-tight', 'font-bold'  )

            divfirstname.text = `Prenom: ${myJson.students[i].firstname}`
            card.appendChild(divfirstname).innerHTML = divfirstname.text

            // on créer la div qui va contenir le firstname

            let divlastname = document.createElement("div")
            divlastname.classList.add('text-gray-900', 'text-xl', 'leading-tight', 'font-bold' )

            divlastname.text = `Nom : ${myJson.students[i].lastname}`
            card.appendChild(divlastname).innerHTML = divlastname.text
            
            // on créer la div qui va contenir le lastname

            let divsex = document.createElement("div")
            divsex.classList.add('text-gray-900', 'text-xl', 'leading-tight', 'font-light' )

            divsex.text = `Sexe : ${myJson.students[i].sex}`
            card.appendChild(divsex).innerHTML = divsex.text

            // création de la div qui va contenir le sexe


            
    }
})


// let div student qui contiendriat les trois divs