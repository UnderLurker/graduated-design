let emoji=['c-ye', 'c-liulei', 'c-nb', 'c-fanu', 'c-baiyan', 'c-miaomiao', 'c-', 'c-1', 'c-2', 'c-3', 'c-erhading', 'c-4', 'c-5', 'c-nanguo', 'c-6', 'c-se', 'c-7', 'c-8', 'c-9', 'c-10', 'c-11', 'c-bishi', 'c-hongyaowan', 'c-12', 'c-zhoumei', 'c-liuhanhuaji', 'c-wulian', 'c-13', 'c-pen', 'c-oney', 'c-fivey', 'c-huoba', 'c-14', 'c-15', 'c-lvyaowan', 'c-16', 'c-fivem', 'c-17', 'c-18', 'c-19', 'c-teny', 'c-qqdoge', 'c-dogeyuanliangta', 'c-doujiyanhuaji', 'c-wunai', 'c-coolb', 'c-heixian', 'c-weiweiyixiao', 'c-huaixiao', 'c-shui', 'c-zaijian', 'c-ciya', 'c-20', 'c-shounuehuaji', 'c-wuzuixiao', 'c-meigui', 'c-heiha', 'c-wozuimei', 'c-tuosai', 'c-qinqin', 'c-xiaoyan', 'c-21', 'c-22', 'c-chigua', 'c-23', 'c-24', 'c-wuyu', 'c-hahaha', 'c-fadai', 'c-25', 'c-26', 'c-jizhi', 'c-haixiu', 'c-tushe', 'c-han', 'c-piezui', 'c-huaji', 'c-27', 'c-twom', 'c-huanhu', 'c-koubi', 'c-28', 'c-onem', 'c-erha', 'c-pu', 'c-aoman', 'c-twoy', 'c-29', 'c-30', 'c-hehe', 'c-qiang', 'c-twof', 'c-naikezui', 'c-31', 'c-32', 'c-33', 'c-ruo', 'c-twoo', 'c-weiqu'];
$(document).ready(function(){
    $('#editor').contentWindow.document.designMode='On';
})
var editor=document.getElementById('editor');
editor.contentWindow.focus();
var string="";
for(var word of emoji){
    string+='<li class="'+word+'"></li>'
}
editor.contentWindow.document.execCommand("insertHTML", false, string);
editor.contentWindow.document.getSelection().collapse();