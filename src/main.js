class Blog {
    constructor(){
       const dataUGL=" https://github.com/nigayo/inflearn-es6/tree/step4";
        this.setInitData(dataURL);
    }
    setInitData(dataURL){
        this.getData(dataURL, this.insertPost);
    }

    getData(dataURL, fn){
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            const list =JSON.parse(JSON.parse(oReq.responseText).body);
          //  console.log('list is ', JSON.parse(list.body));
         fn(list);
            
        });
        oReq.open('GET', dataURL);
        oReq.send();
    }

    insertPost(list){
        const ul = document.querySelector(".blogList > ul");
        list.forEach((v) =>{
            ul.innerHTML += `<li><a href = ${v.link}> ${v.title} </a></li>`;
        })
    }
}

export default Blog;