"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dasboardController_1 = require("../controllers/dasboardController");
const router = (0, express_1.Router)();
router.get("/", dasboardController_1.getDashboardMetrics);
exports.default = router;
