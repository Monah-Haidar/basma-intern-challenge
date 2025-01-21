<?php

namespace App\Http\Controllers;

use App\Models\Visit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Models\User_Visit;

class VisitsController extends Controller
{
    public function storeClicks(Request $request)
    {
        // Ensure category is provided
        $request->validate([
            'category' => 'required|string|in:ثقافة,رياضة,أخبار,اقتصاد,فيديو وصور',
        ]);

        if (!$request->category) {
            return response()->json(['message' => 'Category is required']);
        }

        // Find or create a visit record for the category
        $visit = Visit::where('category', $request->category)->get()->first() ?? Visit::create(['category' => $request->category]);

        // Increment the clicks count
        $visit->increment('clicks');

        if ($user = $request->user()) {
            $visit->users()->attach($user->id, ['clicks' => 1, 'created_at' => now(), 'updated_at' => now()]);
        }

        return response()->json(['message' => $visit->category . 'Click recorded']);
    }



    public function aggregates()
{
    // Get all categories from the visits table
    $allCategories = Visit::all()->mapWithKeys(function ($visit) {
        return [$visit->id => [
            'category' => $visit->category ?? 'Unknown Category',
            'body' => $visit->body ?? 'Unknown Body',
            'total_clicks' => 0, 
        ]];
    });

    // Get clicked categories in the last 24 hours
    $clickedCategories = User_Visit::where('created_at', '>=', Carbon::now()->subDay())
        ->with('visit') 
        ->get()
        ->groupBy('visit_id') 
        ->map(function ($group) {
            return [
                'category' => $group->first()->visit->category ?? 'Unknown Category',
                'body' => $group->first()->visit->body ?? 'Unknown Body',
                'total_clicks' => $group->sum('clicks'),
            ];
        });

    // Merge clicked and unclicked categories
    $mergedCategories = $allCategories->map(function ($category, $visitId) use ($clickedCategories) {
        return $clickedCategories->get($visitId, $category);
    })->sortByDesc('total_clicks')->values();

   
    return response()->json($mergedCategories);
}
    
}
