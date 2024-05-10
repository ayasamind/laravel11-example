<?php

namespace App\Http\Requests\Map;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'center_lat' => ['required', 'numeric'],
            'center_lon' => ['required', 'numeric'],
            'zoom_level' => ['required', 'numeric'],
        ];
    }
}
