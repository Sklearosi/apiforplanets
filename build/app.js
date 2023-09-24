"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongo = _interopRequireDefault(require("./config/mongo.js"));
var _destinationRouter = _interopRequireDefault(require("./routes/destination-router.js"));
var _swaggerMiddleware = _interopRequireDefault(require("./middlewares/swagger-middleware.js"));
var _crewRouter = _interopRequireDefault(require("./routes/crew-router.js"));
var _technologyRouter = _interopRequireDefault(require("./routes/technology-router.js"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
(0, _mongo.default)();
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use('/images/crew', _express.default.static('assets/crew'));
app.use('/images/destination', _express.default.static('assets/destination'));
app.use('/images/home', _express.default.static('assets/home'));
app.use('/images/shared', _express.default.static('assets/shared'));
app.use('/images/technology', _express.default.static('assets/technology'));
app.get('/api/images', (req, res) => {
  const imageFiles = _fs.default.readdirSync('assets');
  res.json({
    images: imageFiles
  });
});
app.use("/api", _destinationRouter.default);
app.use("/api", _crewRouter.default);
app.use("/api", _technologyRouter.default);
app.use("/", ..._swaggerMiddleware.default);
app.listen(process.env.PORT || 3000);