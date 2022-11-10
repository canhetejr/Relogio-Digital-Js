function refreshTime(){
    let time = new Date().toLocaleString("pt-br").slice(10)
    document.querySelector('#clock').innerHTML = time
}
setInterval(refreshTime, 1000)