document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
  document.querySelector('.SideBar').classList.toggle('sidebarGo');
if(document.querySelector('.SideBar').classList.contains('sidebarGo')){
  document.querySelector('.ham').style.display='inline'
  document.querySelector('.cross').style.display='none'
}
else{
  document.querySelector('.ham').style.display='none'
  setTimeout(()=>{
  document.querySelector('.cross').style.display='inline'
  },350);
}
})