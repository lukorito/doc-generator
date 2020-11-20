import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Quotation } from '.';

@Entity()
class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('int')
  accountNumber: number;

  @Column('varchar')
  bank: string;

  @Column('varchar')
  branch: string;

  @Column('varchar')
  address: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Quotation, (quotation) => quotation.company)
  quotations: Quotation[];
}

export default Company;
