const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const { JSDOM } = require('jsdom');

Enzyme.configure({ adapter: new EnzymeAdapter() });

global.window = new JSDOM().window;
global.document = global.window.document;
