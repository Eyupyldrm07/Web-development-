let button=document.getElementById('btn');
let content=document.getElementById('content')


button.addEventListener('click',function(){
    console.log(
        button.dataset.eyupyldrm
    );
    














    if (content.style.display== '' ||content.style.display== 'block' ){

        // console.log("içerik sayfada gorunur");
        content.style.display = 'none'
        button.innerText='goster'
    }
    else{
        console.log("içerik sayfada gizli")
         content.style.display = 'block'
         button.innerText='gizle'

    }


}
)