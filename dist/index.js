"use strict";

var React = _interopRequireWildcard(require("react"));

var _renderer = require("@react-pdf/renderer");

var _okDocument = require("./ok-document");

var _issueDocument = require("./issue-document");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _renderer.render)(React.createElement(_okDocument.OkDocument, null), "".concat(__dirname, "/../ok-document.pdf"));
(0, _renderer.render)(React.createElement(_issueDocument.IssueDocument, null), "".concat(__dirname, "/../issue-document.pdf"));