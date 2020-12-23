import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { IsEmail, Length } from 'class-validator';

import { Quotation } from '.';

@Entity()
class Employee extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  id: string;

  @PrimaryColumn()
  @Length(5, 30)
  name: string;

  @Column('varchar')
  phoneNumber: string;

  @Column('varchar')
  @IsEmail()
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Quotation, (quotation) => quotation.createdBy)
  quotations: Quotation[];
}

export default Employee;
