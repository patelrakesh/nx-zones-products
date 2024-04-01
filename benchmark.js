const process = require('process');
const os = require('os');
const cp = require('child_process');
const path = require('path');

// const cmd = 'turbo';
const cmd = 'nx';

let sysUsage = 0;
let userUsage = 0;
let hrTimeTotal = 0;
let memTotal = 0;

for (let i = 0; i < 10; i++) {
  const usage = process.cpuUsage();
  const hrTime = process.hrtime();
  const mem = Math.floor((os.totalmem() - os.freemem()) / 1048576);
  // cp.spawnSync(path.join(
  //     '.',
  // 'node_modules',
  // '.bin',
  //     os.platform() === 'win32' ? cmd + '.cmd' : cmd
  // ), ['run', 'build'], {
  //     stdio: 'inherit',
  // });

  cp.spawnSync(
    path.join(
      '.',
      'node_modules',
      '.bin',
      os.platform() === 'win32' ? cmd + '.cmd' : cmd,
    ),
    ['run-many', '-t', 'build'],
    {
      stdio: 'inherit',
    },
  );

  const cUsage = process.cpuUsage(usage);
  const cHRTime = process.hrtime(hrTime);
  const cMem = Math.floor((os.totalmem() - os.freemem()) / 1048576);
  sysUsage += cUsage.system;
  userUsage += cUsage.user;
  hrTimeTotal += cHRTime[0];
  memTotal += mem - cMem;
}

console.log(
  'Sys Usage: ',
  sysUsage / 10,
  'User Usage: ',
  userUsage / 10,
  'HR Time: ',
  hrTimeTotal / 10,
  'Mem: ',
  memTotal / 10,
);

// Sys Usage:  491.6 User Usage:  239.7 HR Time:  10.4 Mem:  171.5
// Sys Usage:  992.5 User Usage:  449.9 HR Time:  12.1 Mem:  153.1
