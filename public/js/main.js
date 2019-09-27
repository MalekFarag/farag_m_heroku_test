(() => {
    console.log('Fired.');


    // Nav functions

    const burger = document.querySelector('.burger'),
          nav    = document.querySelector('.mainNav');

    function openNav(){
        burger.classList.toggle('rotate');
        nav.classList.toggle('open');
        console.log('Nav toggled.');
    }

    burger.addEventListener('click', openNav);

})();