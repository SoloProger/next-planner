import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from 'src/database/entities/Record';
import { RecordController } from './record.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  controllers: [RecordController],
})
export class RecordModule {}
