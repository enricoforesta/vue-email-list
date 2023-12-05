# Descrizione:

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail

generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Create una pagina "graziosa" senza utilizzare bootstrap.

# Bonus

Far comparire gli indirizzi email solamente quando sono stati tutti generati.

# Logica

1. Installiamo tramite CDN "VUE JS" e "AXIOS JS"

2. Strutturiamo un html dove stamperemo la nostra lista.

3. In vue JS creo un array vuoto, un oggetto con url dell api che genera un email casuale e anche un oggetto con il numero di email che vogliamo generare.

4. Creo una funzione che crea "n" email diverse, e le pusha nell array vuoto.

5. Per il bonus inseriamo un v-if con la condizione che la lunghezza dell array, sia uguale al numero di email che vogliamo generare.