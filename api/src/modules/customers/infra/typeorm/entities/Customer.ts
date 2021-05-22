import { Expose } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { City } from '@modules/cities/infra/typeorm/entities/City';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  birthday: Date;

  @Column()
  city_id: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'age' })
  getAge(): number {
    const now = new Date();
    const age = now.getFullYear() - this.birthday.getFullYear();

    return age;
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Customer };
