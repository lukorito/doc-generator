import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { IsInt, Length } from 'class-validator';
import { Quotation } from '.';

@Entity()
class Company extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    unique: true,
    //  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    //  handling uniqueness
  })
  name: string;

  @Column('int')
  @IsInt()
  accountNumber: number;

  @Column('varchar')
  bank: string;

  @Column('varchar')
  branch: string;

  @Column({
    nullable: true,
  })
  address: string;

  @Column('varchar')
  bankCode: string;

  @Column('varchar')
  swiftCode: string;

  @Column('varchar')
  branchCode: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Quotation, (quotation) => quotation.company)
  quotations: Quotation[];
}

export default Company;
