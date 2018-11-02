<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{

    public function categories()
    {
        return $this->belongsToMany('App\ExpenseCategory', 'category_expense', 'expense_id', 'category_id');
    }
}
