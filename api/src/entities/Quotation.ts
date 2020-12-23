import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Employee, Company, Item } from '.';

@Entity()
class Quotation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar')
  quotationNumber: string;

  @Column('varchar')
  title: string;

  @Column()
  subtotal: number;

  @Column()
  taxIncluded: boolean;

  @Column()
  total: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Employee, (employee) => employee.quotations)
  createdBy: Employee;

  @ManyToOne(() => Company, (company) => company.quotations)
  company: Company;

  @OneToMany(() => Item, (item) => item.quotation)
  items: Item[];
}

export default Quotation;
