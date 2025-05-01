<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EtudiantController extends Controller
{
    public function getDocuments()
    {
        // Exemple simplifié - à adapter selon vos besoins
        return response()->json([
            'documents' => [
                [
                    'id' => 1,
                    'name' => 'Convention de stage',
                    'type' => 'pdf',
                    'url' => '/documents/convention.pdf'
                ],
                [
                    'id' => 2,
                    'name' => 'Guide de stage',
                    'type' => 'pdf',
                    'url' => '/documents/guide.pdf'
                ]
            ]
        ]);
    }

    public function getStage()
    {
        // Exemple simplifié - à adapter selon vos besoins
        $stage = auth()->user()->student->stage ?? null;
        
        return response()->json([
            'stage' => $stage ?? [
                'message' => 'Aucun stage trouvé'
            ]
        ]);
    }
}