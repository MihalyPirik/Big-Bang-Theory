<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EpisodeModel extends Model
{
    use HasFactory;
    protected $table = 'episodes';
    protected $primaryKey = 'id';
    public $timestamps = false;

}
