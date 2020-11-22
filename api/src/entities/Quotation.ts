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
import { User, Company, Item } from '.';

@Entity()
class Quotation extends BaseEntity {
  @PrimaryGeneratedColumn()
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

  @ManyToOne(() => User, (user) => user.quotations)
  createdBy: User;

  @ManyToOne(() => Company, (company) => company.quotations)
  company: Company;

  @OneToMany(() => Item, (item) => item.quotation)
  items: Item[];
}

export default Quotation;
