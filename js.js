    down.onclick=function(){

        parar.click()

        p = lks.value.split("\n")

        num = 0
        quantidade = p.length

        var s = setInterval(function(){

            con.innerHTML = num+"/"+quantidade
            if(num > quantidade){
                clearInterval(s)
                alert("Baixou tudo")
                con.innerHTML = quantidade
            }

            console.log(num+"/"+quantidade)


            baixar(p[num++])


            

        },parseFloat(velocidade.value*1000))
    }

    parar.onclick=function(){ 

        clearInterval(s);
        try{ 
            doido.remove()
        }catch(err){

        } 
    }