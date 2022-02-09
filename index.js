const core = require("@actions/core");
const github = require("@actions/github");

try {
  const bucket = core.getInput("bucket");
  console.log(`Hello bucket ${bucket}!`);

  const filename = core.getInput("filename");
  const downloadOptions = core.getInput("download-options");

  core.setOutput("file", "foo");
} catch (error) {
  core.setFailed(error.message);
}
