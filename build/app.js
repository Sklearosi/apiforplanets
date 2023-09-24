"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongo = _interopRequireDefault(require("./config/mongo.js"));
var _destinationRouter = _interopRequireDefault(require("./routes/destination-router.js"));
var _swaggerMiddleware = _interopRequireDefault(require("./middlewares/swagger-middleware.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
(0, _mongo.default)();
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use("/api", _destinationRouter.default);
app.use("/", ..._swaggerMiddleware.default);
app.listen(process.env.PORT || 3000);