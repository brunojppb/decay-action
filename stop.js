const { exec } = require("child_process");
const { resolve } = require("path");

const binaryPath = resolve(__dirname, "./bin/decay_gha");

exec(`${binaryPath} stop`, (err, stdout, stderr) => {
  if (err) {
    console.error("Could not stop server", err);
    process.exit(1);
  }

  console.log(`decay_gha output: ${stdout}`);
});
