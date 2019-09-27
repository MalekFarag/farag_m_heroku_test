(() => {
    console.log('Fired.');

    const burger = document.querySelector('.burger'),
          nav    = document.querySelector('.mainNav');

    function openNav(){
        nav.classList.toggle('open');
        console.log('Nav toggled.');
    }

    burger.addEventListener('click', openNav);

})();