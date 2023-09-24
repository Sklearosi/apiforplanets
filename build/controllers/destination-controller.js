"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDestination = void 0;
var _Destination = _interopRequireDefault(require("../models/Destination.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getDestination = async (req, res) => {
  try {
    const destinations = await _Destination.default.find();
    if (!destinations || destinations.length === 0) {
      return res.status(404).json({
        message: "No destinations found"
      });
    }
    ;
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};
exports.getDestination = getDestination;