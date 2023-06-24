const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "814ec4aa44d3d1a13ee82e3a1256dbfa-us21",
  server: "https://us21.admin.mailchimp.com/",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();