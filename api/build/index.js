"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("dotenv/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createConnection_1 = __importDefault(require("database/createConnection"));
const establishDatabaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createConnection_1.default();
        console.log('Database Connected');
    }
    catch (e) {
        console.log(e);
    }
});
const instantiateExpress = () => {
    const app = express_1.default();
    const port = process.env.PORT || 3001;
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.get('/', (req, res) => {
        res.send('GET request to homepage');
    });
    app.listen(port, () => {
        console.log(`Server instance is running on ${port}`);
    });
};
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield establishDatabaseConnection();
    instantiateExpress();
});
initializeApp();
