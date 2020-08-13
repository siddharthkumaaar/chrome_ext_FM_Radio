document.addEventListener('DOMContentLoaded',function(){
    var startRadio = document.getElementById('start')
    startRadio.addEventListener('click',routeToRadio)
    })

    function routeToRadio(){
    chrome.windows.create({url: "file:///home/qubit/chrome_ext/radio.html", type: "popup", 
    width:300, height:100,
    focused:true
    });
    
}