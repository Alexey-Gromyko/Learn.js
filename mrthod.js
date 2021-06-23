let toggleContent = document.getElementById('toggle-content');

document.getElementById('toggler').addEventListener('click', 
    function (event) {
        event.preventDefault();

        if (!toggleContent.classList.contains('show')) {
            toggleContent.classList.add('show');
            toggleContent.style.height = 'auto';

            let height = toggleContent.clientHeight + 'px';

            toggleContent.style.height = '0px';

            setTimeout(function () {
                toggleContent.style.height = height;
            }, 0);
        } else {
            toggleContent.style.height = '0px';

            toggleContent.addEventListener('transitionend', 
                function () {
                    toggleContent.classList.remove('show');
                }, {
                    once: true
            });
        }
    });