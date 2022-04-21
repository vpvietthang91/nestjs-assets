import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBaseAssetsDto {
    @ApiProperty()
    @IsNotEmpty()
    id: number;

    @ApiPropertyOptional()
    @IsString()
    assets_name: string;

    @ApiPropertyOptional()
    @IsString()
    serial: string;

    @ApiPropertyOptional()
    @IsString()
    assets_code: string;

    @ApiPropertyOptional()
    assets_category: number;

    @ApiPropertyOptional()
    assets_model: number;

    @ApiPropertyOptional()
    assets_status: number;
    
    @ApiPropertyOptional()
    @IsString()
    assets_tag: string;

    @ApiPropertyOptional()
    @IsString()
    checkout_to: string;

    @ApiPropertyOptional()
    checkout_date: Date;

    @ApiPropertyOptional()
    @IsString()
    check_io: string;

    @ApiPropertyOptional()
    is_deleted: boolean;

    @ApiPropertyOptional()
    department: string;

    @ApiPropertyOptional()
    direct_manager: string;

    @ApiPropertyOptional()
    update_by: string;

    @ApiPropertyOptional()
    update_date: Date;
}