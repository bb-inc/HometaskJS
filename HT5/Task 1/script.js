const onModalClose = (e) => {
    document.getElementsByClassName('modalWindow')[0].classList.toggle('modalNone'); 
};
const onModalShow = (e) => {
    document.getElementsByClassName('modalWindow')[0].classList.toggle('modalNone');  
};
document.getElementById("ol").addEventListener('mouseover', onModalClose);
document.getElementById("ol").addEventListener('mouseout', onModalShow);
