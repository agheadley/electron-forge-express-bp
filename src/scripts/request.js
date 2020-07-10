let base="http://localhost:3000"

let post=(jsonData,path,callback)=>{
    
    fetch(base+path, {                  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        callback({error:null,response:data});
    })
    .catch((error) => {
        console.error('Error:', error);
        callback({error:error,data:null});
    });

}

let upload=(formData,callback)=>{
    console.log(formData)
    fetch(base+'/fileUpload', {                  // https://serversideup.net/uploading-files-vuejs-axios/
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        callback({error:null,response:data});
    })
    .catch((error) => {
        console.error('Error:', error);
        callback({error:error,data:null});
    });
}


export {post,upload}



