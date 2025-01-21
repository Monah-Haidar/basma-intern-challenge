<?php

namespace App\Models;

use App\Models\Visit;
use Illuminate\Database\Eloquent\Model;

class User_Visit extends Model
{
    protected $table = 'user_visits';

    protected $fillable = ['user_id', 'visit_id', 'clicks'];

    public function visit()
    {
        return $this->belongsTo(Visit::class, 'visit_id', 'id');
    }

}
