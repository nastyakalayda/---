"use strick";
function chpok(id){
   elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
   state = elem.style.display; //смотрим, включен ли сейчас элемент
   if (state =='block') {elem.style.display='none';} //если включен, то выключаем
   else elem.style.display='block'; //иначе - включаем
}
