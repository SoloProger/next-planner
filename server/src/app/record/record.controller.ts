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
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Record } from 'src/database/entities/Record';
import { Repository } from 'typeorm';
import { RecordRequestDTO } from './dto/RecordRequest';
import { RecordResponseDTO } from './dto/RecordResponse';

@ApiTags('Record')
@Controller('record')
@ApiBearerAuth()
export class RecordController {
  constructor(
    @InjectRepository(Record) private repository: Repository<Record>,
  ) {}

  @ApiResponse({
    description: 'Возвращает список счетов',
    type: [RecordResponseDTO],
  })
  @Get()
  public async getRecords(): Promise<RecordResponseDTO[]> {
    return await this.repository.find();
  }

  @ApiResponse({
    description: 'Возвращает счет',
    type: RecordResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  public async getRecord(
    @Param() params: { id: number },
  ): Promise<RecordResponseDTO> {
    return await this.repository.findOne({ where: { id: params.id } });
  }

  @ApiCreatedResponse({
    description: 'Добавляет новый счет',
    type: RecordResponseDTO,
  })
  @Post()
  public async addRecord(
    @Body() requestBody: RecordRequestDTO,
  ): Promise<RecordResponseDTO> {
    return await this.repository.save(requestBody);
  }

  @ApiResponse({
    description: 'Обновляет счет по id',
    type: RecordResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  public async update(
    @Param() params: { id: number },
    @Body() requestBody: RecordRequestDTO,
  ): Promise<RecordResponseDTO> {
    await this.repository.update(params.id, requestBody);

    return await this.getRecord(params);
  }

  @ApiResponse({ description: 'Удаляет счет' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  public async delete(
    @Param() params: { id: number },
  ): Promise<{ message: string }> {
    await this.repository.delete(params.id);

    return await { message: 'Успешно' };
  }
}
