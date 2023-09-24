"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const destinationSchema = new _mongoose.default.Schema({
  id: {
    type: _mongoose.default.Schema.Types.String,
    required: true
  },
  name: {
    type: _mongoose.default.Schema.Types.String,
    required: true
  },
  images: {
    png: {
      type: _mongoose.default.Schema.Types.String,
      required: true
    },
    webp: {
      type: _mongoose.default.Schema.Types.String,
      required: true
    }
  },
  description: {
    type: _mongoose.default.Schema.Types.String,
    required: true
  },
  distance: {
    type: _mongoose.default.Schema.Types.String,
    required: true
  },
  travel: {
    type: _mongoose.default.Schema.Types.String,
    required: true
  }
});
const Destination = _mongoose.default.model("Destination", destinationSchema);
var _default = Destination;
exports.default = _default;