import View from "../../../common/view.abstract";
import Template from "./greeting.pug";
import "./greeting.scss";

/** Greeting view*/
export default class Greeting extends View(Template) {}
