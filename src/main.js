class Blog {
    constructor(){
       const dataUGL="https://";
        this.setInitData(dataURL);
    }
    setInitData(dataURL){
        this.getData(dataURL);
    }
    getData(dataURL){
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const list =JSON.parse(JSON.parse(oReq.responseText).body);
          //  console.log('list is ', JSON.parse(list.body));

            
        });
        oReq.open('GET', dataURL);
        oReq.send();
    }
}

export default Blog;