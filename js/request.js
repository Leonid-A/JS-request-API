function Request(){
    this.xml = new XMLHttpRequest();
}

Request.prototype.get = function (url, responseType = '', succses, fail, progress) {
    this.xml.open('GET', url, true);
    this.xml.responseType = responseType.toLowerCase();
    
    let progressIsCalled = false;
    
    this.xml.onreadystatechange = function(){
        console.log(this.readyState)
        if (this.readyState !== 4 && progress){
            if(!progressIsCalled){
                progress();
                progressIsCalled = true;
            }
        }
        else if(this.status == 200){
            succses(this);
        }
        else{
            fail();
        }
    }

    this.xml.send();
}