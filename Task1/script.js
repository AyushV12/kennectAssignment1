var lightThemeButton=document.getElementsByClassName("lightThemeButton")[0];
var darkThemeButton=document.getElementsByClassName("darkThemeButton")[0];
var conatiner=document.getElementsByClassName("container")[0]
var childs=document.getElementsByClassName("child")

lightThemeButton.addEventListener("click", ()=>{
console.log("lightThemeActivated");

conatiner.classList="light-theme container themable"
console.log(conatiner.classList)
for(let i=0;i<childs.length;i++){
    childs[i].classList="child light-theme"
}

}
)
darkThemeButton.addEventListener("click",
()=>{
    conatiner.classList= "dark-theme container themable"
    for(let i=0;i<childs.length;i++){
        childs[i].classList="child dark-theme"
    }
})