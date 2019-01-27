function baixar(link){

    img = new Image()
    img.src = link
    img.setAttribute("crossorigin","Anonymous")

    img.error=function(){ break; }

    img.onload=function(){

        div = document.createElement("div")
        div.id = "doido"
        div.style.display='none'

        nome = link.split("/").pop()

        bloco = "<a id='taglink' download='"+nome+"'>vamos</a>"
        bloco += "<canvas id='canvas2' width="+this.width+" height="+this.height+"></canvas>"

        div.innerHTML = img+""+bloco
        document.body.appendChild(div)

        ctx = canvas2.getContext("2d")

        w = ctx.width = this.width
        h = ctx.height = this.height

        ctx.drawImage(this,0,0,w,h)

        d = canvas2.toDataURL("image/jpeg",1)
        taglink.href = d
        taglink.setAttribute("href",d)
        taglink.click()
        
        
        doido.remove()
    }
    //document.body.lastElementChild.remove()    
    
}