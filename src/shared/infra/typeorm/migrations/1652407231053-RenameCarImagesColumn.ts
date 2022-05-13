import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameCarImagesColumn1652407231053 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "cars_image" RENAME COLUMN "imge_name" TO "image_name"');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "cars_image" RENAME COLUMN "image_name" TO "imge_name"');
    }
}
