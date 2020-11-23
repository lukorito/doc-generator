"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const _1 = require(".");
const class_validator_1 = require("class-validator");
let Company = class Company extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    class_validator_1.Length(10, 20),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('int'),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], Company.prototype, "accountNumber", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Company.prototype, "bank", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Company.prototype, "branch", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Company.prototype, "bankCode", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Company.prototype, "swiftCode", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Company.prototype, "branchCode", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => _1.Quotation, (quotation) => quotation.company),
    __metadata("design:type", Array)
], Company.prototype, "quotations", void 0);
Company = __decorate([
    typeorm_1.Entity()
], Company);
exports.default = Company;
