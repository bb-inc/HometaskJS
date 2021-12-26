const clickOnBtn = (e) => {
    document.getElementById('loadingActivator').classList.toggle('loadingNone');
    document.getElementsByClassName('textLoading')[0].style.display = 'block';
    setTimeout(() => {
        alert('Ты потратил 5 секунд своей жизни ;)');
        document.getElementById('loadingActivator').classList.toggle('loadingNone');
        document.getElementsByClassName('textLoading')[0].style.display = 'none';

    }, 5000);
}
document.getElementById('loadingActivator').addEventListener('click', clickOnBtn);