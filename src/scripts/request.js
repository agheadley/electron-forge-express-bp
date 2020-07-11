let url="http://localhost:3000/"

//https://stackoverflow.com/questions/32545632/how-can-i-download-a-file-using-window-fetch
let download=(filename)=> {
    fetch(url+'download').then(function(t) {
        return t.blob().then((b)=>{
            var a = document.createElement("a");
            a.href = URL.createObjectURL(b);
            a.setAttribute("download", filename);
            a.click();
        }
        );
    });
}

export {url,download}


