"use strict";(self.webpackChunkatm_mangment=self.webpackChunkatm_mangment||[]).push([[679],{4679:(R,u,i)=>{i.r(u),i.d(u,{ListOfRolesComponent:()=>M});var g=i(6283),t=i(5879),c=i(6814),d=i(7285),s=i(6223),_=i(8569),f=i(8431),b=i(980);const T=function(n){return{"ng-error":n}};function v(n,m){if(1&n){const e=t.EpF();t.TgZ(0,"ng-select",15,16),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.formData.citeId=o)}),t.qZA()}if(2&n){const e=t.oxw(),a=t.MAs(7);t.Q6J("clearable",!0)("name","city")("items",e.listOfBanks)("ngModel",e.formData.citeId)("required",!0)("searchable",!0)("notFoundText","No Data Founded")("ngClass",t.VKq(8,T,!e.formData.citeId&&a.submitted))}}function C(n,m){1&n&&(t.TgZ(0,"p",17),t._uU(1," Required "),t.qZA())}let h=(()=>{class n{constructor(){this.title="Add new role",this.id=0,this.formData={},this.listOfBanks=[],this.activeModal=(0,t.f3M)(d.Kz),this.userRoleService=(0,t.f3M)(b.J)}saveData(){this.id>0?this.updateData():this.addNewData()}addNewData(){}updateData(){}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-update-role"]],inputs:{title:"title",id:"id"},standalone:!0,features:[t.jDz],decls:21,vars:9,consts:[[1,"row","m-0","p-3"],[1,"col-9"],[1,"col-3","text-end","pt-2"],[1,"fa-solid","fa-xmark","text-danger","fs-4","pointer",3,"click"],[1,"p-3",3,"ngSubmit"],["atmForm","ngForm"],[1,"row"],[1,"col-12","col-md-6"],["ngDefaultControl","",3,"name","label","required","ngModel","currentForm","inputText","ngModelChange"],["companyName","ngModel"],["for","city",1,"required","my-1"],["ngDefaultControl","","bindLabel","name","bindValue","id",3,"clearable","name","items","ngModel","required","searchable","notFoundText","ngClass","ngModelChange",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-12","text-end"],["type","submit",1,"btn","btn-dark","btn-md","shadow-lg","mt-3","col-3"],["ngDefaultControl","","bindLabel","name","bindValue","id",3,"clearable","name","items","ngModel","required","searchable","notFoundText","ngClass","ngModelChange"],["city","ngModel"],[1,"text-danger"]],template:function(a,o){if(1&a){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3),t.qZA()(),t.TgZ(4,"div",2)(5,"i",3),t.NdJ("click",function(){return o.activeModal.dismiss()}),t.qZA()()(),t.TgZ(6,"form",4,5),t.NdJ("ngSubmit",function(){t.CHM(l);const p=t.MAs(7);return t.KtG(p.valid&&o.saveData())}),t.TgZ(8,"div",6)(9,"div",7)(10,"app-text-input",8,9),t.NdJ("ngModelChange",function(p){return o.formData.name=p}),t.qZA()(),t.TgZ(12,"div",7)(13,"div")(14,"label",10),t._uU(15," City Code"),t.qZA(),t.YNc(16,v,2,10,"ng-select",11),t.YNc(17,C,2,0,"p",12),t.qZA()(),t.TgZ(18,"div",13)(19,"button",14),t._uU(20," Save "),t.qZA()()()()}if(2&a){const l=t.MAs(7);t.xp6(3),t.Oqu(o.title),t.xp6(7),t.Q6J("name","userName")("label","Name")("required",!0)("ngModel",o.formData.name)("currentForm",l)("inputText",o.formData.name),t.xp6(6),t.Q6J("ngIf",o.listOfBanks),t.xp6(1),t.Q6J("ngIf",!o.formData.citeId&&l.submitted)}},dependencies:[c.ez,c.mk,c.O5,s.u5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.On,s.F,_.t,f.A0,f.w9]})}return n})();var D=i(3103),Z=i(882);function x(n,m){if(1&n&&(t.TgZ(0,"th",11),t._uU(1),t.qZA()),2&n){const e=m.$implicit;t.xp6(1),t.Oqu(e)}}function A(n,m){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",11),t._uU(2),t.qZA(),t.TgZ(3,"td",11),t._uU(4),t.qZA(),t.TgZ(5,"td",12)(6,"div",13)(7,"div",14),t._UZ(8,"i",15),t.TgZ(9,"div",16)(10,"button",17),t.NdJ("click",function(){const l=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.updateDataTable(l.id))}),t._UZ(11,"i",18),t._uU(12," Update "),t.qZA(),t.TgZ(13,"button",17),t.NdJ("click",function(){const l=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.openCofirmDelete(l.id))}),t._UZ(14,"i",19),t._uU(15," Delete "),t.qZA()()()()()()}if(2&n){const e=m.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.name)}}let M=(()=>{class n{constructor(){this.direction="",this.cols=["#","Name",""],this.dataTable=[],this.modalService=(0,t.f3M)(d.FF),this.userRoleService=(0,t.f3M)(b.J),this.userService=(0,t.f3M)(Z.K),this.userData=null,this.userService.getUserData().subscribe(e=>{this.userData=e})}addNew(){this.modalService.open(h,{backdrop:"static",centered:!0,size:"lg"}).componentInstance.title="Add new role"}onScrollDown(e){this.appendItemsToDataTable(),this.direction="scroll down"}updateDataTable(e){const a=this.modalService.open(h,{backdrop:"static",centered:!0,size:"lg"});a.componentInstance.title="Update role",a.componentInstance.id=e}openCofirmDelete(e){this.modalService.open(D.n,{backdrop:"static",centered:!0}).result.then(o=>{o&&this.deleteData(e)})}deleteData(e){}appendItemsToDataTable(){this.dataTable.length<40&&this.dataTable.push({name:"bb",id:2})}getData(){this.userRoleService.getRoles().subscribe(e=>{e&&(this.dataTable=e)})}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-of-roles"]],standalone:!0,features:[t.jDz],decls:14,vars:3,consts:[[1,"row","m-0","pb-3"],[1,"col-9"],[1,"p-2"],[1,"col-3","text-end"],[1,"btn","btn-dark","mt-3",3,"click"],["infinite-scroll","",1,"search-results-container",3,"scrollWindow","scrolled"],[1,"table","table-responsive","table-striped"],[1,"bg-light","sticky-top","top-0","table-dark"],[1,"bg-dark"],["class","text-center",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"text-center"],["container","body",1,"text-end"],["container","body",1,"btn-group","me-3"],["ngbDropdown","","role","group","aria-label","Button group with nested dropdown",1,"btn-group"],["ngbDropdownToggle","",1,"fa-solid","fa-list","pointer"],["ngbDropdownMenu","",1,"dropdown-menu"],["ngbDropdownItem","",3,"click"],[1,"fa-regular","fa-pen-to-square","text-primary"],[1,"fa-solid","fa-trash","text-danger"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"User roles"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.addNew()}),t._uU(6,"Add new"),t.qZA()()(),t.TgZ(7,"div",5),t.NdJ("scrolled",function(r){return o.onScrollDown(r)}),t.TgZ(8,"table",6)(9,"thead",7)(10,"tr",8),t.YNc(11,x,2,1,"th",9),t.qZA()(),t.TgZ(12,"tbody"),t.YNc(13,A,16,2,"tr",10),t.qZA()()()),2&a&&(t.xp6(7),t.Q6J("scrollWindow",!1),t.xp6(4),t.Q6J("ngForOf",o.cols),t.xp6(2),t.Q6J("ngForOf",o.dataTable))},dependencies:[c.ez,c.sg,g.Rq,g.Ry,d.XC,d.jt,d.iD,d.Vi,d.TH]})}return n})()}}]);