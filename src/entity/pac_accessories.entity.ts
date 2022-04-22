import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class pac_accessories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accessories_name: string;

    @Unique(['serial'])
    @Column()
    serial: string;

    @Unique(['code'])
    @Column()
    accessories_code: string;

    @Column()
    accessories_category: number;

    @Column()
    accessories_model: number;

    @Column()
    accessories_status: number;

    //@Column()
    //assets_description: string;

    @Column()
    accessories_tag: string;

    @Column()
    checkout_to: string;

    //@Column()
    //assets_image: string;

    @Column()
    check_io: string;

    @Column()
    created_by: string;

    @Column()
    created_date: Date;

    @Column({ default: false })
    is_deleted: boolean;

    @Column()
    department: string;

    @Column()
    direct_manager: string;

    @Column()
    check_io_date: Date;

    // @Column()
    // update_by: string;

    // @Column()
    // update_date: Date;

    @Column()
    assets_mount: string;
}