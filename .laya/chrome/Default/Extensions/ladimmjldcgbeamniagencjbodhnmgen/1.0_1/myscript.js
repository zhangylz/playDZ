var embedPlugin = document.createElement("embed");
embedPlugin.setAttribute("type","application/x-Mars-chrome");
embedPlugin.setAttribute("id","plugin2");
//embedPlugin.setAttribute("hidden","true");

document.body.appendChild(embedPlugin);

function onLoad()
{
	//alert("onLoad ");
	var PLUGIN = document.getElementById('plugin2');
	if (typeof(PLUGIN.onLoad)!="undefined")
	{
			PLUGIN.onLoad();
	}
};
function TabEvent(request, sender, callback)
{
	//alert("get event");
    	if(request.action == 'LoadPage')
    	{
		//alert("myscript:start onLoadPage");
		onLoad();
    	}
	if(request.action == 'ShutdownPage')
	{
		//alert("myscript:ShutdownPage");
	}
	if (request.action == 'SelectedChanged')
	{
		//alert("myscript:start SelectedChanged");
		document.body.removeChild(embedPlugin);
		embedPlugin = document.createElement("embed");
		embedPlugin.setAttribute("type","application/x-Mars-chrome");
		embedPlugin.setAttribute("id","plugin2");
		document.body.appendChild(embedPlugin);

		if (typeof(embedPlugin.TabSelectedChanged)!="undefined"){
					embedPlugin.TabSelectedChanged();
		}

		if (typeof(embedPlugin.onLoad)!="undefined")
		{
			embedPlugin.onLoad();
		}

	}
};

chrome.extension.onRequest.addListener(TabEvent);
chrome.extension.onConnect.addListener(function(port) {    
  port.onMessage.addListener(function(msg) {    
    if (msg.mars == "updatewindow")  {
			//alert('updatewindow')
			var PLUGIN = document.getElementById('plugin2');
			if (typeof(PLUGIN.TabSelectedChanged)!="undefined")
			{
				PLUGIN.TabSelectedChanged();
			}
	}
	else if (msg.mars == "updatewindowevent"){
		//alert('updatewindowevent');
		var PLUGIN = document.getElementById('plugin2');
	if (typeof(PLUGIN.ReLoad)!="undefined")
		{
			PLUGIN.ReLoad();
		}

	}
	else if (msg.mars == "reflashWindowEvent")
	{
			//alert('reflashWindowEvent');
		var PLUGIN = document.getElementById('plugin2');
		if (typeof(PLUGIN.onLoad)!="undefined")
		{
			PLUGIN.onLoad();
		}

	}

  });    
});   

var  gButton  = document.createElement("input");
gButton.setAttribute("id","MarshiddenBtn");
gButton.setAttribute("hidden","true");
document.body.appendChild(gButton);
gButton.onclick=function(){
 var port =	chrome.extension.connect({name: "Reload"});
	port.postMessage({mars: "Reload"});   
};
//alert( "myscript: ");

window.onresize = function(){
	var PLUGIN = document.getElementById('plugin2');
	
	if (typeof(PLUGIN.onLoad)!="undefined")
	{
			PLUGIN.onLoad();
	}
}

window.onscroll = function(){
	var PLUGIN = document.getElementById('plugin2');
	if (typeof(PLUGIN.onLoad)!="undefined")
	{
			PLUGIN.onLoad();
	}
}