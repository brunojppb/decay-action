const { exec } = require("child_process");
exec('./bin/decay_gha start "./bin/decay" 8000', (err, stdout, stderr) => {
  if (err) {
    console.error("Could not start server", err);
    process.exit(1);
  }

  console.log(`decay_gha output: ${stdout}`);
});
