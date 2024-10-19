const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AceHPQSBCyJfNvuOh8beoSgiux0Bgy5i1knS6RKtNA48kcJRuo8iPH0r72idT_t5vDQ7qhQAH-3zhtaP",
  client_secret: "ELcb6VEpUDUKKTniCT6vSjkSOHDArQQTau3iCLMC7EZG5ZjpP57acSzQ3Vl8FfIqZX8ySmcM4NZYU_S2",
});

module.exports = paypal;
