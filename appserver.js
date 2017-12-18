const express = require('express');
const morgan = require('morgan');
const os  = require('os');
const router = express.Router();
const app  = new express();
const port = 8080;

//app.use(morgan('dev'));

function RestMachineInfo() {
  const machineInfo = {
    name: os.hostname(), homedir: os.homedir(),
    processor: {
      model: os.cpus()[0].model, speed: os.cpus()[0].speed
    },
    os: {
      platform: os.platform(), arch: os.arch(), typename: os.type(),
      uptime: os.uptime(), version: os.release()
    },
    memory: {
      freeram: os.freemem(), totalram: os.totalmem()
    }

  }
  return machineInfo;
}

app.set('Appname', 'Infosys');
app.use(express.static('public'));

app.use((req, res, next) => {
    res.json(RestMachineInfo());
    next();
});

router.get('/', (req, res) => {
  res.render('index.html')
});

router.get('*', (req, res) => {
  res.send('<h1>Error 404</h1>');
});

app.listen(port, () => {
  console.log('Server Run in port ' + port);
})
