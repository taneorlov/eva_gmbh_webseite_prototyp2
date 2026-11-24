document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.toggle('open'));
// Betterplace donation overlay for project 168174 (Ehrenwerk).
(() => {
  const modal = document.getElementById('donation-modal');
  const openButton = document.querySelector('.donation-open');
  const frame = document.getElementById('betterplace-donation-frame');
  if (!modal || !openButton || !frame) return;

  const donationUrl = 'https://www.betterplace.org/de/donate/iframe/projects/168174?background_color=ffffff&color=6c9c2e&default_amount=5&bottom_logo=true&default_interval=monthly';
  let lastFocus = null;

  function openDonation() {
    lastFocus = document.activeElement;
    if (!frame.src) frame.src = donationUrl;
    modal.hidden = false;
    document.body.classList.add('donation-modal-open');
    modal.querySelector('.donation-close')?.focus();
  }
  function closeDonation() {
    modal.hidden = true;
    document.body.classList.remove('donation-modal-open');
    lastFocus?.focus?.();
  }

  openButton.addEventListener('click', openDonation);
  modal.querySelectorAll('[data-donation-close]').forEach(el => el.addEventListener('click', closeDonation));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeDonation();
  });
})();

/* v41: equal natural row heights, recompute on resize and font load. */
(() => {
 const top=document.querySelector('.campus-top-grid'), next=document.querySelector('.campus-second-grid');
 if(!top || !next) return;
 const media=matchMedia('(min-width:761px)');
 function sync(){
   top.style.minHeight=''; next.style.minHeight='';
   if(!media.matches) return;
   const h=Math.ceil(Math.max(top.getBoundingClientRect().height,next.getBoundingClientRect().height));
   top.style.minHeight=next.style.minHeight=h+'px';
 }
 window.addEventListener('resize',sync); window.addEventListener('load',sync);
 document.fonts?.ready.then(sync); sync();
})();
