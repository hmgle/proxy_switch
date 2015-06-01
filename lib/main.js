var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  var prefsvc = require("sdk/preferences/service");
  prefsvc.set("network.proxy.type", 2);
  prefsvc.set("network.proxy.autoconfig_url", "file:///home/gle/data/pri/shadowsocks_etc/all.pac");
}