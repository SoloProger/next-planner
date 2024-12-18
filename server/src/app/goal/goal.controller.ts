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
import { Goal } from 'src/database/entities/Goal';
import { Repository } from 'typeorm';
import { GoalRequestDTO } from './dto/GoalRequest';
import { GoalResponseDTO } from './dto/GoalResponse';

@ApiTags('Goal')
@Controller('goal')
export class GoalController {
  constructor(@InjectRepository(Goal) private repository: Repository<Goal>) {}

  @ApiResponse({
    description: 'Возвращает список цели',
    type: [GoalResponseDTO],
  })
  @Get()
  public async getGoals(): Promise<GoalResponseDTO[]> {
    return await this.repository.find();
  }

  @ApiResponse({
    description: 'Возвращает цель',
    type: GoalResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  public async getGoal(
    @Param() params: { id: number },
  ): Promise<GoalResponseDTO> {
    return await this.repository.findOne({ where: { id: params.id } });
  }

  @ApiCreatedResponse({
    description: 'Добавляет новую цель',
    type: GoalResponseDTO,
  })
  @Post()
  public async addGoal(
    @Body() requestBody: GoalRequestDTO,
  ): Promise<GoalResponseDTO> {
    return await this.repository.save(requestBody);
  }

  @ApiResponse({
    description: 'Обновляет цель по id',
    type: GoalResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  public async update(
    @Param() params: { id: number },
    @Body() requestBody: GoalRequestDTO,
  ): Promise<GoalResponseDTO> {
    await this.repository.update(params.id, requestBody);

    return await this.getGoal(params);
  }

  @ApiResponse({ description: 'Удаляет цель' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  public async delete(
    @Param() params: { id: number },
  ): Promise<{ message: string }> {
    await this.repository.delete(params.id);

    return await { message: 'Успешно' };
  }
}
