/* https://browser-update.org/#install */

var $buoop = {
  required:
  {
    e: -4,
    f: -3,
    o: -3,
    s: -1,
    c: -3
  },
  insecure: true,
  unsupported: true,
  api: 2022.02
};

function $buo_f()
{
  var e = document.createElement("script");
  e.src = "//browser-update.org/update.min.js";
  document.body.appendChild(e);
};

try
{
  document.addEventListener("DOMContentLoaded", $buo_f, false)
}
catch (e)
{
  window.attachEvent("onload", $buo_f)
}
