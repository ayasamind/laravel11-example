<?php

namespace App\Http\Controllers;

// use App\Http\Requests\Map\CreateRequest;
use App\Http\Resources\MapResource;
// use App\UseCases\Map\CreateAction;
use App\UseCases\Map\IndexAction;
// use App\UseCases\Map\ShowAction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MapController extends Controller
{
    public function index(Request $request, IndexAction $action): Response
    {
        return Inertia::render('Maps/Index', [
            'maps' => MapResource::collection($action($request->get('title'))),
        ]);
    }
}
