const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("employee").readOwn("profile").updateOwn("profile");

  ac.grant("manager").extend("employee").readAny("profile");

  ac.grant("admin").extend("manager").updateAny("profile").deleteAny("profile");

  return ac;
})();
