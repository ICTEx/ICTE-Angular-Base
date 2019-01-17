import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setMenuOverlay();
  }

  setMenuOverlay() {
    const btMenu = '.bt-menu';
    const open = 'open';
    const menuBar = '.menu_bar';
    const menuMobile = '#menu_mobile';
    const overlay = '#overlay';
    const navLink = '.nav-link';
    const navbarCollapse = '.navbar-collapse';

     $(menuBar).on('click', (event) => {
      event.stopPropagation();
      $(btMenu).toggleClass(open);
      $(menuMobile).toggleClass('active');
      $(overlay).toggleClass('overlay');

      const activeState = $(menuMobile).hasClass('active');

      $(menuMobile).animate({ left: activeState ? '0%' : '-100%'}, 400);

      });

    $('.dropdown-toggle').click( () => {
      $('.dropdown-menu').slideToggle();
    });

     $(navLink).click( () => {
      const target = $(navbarCollapse);

        if ( target.hasClass('active') ) {
            target.removeClass('active');
            target.animate({left: '-100%'});
            $(btMenu).removeClass(open);
            $(overlay).removeClass('overlay');
          }
      });
  }

  scrollToContact() {
    $('html, body').animate({ scrollTop: $(document).height() }, 0);
  }
}
