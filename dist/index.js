"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAfterRun = exports.onBeforeRun = void 0;
const node_notifier_1 = __importDefault(require("node-notifier"));
const onBeforeRun = (details) => {
    node_notifier_1.default.notify({
        title: "Cypress",
        message: "Running tests",
    });
};
exports.onBeforeRun = onBeforeRun;
const onAfterRun = (results) => {
    if (results.totalFailed > 0) {
        node_notifier_1.default.notify({
            title: "Cypress",
            message: `Tests failed. \nTotal failed: ${results.totalFailed} / ${results.totalTests}.`,
            actions: [
                "Re-run failed", "Rerun all"
            ],
            sound: true
        });
    }
    else {
        node_notifier_1.default.notify({
            title: "Cypress",
            message: "Tests finished running",
        });
    }
};

exports.onAfterRun = onAfterRun;
