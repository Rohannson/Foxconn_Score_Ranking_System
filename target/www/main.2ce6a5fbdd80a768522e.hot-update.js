webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/navbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<nav class=\\\"navbar navbar-dark navbar-expand-md jh-navbar\\\"> <div class=\\\"jh-logo-container float-left\\\"> <a class=\\\"jh-navbar-toggler d-lg-none float-right\\\" href=\\\"javascript:void(0);\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarResponsive\\\" aria-controls=\\\"navbarResponsive\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\" (click)=\\\"toggleNavbar()\\\"> <fa-icon [icon]=\\\"'bars'\\\"></fa-icon> </a> <a class=\\\"navbar-brand logo float-left\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span class=\\\"logo-img\\\"></span> <span class=\\\"navbar-title\\\">FOXCONN RANKING SYSTEM</span> <span class=\\\"navbar-version\\\">{{version}}</span> </a> </div> <div class=\\\"navbar-collapse collapse\\\" id=\\\"navbarResponsive\\\" [ngbCollapse]=\\\"isNavbarCollapsed\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <ul class=\\\"navbar-nav ml-auto\\\"> <li class=\\\"nav-item\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"upload\\\" (click)=\\\"collapseNavbar()\\\"> <span> <fa-icon [icon]=\\\"'home'\\\"></fa-icon> <span>Home</span> </span> </a> </li> <li *ngSwitchCase=\\\"true\\\" ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"ranking\\\" href=\\\"javascript:void(0);\\\" id=\\\"entity-menu\\\"> <span> <fa-icon [icon]=\\\"'th-list'\\\"></fa-icon> <span>Ranking</span> </span> </a> </li> <li *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"admin-menu\\\"> <span> <fa-icon [icon]=\\\"'user-plus'\\\"></fa-icon> <span>Administration</span> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/user-management\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'user'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>User management</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/jhi-metrics\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'tachometer-alt'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Metrics</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/jhi-health\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'heart'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Health</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/jhi-configuration\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'list'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Configuration</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/audits\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'bell'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Audits</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/logs\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'tasks'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Logs</span> </a> </li> <li *ngIf=\\\"swaggerEnabled\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/docs\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'book'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>API</span> </a> </li> </ul> </li> <li ngbDropdown class=\\\"nav-item dropdown pointer\\\" placement=\\\"bottom-right\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"account-menu\\\"> <span *ngIf=\\\"!getImageUrl()\\\"> <fa-icon [icon]=\\\"'user'\\\"></fa-icon> <span> Account </span> </span> <span *ngIf=\\\"getImageUrl()\\\"> <img [src]=\\\"getImageUrl()\\\" class=\\\"profile-image img-circle\\\" alt=\\\"Avatar\\\"> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li *ngSwitchCase=\\\"true\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"settings\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'wrench'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Settings</span> </a> </li> <li *ngSwitchCase=\\\"true\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"password\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'clock'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Password</span> </a> </li> <li *ngSwitchCase=\\\"true\\\"> <a class=\\\"dropdown-item\\\" (click)=\\\"logout()\\\" id=\\\"logout\\\"> <fa-icon [icon]=\\\"'sign-out-alt'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Sign out</span> </a> </li> <li *ngSwitchCase=\\\"false\\\"> <a class=\\\"dropdown-item\\\" (click)=\\\"login()\\\" id=\\\"login\\\"> <fa-icon [icon]=\\\"'sign-in-alt'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Sign in</span> </a> </li> <li *ngSwitchCase=\\\"false\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"register\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'user-plus'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Register</span> </a> </li> </ul> </li> </ul> </div> </nav> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbD8xMDNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRNQUE0TSx1YkFBdWIsU0FBUyw0UUFBNFEsWUFBWSxvU0FBb1MsWUFBWSwyRUFBMkUsaVFBQWlRLFlBQVksc0ZBQXNGLG16REFBbXpELFlBQVksc0ZBQXNGIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci1leHBhbmQtbWQgamgtbmF2YmFyXFxcIj4gPGRpdiBjbGFzcz1cXFwiamgtbG9nby1jb250YWluZXIgZmxvYXQtbGVmdFxcXCI+IDxhIGNsYXNzPVxcXCJqaC1uYXZiYXItdG9nZ2xlciBkLWxnLW5vbmUgZmxvYXQtcmlnaHRcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1sYWJlbD1cXFwiVG9nZ2xlIG5hdmlnYXRpb25cXFwiIChjbGljayk9XFxcInRvZ2dsZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInYmFycydcXFwiPjwvZmEtaWNvbj4gPC9hPiA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIGxvZ28gZmxvYXQtbGVmdFxcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJsb2dvLWltZ1xcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRpdGxlXFxcIj5GT1hDT05OIFJBTktJTkcgU1lTVEVNPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXZlcnNpb25cXFwiPnt7dmVyc2lvbn19PC9zcGFuPiA8L2E+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBbbmdiQ29sbGFwc2VdPVxcXCJpc05hdmJhckNvbGxhcHNlZFxcXCIgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgbWwtYXV0b1xcXCI+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwidXBsb2FkXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPHNwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2hvbWUnXFxcIj48L2ZhLWljb24+IDxzcGFuPkhvbWU8L3NwYW4+IDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwicmFua2luZ1xcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImVudGl0eS1tZW51XFxcIj4gPHNwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3RoLWxpc3QnXFxcIj48L2ZhLWljb24+IDxzcGFuPlJhbmtpbmc8L3NwYW4+IDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImFkbWluLW1lbnVcXFwiPiA8c3Bhbj4gPGZhLWljb24gW2ljb25dPVxcXCIndXNlci1wbHVzJ1xcXCI+PC9mYS1pY29uPiA8c3Bhbj5BZG1pbmlzdHJhdGlvbjwvc3Bhbj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhZG1pbi91c2VyLW1hbmFnZW1lbnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3VzZXInXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+VXNlciBtYW5hZ2VtZW50PC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImFkbWluL2poaS1tZXRyaWNzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIid0YWNob21ldGVyLWFsdCdcXFwiIFtmaXhlZFdpZHRoXT1cXFwidHJ1ZVxcXCI+PC9mYS1pY29uPiA8c3Bhbj5NZXRyaWNzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImFkbWluL2poaS1oZWFsdGhcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2hlYXJ0J1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPkhlYWx0aDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhZG1pbi9qaGktY29uZmlndXJhdGlvblxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInbGlzdCdcXFwiIFtmaXhlZFdpZHRoXT1cXFwidHJ1ZVxcXCI+PC9mYS1pY29uPiA8c3Bhbj5Db25maWd1cmF0aW9uPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImFkbWluL2F1ZGl0c1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInYmVsbCdcXFwiIFtmaXhlZFdpZHRoXT1cXFwidHJ1ZVxcXCI+PC9mYS1pY29uPiA8c3Bhbj5BdWRpdHM8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiYWRtaW4vbG9nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCIndGFza3MnXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+TG9nczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nSWY9XFxcInN3YWdnZXJFbmFibGVkXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImFkbWluL2RvY3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2Jvb2snXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+QVBJPC9zcGFuPiA8L2E+IDwvbGk+IDwvdWw+IDwvbGk+IDxsaSBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcGxhY2VtZW50PVxcXCJib3R0b20tcmlnaHRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJhY2NvdW50LW1lbnVcXFwiPiA8c3BhbiAqbmdJZj1cXFwiIWdldEltYWdlVXJsKClcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIid1c2VyJ1xcXCI+PC9mYS1pY29uPiA8c3Bhbj4gQWNjb3VudCA8L3NwYW4+IDwvc3Bhbj4gPHNwYW4gKm5nSWY9XFxcImdldEltYWdlVXJsKClcXFwiPiA8aW1nIFtzcmNdPVxcXCJnZXRJbWFnZVVybCgpXFxcIiBjbGFzcz1cXFwicHJvZmlsZS1pbWFnZSBpbWctY2lyY2xlXFxcIiBhbHQ9XFxcIkF2YXRhclxcXCI+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwic2V0dGluZ3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3dyZW5jaCdcXFwiIFtmaXhlZFdpZHRoXT1cXFwidHJ1ZVxcXCI+PC9mYS1pY29uPiA8c3Bhbj5TZXR0aW5nczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJwYXNzd29yZFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInY2xvY2snXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+UGFzc3dvcmQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiIGlkPVxcXCJsb2dvdXRcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzaWduLW91dC1hbHQnXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+U2lnbiBvdXQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGlkPVxcXCJsb2dpblxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NpZ24taW4tYWx0J1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPlNpZ24gaW48L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIid1c2VyLXBsdXMnXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+UmVnaXN0ZXI8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPC91bD4gPC9kaXY+IDwvbmF2PiBcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.html\n");

/***/ })

})