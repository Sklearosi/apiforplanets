"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _destinationController = require("../controllers/destination-controller.js");
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const destinationRouter = _express.default.Router();
destinationRouter.get("/get-destinations", _destinationController.getDestination);
var _default = destinationRouter;
exports.default = _default;