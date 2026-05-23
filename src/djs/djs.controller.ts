import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { DjsService } from './djs.service';
import { CreateDjDto } from './dto/create-dj.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('djs')
export class DjsController {
  constructor(private djsService: DjsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateDjDto) {
    return this.djsService.create(dto);
  }

  @Get()
  findAll() {
    return this.djsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.djsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateDjDto) {
    return this.djsService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.djsService.remove(id);
  }
}