;(function(win,doc){var ccaoName="cca";var ccao=win[ccaoName];var ccaSettings=null;win.ccRefresh=win.ccRefresh||[];ccao.refresh=function(){var pvid=(new Date()).getTime();ccaSettings.pageData.pvid=pvid;if(win.ccRefresh!==null){var sortedEvents=win.ccRefresh.sort(function(a,b){return a[0]<=b[0]?-1:1;});var readyLen=sortedEvents.length;for(var i=0;i<readyLen;i++){sortedEvents[i][1](ccaSettings);}}};ccao.refreshGPTTargeting=function(){var googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){if(googletag.pubads().getTargeting('carbon_segment').length===0){var carbon=JSON.parse(window.localStorage.getItem('ccRealtimeData'));googletag.pubads().setTargeting('carbon_segment',carbon?carbon.audiences.map(function(i){return i.id;}):[]);}})};ccao.getSettings(function(settings){ccaSettings=settings;});}(window,document));