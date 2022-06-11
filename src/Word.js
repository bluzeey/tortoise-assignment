
function generateRandomLetters(){
    let Alphabet=['A','E','F','G','H','I','J','K','L']
    return Alphabet[Math.floor(Math.random()*Alphabet.length)];
}


export default function Word({input}){
    
    return (
        <div>
           {generateRandomLetters()}
        </div>
    )
}