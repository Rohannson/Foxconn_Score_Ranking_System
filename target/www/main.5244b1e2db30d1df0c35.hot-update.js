webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/upload/upload.component.html":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/upload/upload.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\"> <div class=\\\"col-md-12\\\"> <h1 class=\\\"display-8\\\">Welcome to Foxras</h1> <div *ngIf=\\\"isAuthenticated()\\\"> <hr> <h3>课程管理</h3> <hr> <div><span><button (click)=\\\"getAllCourses()\\\">显示所有课程</button> <button (click)=\\\"clearAllCourses()\\\">清除</button></span></div> <div *ngFor=\\\"let course of courses; let i = index\\\" style=\\\"padding-bottom: 2px\\\"> <div style=\\\"display: flex; width: 100%; height: 40px; justify-content: space-between; border-top: 1px solid; border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid\\\"> <div style=\\\"padding-left: 5px\\\">{{course.courseName}}</div> <div>{{course.courseLocation}}</div> <div>{{course.courseContent}}</div> <div>{{course.teacherId}}</div> <button *jhiHasAnyAuthority=\\\"'ROLE_USER'\\\" (click)=\\\"registerCourse(course.courseName); registeredCourse.courseName = course.courseName; registeredCourse.courseLocation = course.courseLocation; registeredCourse.courseContent = course.courseContent; registeredCourse.teacherId = course.teacherId\\\">注册课程</button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" (click)=\\\"deleteCourseWithName(course.courseName, i)\\\">删除课程</button> </div> </div> </div> <div *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\"> <h5>Please upload the Answer</h5> </div> <div *jhiHasAnyAuthority=\\\"'ROLE_USER'\\\"> <h3>Please upload the </h3> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50Lmh0bWw/MGQ1YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyVUFBMlUsMkVBQTJFLGFBQWEsY0FBYyxnQ0FBZ0MsdUJBQXVCLDBCQUEwQix3QkFBd0IsK0RBQStELG1CQUFtQixjQUFjLHVCQUF1QixjQUFjLHNCQUFzQixjQUFjLGtCQUFrQiwrRkFBK0YsaURBQWlELHlEQUF5RCx1REFBdUQiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj4gPGgxIGNsYXNzPVxcXCJkaXNwbGF5LThcXFwiPldlbGNvbWUgdG8gRm94cmFzPC9oMT4gPGRpdiAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8aHI+IDxoMz7or77nqIvnrqHnkIY8L2gzPiA8aHI+IDxkaXY+PHNwYW4+PGJ1dHRvbiAoY2xpY2spPVxcXCJnZXRBbGxDb3Vyc2VzKClcXFwiPuaYvuekuuaJgOacieivvueoizwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNsZWFyQWxsQ291cnNlcygpXFxcIj7muIXpmaQ8L2J1dHRvbj48L3NwYW4+PC9kaXY+IDxkaXYgKm5nRm9yPVxcXCJsZXQgY291cnNlIG9mIGNvdXJzZXM7IGxldCBpID0gaW5kZXhcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTogMnB4XFxcIj4gPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsgd2lkdGg6IDEwMCU7IGhlaWdodDogNDBweDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBib3JkZXItdG9wOiAxcHggc29saWQ7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWRcXFwiPiA8ZGl2IHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDVweFxcXCI+e3tjb3Vyc2UuY291cnNlTmFtZX19PC9kaXY+IDxkaXY+e3tjb3Vyc2UuY291cnNlTG9jYXRpb259fTwvZGl2PiA8ZGl2Pnt7Y291cnNlLmNvdXJzZUNvbnRlbnR9fTwvZGl2PiA8ZGl2Pnt7Y291cnNlLnRlYWNoZXJJZH19PC9kaXY+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfVVNFUidcXFwiIChjbGljayk9XFxcInJlZ2lzdGVyQ291cnNlKGNvdXJzZS5jb3Vyc2VOYW1lKTsgcmVnaXN0ZXJlZENvdXJzZS5jb3Vyc2VOYW1lID0gY291cnNlLmNvdXJzZU5hbWU7IHJlZ2lzdGVyZWRDb3Vyc2UuY291cnNlTG9jYXRpb24gPSBjb3Vyc2UuY291cnNlTG9jYXRpb247IHJlZ2lzdGVyZWRDb3Vyc2UuY291cnNlQ29udGVudCA9IGNvdXJzZS5jb3Vyc2VDb250ZW50OyByZWdpc3RlcmVkQ291cnNlLnRlYWNoZXJJZCA9IGNvdXJzZS50ZWFjaGVySWRcXFwiPuazqOWGjOivvueoizwvYnV0dG9uPiA8YnV0dG9uICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ291cnNlV2l0aE5hbWUoY291cnNlLmNvdXJzZU5hbWUsIGkpXFxcIj7liKDpmaTor77nqIs8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiPiA8aDU+UGxlYXNlIHVwbG9hZCB0aGUgQW5zd2VyPC9oNT4gPC9kaXY+IDxkaXYgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfVVNFUidcXFwiPiA8aDM+UGxlYXNlIHVwbG9hZCB0aGUgPC9oMz4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/upload/upload.component.html\n");

/***/ })

})