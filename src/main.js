class Blog {
    constructor(){   
        this.setInitData();    
       this.registerEvents(); 
     //  this.setInitData(dataURL);
     this.likedSet = new Set();
    }

    setInitVariables(){
        this.blogList = document.querySelector(".start");
    }

    registerEvents() {
        const startBtn = document.querySelector(".start");
        const dataUGL=" https://github.com/nigayo/inflearn-es6/tree/step4";
     
        startBtn.addEventListener("click", ()=>{
            this.setInitData(dataURL);
        });
        blogList.addEventListener("click", (evt) => {
            const targetClassName = evt.target.className;
            if(targetClassName !="like" && targetClassName !="unlike") return;
            const postTitle =target.previousElementSibling.textContent;
            //if click unlike, have to change like and rendering
            if(targetClassName=="unlike"){
             target.className ="like";
             target.innerText =" wish list";
             this.likedSet.delete(postTitle);
            }else {
                 
             //like -> unlike
            target.className ="unlike";
            target.innerText ="cancle wish";
            //add wish list
            this.likedSet.add(postTitle);

            }      
            
           
            // add my wishlist
            this.updateLikedList();         
        });
    }

    updateLikedList(){
        const ul = document.querySelector(".like-list>ul");
        let likedSum = "";
        //put wishlist to li tag usign innerHTML
        this.likedSet.forEach((v)=>{
            likedSum +=`<li> ${v} </li>`;

        });
        ul.innerHTML= likedSum;
    }

    setInitData(dataURL){
        this.getData(dataURL, this.insertPost.bind(this));
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
         list.forEach((v) =>{
         this.blogList.innerHTML += `
            <li>
            <a href = ${v.link}> ${v.title} </a>
            <div class="like"> wish list </div>
            </li>
            `;
        })
    }
}

export default Blog;