<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Log;
use Exception;

class Item extends Model
{
    use HasFactory;
    protected $fillable = [
        'item_id',
        'item_description',
        'file_name',
        'finished'
    ];
}
