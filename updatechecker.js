fetch("https://raw.githubusercontent.com/pellinuz/pellinuz-extension/master/update.json")
	.then(response => response.json())
	.then(data => {
		const currentVersion = chrome.runtime.getManifest().version;

		if (currentVersion !== data.version) {
			alert(`🚀 È disponibile una nuova versione ${data.version}!\n\n📌 Novità: ${data.changelog}\n\n🔗 Scaricala da: ${data.download_url}`);

			if (confirm(`New version ${data.version} can be downloaded. Download now?`)) {
				chrome.tabs.create({ url: data.download_url });
			}
		}
	})
	.catch(error => console.error("Error while updating:", error));

chrome.runtime.onStartup.addListener(() => {
	importScripts("updateChecker.js");
});

chrome.runtime.onInstalled.addListener(() => {
	importScripts("updateChecker.js");
});
