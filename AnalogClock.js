const createDiv = (className, textContent = '') => {
  const div = document.createElement('div');
  div.className = className;
  div.textContent = textContent;
  return div;
};

const updateClock = ($container) => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegree = (360 / 12) * hours + (30 / 60) * minutes;
  const minuteDegree = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
  const secondDegree = (360 / 60) * seconds;

  $container.querySelector('.hand.hour').style.setProperty('--deg', hourDegree);
  $container
    .querySelector('.hand.minute')
    .style.setProperty('--deg', minuteDegree);
  $container
    .querySelector('.hand.second')
    .style.setProperty('--deg', secondDegree);
};

const AnalogClock = ($container) => {
  const timeUnits = ['hour', 'minute', 'second'];

  timeUnits.forEach((timeUnit) => {
    $container.appendChild(createDiv(`hand ${timeUnit}`));
  });

  for (let i = 1; i <= 12; i++) {
    $container.appendChild(createDiv(`time time${i}`, '|'));
  }

  setInterval(() => updateClock($container), 1000);

  updateClock($container);
};

export default AnalogClock;
