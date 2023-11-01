
const errata = document.getElementById('err')
//const preview = document.getElementById('prev')
//const nextview = document.getElementById('next')
const btn = document.getElementById('pesquisa')
const tp1 = document.getElementById('type1')
const tp2 = document.getElementById('type2')
const relog = document.getElementById('relogar')
const poke = document.getElementById('pokemons')

relog.addEventListener("click" , () => {
    window.location.reload()
})
btn.addEventListener("click", async () => {

    tp1.style.display =  "block"
    tp2.style.display = "block"

    const pokemon = document.getElementById('pokemon').value
    const res = document.getElementById('res')

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if(response.status === 404){
            alert(`Por favor, Digite um pokémon válido.`)
        }
        else{
        const data = await response.json()
        console.log(data)

        if(data.types.length == 2){
            res.innerHTML = `#${data.id} - ${data.name}<br>`
            tp1.innerHTML = `${data.types[0].type.name}<br>`
            tp2.innerHTML = `${data.types[1].type.name}<br>`
            poke.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                             
        }
        else if(data.types.length != 2){
            res.innerHTML = `#${data.id} - ${data.name}<br>`
            tp1.innerHTML = `${data.types[0].type.name}<br>`
            poke.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                         
        }
        switch (data.types[0].type.name) {
            case 'fire':
                tp1.style.backgroundColor = '#F55E45'
                break;
            case 'grass':
                tp1.style.backgroundColor = '#5DF587'
                break;
            case 'water':
                tp1.style.backgroundColor = '#6AA8F5'
                break;
            case 'electric':
                tp1.style.backgroundColor = '#F5ED47'
                break;
            case 'ground':
                tp1.style.backgroundColor = '#914617'
                break;
            case 'dark':
                tp1.style.backgroundColor = '#8165AB'
                break;
            case 'rock':
                tp1.style.backgroundColor = '#68606B'
                break;
            case 'poison':
                tp1.style.backgroundColor = '#8165AB'
            break;
            case 'psychic':
                tp1.style.backgroundColor = '#8165AB'
            break;
            default:
                tp1.style.backgroundColor = '#D0DB81'
                break;
        }
        switch (data.types[1].type.name) {
            case 'fire':
                tp2.style.backgroundColor = '#F55E45'
                break;
            case 'grass':
                tp2.style.backgroundColor = '#5DF587'
                break;
            case 'water':
                tp2.style.backgroundColor = '#6AA8F5'
                break;
            case 'electric':
                tp2.style.backgroundColor = '#F5ED47'
                break;
            case 'ground':
                tp2.style.backgroundColor = '#914617'
                break;
            case 'dark':
                tp2.style.backgroundColor = '#8165AB'
                break;
            case 'rock':
                tp2.style.backgroundColor = '#68606B'
                break;
            case 'poison':
                tp2.style.backgroundColor = '#8165AB'
            break;
            case 'psychic':
                tp2.style.backgroundColor = '#8165AB'
            break;
            default:
                tp2.style.backgroundColor = '#D0DB81'
                break;
        }

    }
}
    catch(err){
        console.error(`Não foi possível localizar o pokemon digitado: ${err}`)
    }
})