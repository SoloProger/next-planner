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
import { Invoice } from 'src/database/entities/Invoice';
import { Repository } from 'typeorm';
import { InvoiceRequest } from './dto/InvoiceRequest';
import { InvoiceResponseDTO } from './dto/InvoiceResponse';

@ApiTags('Invoice')
@Controller('invoice')
@ApiBearerAuth()
export class InvoiceController {
  constructor(
    @InjectRepository(Invoice) private repository: Repository<Invoice>,
  ) {}

  @ApiResponse({
    description: 'Возвращает массив счетов',
    type: [InvoiceResponseDTO],
  })
  @Get()
  public async getInvoices(): Promise<InvoiceResponseDTO[]> {
    return await this.repository.find();
  }

  @ApiResponse({
    description: 'Возвращает счет',
    type: InvoiceResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  public async getInvoice(
    @Param() params: { id: number },
  ): Promise<InvoiceResponseDTO> {
    return await this.repository.findOne({ where: { id: params.id } });
  }

  @ApiCreatedResponse({
    description: 'Добавляет новый счет',
    type: InvoiceResponseDTO,
  })
  @Post()
  public async addInvoice(
    @Body() requestBody: InvoiceRequest,
  ): Promise<InvoiceResponseDTO> {
    return await this.repository.save(requestBody);
  }

  @ApiResponse({
    description: 'Обновляет счет по id',
    type: InvoiceResponseDTO,
  })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  public async update(
    @Param() params: { id: number },
    @Body() requestBody: InvoiceRequest,
  ): Promise<InvoiceResponseDTO> {
    await this.repository.update(params.id, requestBody);

    return await this.getInvoice(params);
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
