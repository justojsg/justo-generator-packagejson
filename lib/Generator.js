//import
import {Generator} from "justo-generator";

/**
 * Generator of the Justo.js file.
 */
export default class extends Generator {
  /**
   * Constructor.
   */
  constructor(opts, responses) {
    super(opts, responses);
  }

  /**
   * @override
   */
  init() {
    super.init();
  }

  /**
   * @override
   */
  fin() {
    super.fin();
  }

  /**
   * @override
   */
  prompt(answers) {
    //none
  }

  /**
   * @override
   */
  generate(answers) {
    this.copy("_package.json", "package.json");
  }
}
