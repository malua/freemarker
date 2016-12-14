const path = require('path');
const Freemarker = require('../index');

const data = {
  title: 'Hello World',
  test1: [1, 2, 3],
  test2: { x: 1, y: '中文' },
  test3: {
    a: [1, '2', true],
    b: null,
    c: undefined,
  },
};

const freemarker1 = new Freemarker();
const freemarker2 = new Freemarker({ root: __dirname });

freemarker1.render('<h1>${title}</h1>', { title: 'test render' }, (err, result) => {
  if (err) {
    throw new Error(err);
  }
  console.log(result);
});

freemarker2.renderFile('index', data, (err, result) => {
  if (err) {
    throw new Error(err);
  }
  console.log(result);
});

freemarker2.renderFile('index.ftl', data, (err, result) => {
  if (err) {
    throw new Error(err);
  }
  console.log(result);
});

freemarker2.renderFile(path.join(__dirname, 'index.ftl'), data, (err, result) => {
  if (err) {
    throw new Error(err);
  }
  console.log(result);
});