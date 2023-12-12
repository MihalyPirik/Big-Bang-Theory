<?php

namespace App\Http\Controllers;

use App\Models\EpisodeModel;
use Illuminate\Http\Request;

class EpisodeController extends Controller
{
    public function getEpisodes($id)
    {
        $data = EpisodeModel::where("season", "=", $id)->get();
        return response()->json($data);
    }

    public function getSeasons()
    {
        $data = EpisodeModel::select("season")
            ->distinct()
            ->orderBy('season')
            ->get();
        return response()->json($data);
    }
}
