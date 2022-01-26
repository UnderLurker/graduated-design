(function(){
    let addFolder=document.querySelector('#add-folder');
    let folderOperation=document.querySelector('#folder-operation');
    let folderSettingClose=document.querySelector('#folder-setting-close');
    let userSettingHidden=null;
    let folderItems=document.getElementsByClassName('folder-items');
    let folderTitle=folderOperation.getElementsByTagName('h4')[0];
    let folderSetting=folderOperation.getElementsByClassName('folder-setting')[0];
    let folderForm=document.querySelector('.folder-form');
    let input_method=folderForm.getElementsByTagName('input');
    let folderContactList=document.querySelector('.folder-contact-list');
    let submitWayPut="put";
    let submitWayDelete="delete";

    function expandFolder(obj){
        userSettingHidden=obj.parentNode.parentNode;
        userSettingHidden.style.width="0";
        userSettingHidden.style.opacity="0";
        folderOperation.style.width="384px";
        folderOperation.style.opacity="1";
    }

    addFolder.onclick=function(){
        expandFolder(this);
        folderTitle.innerHTML="添加分类";
        folderSetting.innerHTML="<ion-icon name='checkmark-outline'></ion-icon>";
        input_method[0].value=submitWayPut;
        
        let folderContactListParent=folderContactList.parentNode;
        let blankFolderContactList=document.createElement('div');

        if(folderContactList)
            folderContactList.remove();

        blankFolderContactList.className="folder-contact-list";
        folderContactListParent.appendChild(blankFolderContactList);

    }
    folderSettingClose.onclick=function(e){
        addRippleEffect(e,this,"rgba(120,120,120,.25)");
        let folderPage=this.parentNode.parentNode;
        userSettingHidden.style.width="384px";
        userSettingHidden.style.opacity="1";
        folderPage.style.width="0";
        folderPage.style.opacity="0";
    }

    for(var i=0;i<folderItems.length;i++){
        folderItems[i].onclick=function(e){
            // addRippleEffect(e,this,"rgba(120,120,120,.25)");
            expandFolder(this);
            folderTitle.innerHTML="编辑分类";
            folderSetting.innerHTML="<ion-icon name='trash-outline'></ion-icon>";
            input_method[0].value=submitWayDelete;
        }
    }
    //为表单提交绑定
})();