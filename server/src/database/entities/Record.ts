import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RecordType } from '../enums/RecordType';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  count: number;

  @Column({
    type: 'enum',
    enum: RecordType,
    default: RecordType.OUT,
  })
  recordType: RecordType;
}
