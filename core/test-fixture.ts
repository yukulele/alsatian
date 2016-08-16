import { ITestFixture } from "./_interfaces/test-fixture.i";
import { ITest } from "./_interfaces/test.i";

export class TestFixture implements ITestFixture {

    fixture: { [id: string]: (...args: Array<any>) => any };
    ignored: boolean;
    focussed: boolean;
    tests: Array<ITest>;

    constructor () {
        this.focussed = false;
        this.ignored = false;
        this.fixture = {};
        this.tests = [];
    }

    public addTest(test: ITest): void {
        // if the test is already here, don't add it
        if (this.tests.indexOf(test) !== -1) {
            return;
        }

        this.tests.push(test);
    }

    public getTests(): Array<ITest> {
        let anyTestsFocussed = this.tests.filter(t => t.focussed).length > 0;

        // if there are no tests focussed, return them all
        if (!anyTestsFocussed) {
            return this.tests;
        }

        return this.tests.filter(t => t.focussed);
    }

}
