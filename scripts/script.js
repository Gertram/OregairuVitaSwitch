const oGallery = document.querySelector('.gallery');
oGallery.addEventListener('click', function (ev) {
    if (ev.target.tagName != 'IMG') {
        return false;
    }
    let body = document.getElementsByTagName("body")[0];
    let oTarget = ev.target;//, nWidth, nHeight, nRatio = oTarget.offsetWidth / oTarget.offsetHeight;
    let wrap = body.appendChild(document.createElement('DIV'));
    wrap.classList.toggle('overlay');

    let oBig = wrap.appendChild(document.createElement('div'));

    oBig.addEventListener('mouseover',function (){
        wrap.classList.remove("hover");
    })

    oBig.addEventListener('mouseout',function (){
        wrap.classList.toggle("hover");
    })


    // oBig.style.position = `absolute`;
    // oBig.style.top = `${oTarget.offsetTop}px`;
    // oBig.style.left = `${oTarget.offsetLeft}px`;
    // oBig.style.width = `${oTarget.offsetWidth}px`;
    // oBig.style.height = `${oTarget.offsetHeight}px`;
    // if (this.offsetHeight < this.offsetWidth) {
    //     nHeight = this.offsetHeight;
    //     nWidth = nHeight * nRatio;
    // } else {
    //     nWidth = this.offsetWidth;
    //     nHeight = nWidth / nRatio;
    // }

    oBig.style.backgroundImage = `url('${oTarget.currentSrc}')`;
    oBig.insertAdjacentHTML('beforeend', '<div class="close">×</div>');
    // oBig.addEventListener('transitionend', function () {
    //     this.querySelector('.close').style.opacity = 1;
    // });

    function close(ev) {
        ev.stopPropagation();
        // this.addEventListener('transitionend', function () {
        //     wrap.remove();
        // });
        // this.style.transition = `.5s ease-in`;
        // this.style.height = this.style.width = `0px`;
        oGallery.classList.toggle('show', false);
        wrap.remove()
    }

    oBig.addEventListener('click', close);
    wrap.addEventListener('click', close);
    oBig.classList.toggle('active');
    // oBig.style.width = `${nWidth / 1.3}px`;
    // oBig.style.height = `${nHeight / 1.3}px`;
    // oBig.style.top = oBig.style.left = `50%`;
    // oBig.style.transform = `translate(-50%, -50%) rotate(1turn)`;
    oGallery.classList.toggle('show', true);
});