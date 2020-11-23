import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { IsDate, IsEmail, Length } from 'class-validator';

import { Quotation } from '.';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar')
  @Length(5, 30)
  name: string;

  @Column('varchar')
  phoneNumber: string;

  @Column('varchar')
  @IsEmail()
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @IsDate()
  updatedAt: Date;

  @OneToMany(() => Quotation, (quotation) => quotation.createdBy)
  quotations: Quotation[];
}

export default User;
