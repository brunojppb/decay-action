const { spawn } = require("child_process");
const { resolve } = require("path");

const binaryPath = resolve(__dirname, "./bin/decay_gha");
const serverPath = resolve(__dirname, "./bin/decay");

const serverProcess = spawn(binaryPath, ["start", serverPath, "8000"], {
  detached: true,
  stdio: "ignore",
  env: {
    ...process.env,
  },
});

serverProcess.unref();
