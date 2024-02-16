(function(){
  let users = [];
  let tiempo = 500;
  let scrollI = 100;
  const h = document.querySelector('#pane-side');
  if(!h){
    console.error("La pagina no ha cargado completamente, por favor espera")
    return;
  }
async function mover(){
  h.scrollTop = 0
  const w = document.querySelector('#pane-side ._3YS_f').childNodes;
  if(w.length == 0){
    console.error("No se han encontrado contactos");
    return;
  }
  const nw = Array.from(w);
  const maxScroll = h.scrollHeight -h.clientHeight;
  for(let i = 0; h.scrollTop < maxScroll-10;i+=scrollI){
    h.scrollTop += i;
    users.push(nw.map(v => {
      const title = v.querySelector("._8nE1Y .y_sn4 span").textContent.trim().replace(/['",]/g, '');
      const date = v.querySelector("._8nE1Y .y_sn4 .aprpv14t").textContent.trim();
      const img = v.querySelector("._1AHcd ._13jwn img")?.getAttribute("src").trim() || "";
      const msgAndPeople = v.querySelector(".vQ0w7 span").childElementCount;
      let value = "";
      if(msgAndPeople == 1){
        value = v.querySelector(".vQ0w7 span").childNodes[0].textContent.trim().replace(/['",]/g, '')
      }else if(msgAndPeople == 2){
        value = v.querySelector(".vQ0w7 span").childNodes[1].textContent.trim().replace(/['",]/g, '')
      }else if(msgAndPeople >=3 ){
        r = Array.from(v.querySelector(".vQ0w7 span").childNodes)
        value = r.map((k)=> k.textContent.trim().replace(/['",]/g, '')).join("")
      }
      const juntos = `${title},${date},${value},${img}`;
      if(users.indexOf(juntos) == -1){
        return juntos;
      }
      return "";
    }))
    await new Promise(resolve => setTimeout(resolve,tiempo))
  }

}
mover().then(w => {
  let datos = [...new Set(users.flat())]
  console.log(datos.join("SBLEITRULES"))
  console.log(datos.length +" contactos encontrados.")
  //console.log([...new Set(users.flat())])
}).catch((error)=> console.error(error))
  
})()
