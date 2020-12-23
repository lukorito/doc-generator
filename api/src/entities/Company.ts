import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { IsInt } from 'class-validator';
import { Quotation } from '.';

@Entity()
class Company extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  id: string;

  @PrimaryColumn()
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
