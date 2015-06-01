'use strict'; // 开启严格模式

var buttons = require('sdk/ui/button/action');
const {components, Cc, Ci} = require("chrome");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "direct",
  icon: "./icon-16.png",
  onClick: handleClick
});

function handleClick(state) {
  var prefsvc = require("sdk/preferences/service");
  if (state.label == "direct") {
    prefsvc.set("network.proxy.type", 2);
    prefsvc.set("network.proxy.autoconfig_url", "file:///home/gle/data/pri/shadowsocks_etc/socks5.pac");
    Cc['@mozilla.org/network/protocol-proxy-service;1'].getService().reloadPAC();
    button.label = "socks5";
  } else if (state.label == "socks5") {
    prefsvc.set("network.proxy.type", 2);
    prefsvc.set("network.proxy.autoconfig_url", "file:///home/gle/data/pri/shadowsocks_etc/all.pac");
    Cc['@mozilla.org/network/protocol-proxy-service;1'].getService().reloadPAC();
    button.label = "all";
  } else if (state.label == "all") {
    prefsvc.set("network.proxy.type", 0);
    button.label = "direct";
  } else {
    console.log("error");
  }
}
