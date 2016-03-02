//import
import {HandlebarsGenerator} from "justo-generator";

/**
 * Generator of the Justo.js file.
 */
export default class extends HandlebarsGenerator {
  /**
   * Constructor.
   */
  constructor(opts, responses) {
    super(opts, responses);
  }

  /**
   * @override
   */
  get help() {
    return {
      desc: "Generate the package.json file."
    };
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
