<?php

namespace App\Http\Controllers;

use App\Models\FoundAndLost;
use Illuminate\Http\Request;

class FoundAndLostController extends Controller
{
    public function getAll() {
        $array = ['error' => ''];

        $lost = FoundAndLost::where('status', 'LOST')
        ->orderBy('datecreated', 'DESC')
        ->orderBy('id', 'DESC')
        ->get();

        $recovered = FoundAndLost::where('status', 'RECOVERED')
        ->orderBy('datecreated', 'DESC')
        ->orderBy('id', 'DESC')
        ->get();

        foreach($lost as $lostkey => $lostValue) {
            $lost[$lostkey]['datecreated'] = date('d/m/Y', strtotime($lostValue['datecreated']));
            $lost[$lostkey]['photo'] = asset('storage/'.$lostValue['photo']);
        }
        foreach($recovered as $recKey => $recValue) {
            $recovered[$recKey]['datecreated'] = date('d/m/Y', strtotime($recValue['datecreated']));
            $recovered[$recKey]['photo'] = asset('storage/'.$recValue['photo']);
        }

        $array['lost'] = $lost;
        $array['recovered'] = $recovered;

        return $array;
    }
}
