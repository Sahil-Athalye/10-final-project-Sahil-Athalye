document.getElementById("task-button").addEventListener("click", buttonPress, false);

function buttonPress(){
    const req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            const img = document.getElementById("myImg");
            img.setAttribute('src', data.image)
            console.log(this.status);
        }
        else if(this.readyState==4){
            console.log(this.responseText);
        }
                    
                    
        }
                
        req.open('GET', 'https://biriyani.anoram.com/get');
        req.send();
}


