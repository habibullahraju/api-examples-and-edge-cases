function blockQuotes() {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}
const displayQuotes = (data)=>{
    const blockQuote  = document.getElementById('quote');
    blockQuote.innerText = data.quote;
    
}
blockQuotes();