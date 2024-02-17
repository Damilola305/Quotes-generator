
const person = document.getElementById('person');
const quote = document.getElementById('quote');
const generateBtn = document.getElementById('generate');



const quotes = [
{quote: ' "The only thing we have to fear is fear itself."', person: '-Franklin D. Roosevelt', category: "life"},
{quote: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."', person: '-Martin Luther King Jr.', category: "life" },
{quote: '"Do one thing every day that scares you."', person: '-Eleanor Roosevelt', category: "daily"},
{quote: '"Well done is better than well said."', person: '-Benjamin Frankli', category: "daily"},
{quote: '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."', person: '-Helen Keller', category: "love" },
{quote: '"It is during our darkest moments that we must focus to see the light."', person: '-Aristotle', category: "life"},
{quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."', person: '-Ralph Waldo Emerson', category: "daily"},
{quote: '"Be yourself; everyone else is already taken."', person: '-Oscar Wilde', category: "love"},
{quote: 'You will face many defeats in life, but never let yourself be defeated.', person: '-Maya Angelou', category: "life"},
{quote: 'Go confidently in the direction of your dreams! Live the life you have imagined.', person: '-Henry David Thoreau', category: "life"},
{quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", person: '-Janet Williams-', category: "love"},
]


const  generateQuote = ()=>{

    const quoteType = document.getElementById('quoteType').value;
  
    let filteredQuotes = quotes;
    
    
    if (quoteType === quoteType) {
      filteredQuotes = quotes.filter(quote => quote.quote.toLowerCase().includes("love"));
      console.log(filteredQuotes);
    }
    else{
        console.log('nothing');
    }
    
  const random = Math.floor(Math.random()*quotes.length);

  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;

}
generateBtn.addEventListener('click', generateQuote);
