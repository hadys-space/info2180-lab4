document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById("searchBtn");

    btn.addEventListener('click', function(event){
            const getHeroes = new XMLHttpRequest();

            getHeroes.onreadystatechange = function(){

                if (getHeroes.readyState === XMLHttpRequest.DONE){
                    if(getHeroes.status === 200){
                        alert(getHeroes.responseText);
                    }else{
                        alert("Error: Unable to fetch superheroes.");
                    }
                }
            };
            getHeroes.open("GET", "./superheroes.php",true);
            getHeroes.send();

        

    });
});