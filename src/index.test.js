import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => { // "done" makes it asynchronous[?]
    const index = fs.readFileSync('./src/index.html', "utf-8"); // gets the file to test
    jsdom.env(index, function(err, window) { // starts up the virtual dom
      const h1 = window.document.getElementsByTagName('h1')[0]; // gets the first h1
      expect(h1.innerHTML).to.equal("Hello Colin, can you see this!?"); // gets the content of the first h1
      done(); // tells mocha that now it is safe to evaluate
      window.close; // closes window to release this memory
    });
  })
})
