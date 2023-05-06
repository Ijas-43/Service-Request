import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-headers',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
constructor(private router:Router){}
ngOnInit(): void {
  const showNavbar = (
    toggleId: any,
    navId: any,
    bodyId: any,
    headerId: any
  ) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show');
        // change icon
        toggle.classList.toggle('bx-x');
        // add padding to body
        bodypd.classList.toggle('body-pd');
        // add padding to header
        headerpd.classList.toggle('body-pd');
      });
    }
  };

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link');

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove('active'));
      // this.classList.add('active')
    }
  }
  linkColor.forEach((l) => l.addEventListener('click', colorLink));
}
signOut() {
  var Val = confirm('Are you sure want to logout');

  if (Val == true) {
    const clear = localStorage.clear();
    this.router.navigate(['/']);

    return true;
  } else {
    // return false;
    console.log(' CONTINUED!');
    return false;
  }
}
}
