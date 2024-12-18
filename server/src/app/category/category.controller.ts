import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from 'src/database/entities/Category';
import { Repository } from 'typeorm';
import { CategoryRequestDTO } from './dto/CategoryRequest';
import { CategoryResponseDTO } from './dto/CategoryResponse';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(
    @InjectRepository(Category) private repository: Repository<Category>,
  ) {}

  @ApiResponse({
    description: 'Возвращает список категорий',
    type: [CategoryResponseDTO],
  })
  @Get()
  public async getCategorys(): Promise<CategoryResponseDTO[]> {
    return await this.repository.find();
  }

  @ApiResponse({
    description: 'Возвращает категорию',
    type: CategoryResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  public async getCategory(
    @Param() params: { id: number },
  ): Promise<CategoryResponseDTO> {
    return await this.repository.findOne({ where: { id: params.id } });
  }

  @ApiCreatedResponse({
    description: 'Добавляет новую категорию',
    type: CategoryResponseDTO,
  })
  @Post()
  public async addCategory(
    @Body() requestBody: CategoryRequestDTO,
  ): Promise<CategoryResponseDTO> {
    return await this.repository.save(requestBody);
  }

  @ApiResponse({
    description: 'Обновляет категорию по id',
    type: CategoryResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  public async update(
    @Param() params: { id: number },
    @Body() requestBody: CategoryRequestDTO,
  ): Promise<CategoryResponseDTO> {
    await this.repository.update(params.id, requestBody);

    return await this.getCategory(params);
  }

  @ApiResponse({ description: 'Удаляет категорию' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  public async delete(
    @Param() params: { id: number },
  ): Promise<{ message: string }> {
    await this.repository.delete(params.id);

    return await { message: 'Успешно' };
  }
}
