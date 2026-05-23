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
exports.DjsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DjsService = class DjsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.djs.create({ data: dto });
    }
    findAll() {
        return this.prisma.djs.findMany({
            where: { is_active: true },
            include: { _count: { select: { event_lineups: true } } },
        });
    }
    async findOne(id) {
        const dj = await this.prisma.djs.findUnique({
            where: { id },
            include: {
                event_lineups: {
                    include: { events: true },
                    orderBy: { events: { event_date: 'desc' } },
                    take: 5,
                },
            },
        });
        if (!dj)
            throw new common_1.NotFoundException('DJ not found');
        return dj;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.djs.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.djs.update({ where: { id }, data: { is_active: false } });
    }
};
exports.DjsService = DjsService;
exports.DjsService = DjsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DjsService);
//# sourceMappingURL=djs.service.js.map