(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39f567aa"],{6639:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"0 10px 0"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.sourcesLoading,expression:"sourcesLoading"}],staticStyle:{"border-radius":"8px",border:"0px","margin-bottom":"20px"},attrs:{data:e.dataSources,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","header-cell-style":e.setSellStyle}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"180px"}}),a("el-table-column",{attrs:{align:"center",prop:"cid",label:"公司ID",width:"100px"}}),a("el-table-column",{attrs:{align:"center",prop:"type",label:"数据源类型",width:"120px"}}),a("el-table-column",{attrs:{align:"center",prop:"dbDescription",label:"数据源描述"}}),a("el-table-column",{attrs:{align:"center",prop:"dbUrl",label:"URL",width:"400px"}}),a("el-table-column",{attrs:{align:"center",prop:"dbUser",label:"用户名",width:"120px"}}),a("el-table-column",{attrs:{align:"left",prop:"dbPassword",label:"密码",width:"150px"}}),a("el-table-column",{attrs:{align:"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.editDataSource(t.row)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleDataSource(t.row)}}},[e._v("删除")])]}}])},[a("template",{slot:"header"},[a("el-button",{on:{click:function(t){return e.addDatasource()}}},[e._v("添加数据源 ")])],1)],2)],1),a("el-row",[a("el-col",{attrs:{span:22}},[a("el-pagination",{staticClass:"showPage",attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","current-page":e.listQuery.pageNum,"page-size":e.listQuery.pageSize,"page-sizes":[1,10,20,50],total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)],1),a("el-dialog",{attrs:{title:"增加数据源",visible:e.adding,width:"30%","before-close":e.close},on:{"update:visible":function(t){e.adding=t}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"类型"},model:{value:e.chooseTypeId,callback:function(t){e.chooseTypeId=t},expression:"chooseTypeId"}},e._l(e.sourceTypes,(function(t){return a("el-option",{key:t.id,attrs:{label:t.type,value:t.id},on:{change:function(t){return e.chooseTypeChange()}}})})),1)],1),a("el-form-item",{attrs:{label:"描述信息"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceAdd.dbDescription,callback:function(t){e.$set(e.datasourceAdd,"dbDescription",t)},expression:"datasourceAdd.dbDescription"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.couldSee,expression:"couldSee"}],attrs:{label:"用户名"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceAdd.dbUser,callback:function(t){e.$set(e.datasourceAdd,"dbUser",t)},expression:"datasourceAdd.dbUser"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.couldSee,expression:"couldSee"}],attrs:{label:"密码"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceAdd.dbPassword,callback:function(t){e.$set(e.datasourceAdd,"dbPassword",t)},expression:"datasourceAdd.dbPassword"}})],1),a("el-form-item",{attrs:{label:"URL"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceAdd.dbUrl,callback:function(t){e.$set(e.datasourceAdd,"dbUrl",t)},expression:"datasourceAdd.dbUrl"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.close()}}},[e._v("取 消")]),a("el-button",{on:{click:function(t){return e.dataSourceTest()}}},[e._v("测 试")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保 存")])],1)],1),a("el-dialog",{attrs:{title:"修改数据源信息",visible:e.editing,width:"30%","before-close":e.close},on:{"update:visible":function(t){e.editing=t}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"ID"}},[a("el-input",{attrs:{disabled:"",type:"char"},model:{value:e.datasourceEdit.id,callback:function(t){e.$set(e.datasourceEdit,"id",t)},expression:"datasourceEdit.id"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"类型"},model:{value:e.chooseTypeId,callback:function(t){e.chooseTypeId=t},expression:"chooseTypeId"}},e._l(e.sourceTypes,(function(t){return a("el-option",{key:t.id,attrs:{label:t.type,value:t.id},on:{change:function(t){return e.chooseTypeChange()}}})})),1)],1),a("el-form-item",{attrs:{label:"描述信息"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceEdit.dbDescription,callback:function(t){e.$set(e.datasourceEdit,"dbDescription",t)},expression:"datasourceEdit.dbDescription"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.couldSee,expression:"couldSee"}],attrs:{label:"用户名)"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceEdit.dbUser,callback:function(t){e.$set(e.datasourceEdit,"dbUser",t)},expression:"datasourceEdit.dbUser"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.couldSee,expression:"couldSee"}],attrs:{label:"密码"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceEdit.dbPassword,callback:function(t){e.$set(e.datasourceEdit,"dbPassword",t)},expression:"datasourceEdit.dbPassword"}})],1),a("el-form-item",{attrs:{label:"URL"}},[a("el-input",{attrs:{type:"char"},model:{value:e.datasourceEdit.dbUrl,callback:function(t){e.$set(e.datasourceEdit,"dbUrl",t)},expression:"datasourceEdit.dbUrl"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.close()}}},[e._v("取 消")]),a("el-button",{on:{click:function(t){return e.dataSourceTest()}}},[e._v("测试")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保 存")])],1)],1)],1)},o=[],r=a("f890"),d=a("6724"),n={directives:{waves:d["a"]},name:"index",computed:{couldSee:function(){return this.judge()}},data:function(){return{editing:!1,adding:!1,sourcesLoading:!1,total:0,listQuery:{pageNum:1,pageSize:10},dataSources:[],sourceTypes:[],chooseTypeId:null,datasourceAdd:{dbDescription:"",dbUser:"",dbPassword:"",dbUrl:""},datasourceEdit:{id:null,dbDescription:"",dbUser:"",dbPassword:"",dbUrl:""},jdbc:!0,hbase:!1,mongodb:!1}},created:function(){this.getDataTypes()},methods:{setSellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return"background-color:#409EFF;color:#fff;font-wight:200;font-size:15px;"},getDataSources:function(){var e=this;this.dataSources=[],this.sourcesLoading=!0,r["e"](this.listQuery).then((function(t){console.log("DataSourceList",t),e.total=t.data.totalPage;var a=Object.assign([],t.data.list);for(var s in a)a[s].type=e.getTypeByID(a[s].typeId);console.log("buf",a),e.dataSources=a,e.sourcesLoading=!1}))},getDataTypes:function(){var e=this;r["f"]().then((function(t){console.log("DatasourceType",t.data.rows),e.sourceTypes=t.data.rows,e.getDataSources()}))},getTypeByID:function(e){for(var t in this.sourceTypes)if(this.sourceTypes[t].id==e)return this.sourceTypes[t].type;return null},editDataSource:function(e){console.log("进入修改表单",e),this.chooseTypeId=e.typeId,this.datasourceEdit.id=e.id,this.datasourceEdit.dbDescription=e.dbDescription,this.datasourceEdit.dbUser=e.dbUser,this.datasourceEdit.dbPassword=e.dbPassword,this.datasourceEdit.dbUrl=e.dbUrl,this.editing=!0},addDatasource:function(){console.log("进入增加表单"),this.datasourceAdd.dbDescription="",this.datasourceAdd.dbPassword="",this.datasourceAdd.dbUrl="",this.datasourceAdd.dbUser="",this.chooseTypeId=null,this.adding=!0},judge:function(){if(1==this.adding)switch(this.getTypeByID(this.chooseTypeId)){case"mysql":this.datasourceAdd.dbUrl="{host}:{port}";break;case"postgresql":this.datasourceAdd.dbUrl="{host}:{port}/{database}";break;case"sqlserver":this.datasourceAdd.dbUrl="{host}:{port}";break;case"mongodb":this.datasourceAdd.dbUrl="{host}:{port},...,{host}:{port}";break;default:this.datasourceAdd.dbUrl="";break}switch(this.getTypeByID(this.chooseTypeId)){case"mysql":case"postgresql":case"sqlserver":return!0;case"mongodb":return!1;default:return!0}},deleDataSource:function(e){var t=this;this.$confirm("此操作将永久删除该数据源, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r["c"]({id:e.id}).then((function(e){200==e.code?(t.$message({type:"success",message:"删除成功!"}),t.getDataSources()):t.$message({type:"error",message:"删除失败"})}))})).catch((function(){t.$message({type:"info",message:"取消删除"})}))},deleteByID:function(e){for(var t in this.dataSources)if(this.dataSources[t].id==e){this.dataSources.remove(t);break}},save:function(){var e=this;if(1==this.editing){console.log("修改界面");var t=Object.assign({},this.datasourceEdit);t.typeId=this.chooseTypeId,r["i"](t).then((function(t){200==t.code?(e.$message({type:"success",message:"修改成功!"}),e.close(),e.getDataSources()):e.$message({type:"error",message:"修改失败"})}))}else{var a=Object.assign({},this.datasourceAdd);a.typeId=this.chooseTypeId,r["a"](a).then((function(t){200==t.code?(e.$message({type:"success",message:"增加成功!"}),e.close(),e.getDataSources()):e.$message({type:"error",message:"增加失败"})}))}this.close()},dataSourceTest:function(){var e=this,t=null;t=1==this.editing?{typeId:this.chooseTypeId,dbDescription:this.datasourceEdit.dbDescription,dbUser:this.datasourceEdit.dbUser,dbPassword:this.datasourceEdit.dbPassword,dbUrl:this.datasourceEdit.dbUrl}:{typeId:this.chooseTypeId,dbDescription:this.datasourceAdd.dbDescription,dbUser:this.datasourceAdd.dbUser,dbPassword:this.datasourceAdd.dbPassword,dbUrl:this.datasourceAdd.dbUrl},r["h"](t).then((function(t){500==t.code?e.$message({type:"error",message:"测试失败"}):e.$message({type:"success",message:"测试成功"})}))},close:function(){this.adding=!1,this.editing=!1},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getDataSources()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getDataSources()}}},i=n,c=a("2877"),l=Object(c["a"])(i,s,o,!1,null,"509d091a",null);t["default"]=l.exports},6724:function(e,t,a){"use strict";var s=a("c7a7"),o=function(e){e.directive("waves",s["a"])};window.Vue&&(window.waves=s["a"],Vue.use(o)),s["a"].install=o,t["a"]=s["a"]},"8d41":function(e,t,a){},c7a7:function(e,t,a){"use strict";a("8d41");var s="@@wavesContext";function o(e,t){function a(a){var s=Object.assign({},t.value),o=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),r=o.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var d=r.getBoundingClientRect(),n=r.querySelector(".waves-ripple");switch(n?n.className="waves-ripple":(n=document.createElement("span"),n.className="waves-ripple",n.style.height=n.style.width=Math.max(d.width,d.height)+"px",r.appendChild(n)),o.type){case"center":n.style.top=d.height/2-n.offsetHeight/2+"px",n.style.left=d.width/2-n.offsetWidth/2+"px";break;default:n.style.top=(a.pageY-d.top-n.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",n.style.left=(a.pageX-d.left-n.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return n.style.backgroundColor=o.color,n.className="waves-ripple z-active",!1}}return e[s]?e[s].removeHandle=a:e[s]={removeHandle:a},a}t["a"]={bind:function(e,t){e.addEventListener("click",o(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[s].removeHandle,!1),e.addEventListener("click",o(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[s].removeHandle,!1),e[s]=null,delete e[s]}}},f890:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"g",(function(){return d})),a.d(t,"j",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"i",(function(){return u})),a.d(t,"c",(function(){return p})),a.d(t,"h",(function(){return h}));var s=a("b775");function o(){return Object(s["a"])({url:"/sys-remotedata/remoteDatasourceType/getInfo",method:"get"})}function r(){return Object(s["a"])({url:"/sys-remotedata/department/getAll",method:"get"})}function d(e){return Object(s["a"])({url:"/sys-remotedata/department/singin",method:"post",params:e})}function n(e){return Object(s["a"])({url:"/sys-remotedata/department/update",method:"put",data:e})}function i(e){return Object(s["a"])({url:"/sys-remotedata/department/delete",method:"delete",params:e})}function c(e){return Object(s["a"])({url:"/sys-remotedata/remoteDatasource/getInfo",method:"get",params:e})}function l(e){return Object(s["a"])({url:"/sys-remotedata/remoteDatasource/singIn",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/sys-remotedata/remoteDatasource/updateInfo",method:"put",data:e})}function p(e){return Object(s["a"])({url:"/sys-remotedata/remoteDatasource/deleteInfo",method:"delete",params:e})}function h(e){return Object(s["a"])({url:"/sys-remotedata/test",method:"post",data:e})}}}]);