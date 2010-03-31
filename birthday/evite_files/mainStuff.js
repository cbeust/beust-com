
function uniPop(href,winname,width,height,toolbar,scrollbars,resizable,status) {
	if (href == "") href = '/support';
	if (winname == 'spellChecker') href+=escape(document.eventForm.notes.value);
	if ((width < 100) || (width == null)) var width = '515';
	if ((height < 100) || (height == null)) var height = '475';
	if (toolbar == null) var toolbar = 'yes';
	if (scrollbars == null) var scrollbars = 'yes';
	if (resizable == null) var resizable = 'yes';
	if (status == null) var status = 'yes';
	var theParam = "width=" +width+ 
					",height=" +height+  
					",toolbar=" +toolbar+ 
					",scrollbars=" +scrollbars+ 
					",resizable=" +resizable+ 
					",status=" +status+
					",screenX=1,screenY=1,top=1,left=1";
	var thePopup = window.open(href,winname,theParam);
}

function openEmail(id, suffix) {
    var win = window.open('/sendEmail?to=' + id + suffix, '_blank','scrollbars=yes,width=450,height=380,screenX=300,screenY=20,resizable=yes,status=yes,toolbar=yes');
    
    if(navigator.userAgent.indexOf("MSIE 3") == -1)	{
    	win.focus();
    }
}


function openHelp(href) {
    var win = window.open(href, 'help','scrollbars=yes,width=500,height=460,screenX=300,screenY=20,resizable=yes,status=yes,toolbar=yes');
    
    if(navigator.userAgent.indexOf("MSIE 3") == -1)	{
    	win.focus();
    }
}

function openBigHelp(href) {
    var win = window.open(href, 'help','scrollbars=yes,width=650,height=500,screenX=300,screenY=20,resizable=yes,status=yes,toolbar=yes');
    
    if(navigator.userAgent.indexOf("MSIE 3") == -1)	{
    	win.focus();
    }
}

function openHelpAnySize(href, w, h) {

    var win = window.open(href, 'help','scrollbars=yes,width=' + w + ',height=' + h + ',screenX=300,screenY=20,resizable=yes,status=yes,toolbar=yes');
    
    if(navigator.userAgent.indexOf("MSIE 3") == -1)	{
    	win.focus();
    }
}

function Start(page) {
OpenWin = this.open(page, "CtrlWindow", "toolbar=0,menubar=0,location=0,scrollbars=0,resizable=0,width=250,height=300");
}