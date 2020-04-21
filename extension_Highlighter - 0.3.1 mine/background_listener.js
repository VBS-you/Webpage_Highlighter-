



chrome.browserAction.onClicked.addListener(
     (tabs) =>{

        chrome.tabs.query({
            "active": true,
            "currentWindow": true
        },
        function(tabs) {
            if ("undefined" != typeof tabs[0].id && tabs[0].id) {
               
                chrome.tabs.sendMessage(tabs[0].id, {
                    "action":"painting"

                });
                
            }
        }
    );

    })



