<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    protected $fields = [
        'category',
        'clicks',
        'body'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_visits')
                    ->withPivot('clicks') 
                    ->withTimestamps();  
    }
}
