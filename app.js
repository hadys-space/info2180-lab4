document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById("searchBtn");
    const  result = document.getElementById("result");
    const searchHero = document.getElementById("searchHero");

    btn.addEventListener('click', function(event){
            console.log("Button clicked");
            const getHeroes = new XMLHttpRequest();
            let query = searchHero.value;

            query = sanitizeSearch(query);

            getHeroes.onreadystatechange = function(){

                if (getHeroes.readyState === XMLHttpRequest.DONE){
                    if(getHeroes.status === 200){
                        result.innerHTML = getHeroes.responseText;
                    }else{
                        
                        result.innerHTML = "<p>Error: Unable to fetch superheroes.</p>";
                    }
                }
            };
            getHeroes.open("GET", `./superheroes.php?query=${encodeURIComponent(query)}`,true);
            getHeroes.send();

        

    });

    function sanitizeSearch(input){
        return input.replace(/[<>&'"]/g, function(match){
            return{
                '<':'&lt;',
                '>': '&gt;',
                '&': '&amp;',
                "'": '&#39;',
                '"': '&quot;'
            }[match]
        });
    }
});