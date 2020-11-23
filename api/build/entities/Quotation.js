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
let Quotation = class Quotation extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Quotation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Quotation.prototype, "quotationNumber", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Quotation.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Quotation.prototype, "subtotal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Quotation.prototype, "taxIncluded", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Quotation.prototype, "total", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Quotation.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Quotation.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => _1.User, (user) => user.quotations),
    __metadata("design:type", _1.User)
], Quotation.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.ManyToOne(() => _1.Company, (company) => company.quotations),
    __metadata("design:type", _1.Company)
], Quotation.prototype, "company", void 0);
__decorate([
    typeorm_1.OneToMany(() => _1.Item, (item) => item.quotation),
    __metadata("design:type", Array)
], Quotation.prototype, "items", void 0);
Quotation = __decorate([
    typeorm_1.Entity()
], Quotation);
exports.default = Quotation;
