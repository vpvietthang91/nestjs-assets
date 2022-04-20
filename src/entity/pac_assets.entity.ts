import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class pac_assets {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    assets_name: string;

    @Unique(['serial'])
    @Column()
    serial: string;

    @Unique(['code'])
    @Column()
    assets_code: string;

    @Column()
    assets_category: number;

    @Column()
    assets_model: number;

    @Column()
    assets_status: number;

    //@Column()
    //assets_description: string;

    @Column()
    assets_tag: string;

    @Column()
    checkout_to: string;

    //@Column()
    //assets_image: string;

    @Column()
    check_io: string;

    @Column({ default: false })
    is_deleted: boolean;

    @Column()
    created_by: string;

    @Column()
    created_date: Date;

    //@Column()
    //update_by: string;

    //@Column()
    //update_date: Date;
}