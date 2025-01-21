<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Faker\Factory as FakerFactory;



class NewsCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $faker = FakerFactory::create();

        $categories = ['ثقافة', 'رياضة', 'أخبار', 'اقتصاد', 'فيديو وصور'];


        foreach ($categories as $category) {
            DB::table('visits')->insert([
                'category' => $category,
                'clicks' => 0,
                'body' => $faker->paragraph(1),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
