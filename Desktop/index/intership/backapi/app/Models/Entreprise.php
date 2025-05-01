<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Entreprise extends Model
{
    protected $fillable = [
        'user_id',
        'nom_entreprise',
        'siret',
        'description',
        'adresse'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}