"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enzyme = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });
describe('Pagination', function () {
    // test('renders correctly', () => {
    //   const wrapper = render(
    //     <Pagination
    //       current={2}
    //       total={85} />
    //   )
    //   expect(wrapper).toMatchSnapshot()
    // })
    test('two plus two is four', function () {
        expect(2 + 2).toBe(4);
    });
});
//# sourceMappingURL=index.test.js.map