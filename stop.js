const { exec } = require("child_process");
exec("./bin/decay_gha stop", (err, stdout, stderr) => {
  if (err) {
    console.error("Could not stop server", err);
    process.exit(1);
  }

  console.log(`decay_gha output: ${stdout}`);
});
