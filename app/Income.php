<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    public function categories() {
        return $this->belongsToMany('App\IncomeCategory', 'category_income', 'income_id', 'category_id');
    }
}
