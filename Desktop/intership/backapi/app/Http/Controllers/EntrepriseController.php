<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EntrepriseController extends Controller
{
    public function getOffres()
    {
        $entreprise = auth()->user()->entreprise;
        
        // Exemple simplifié - à adapter selon vos besoins
        return response()->json([
            'offres' => [
                [
                    'id' => 1,
                    'titre' => 'Stage développeur Full Stack',
                    'description' => 'Stage de 6 mois en développement web',
                    'entreprise_id' => $entreprise->id
                ]
            ]
        ]);
    }

    public function addNote(Request $request)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'note' => 'required|numeric|min:0|max:20',
            'commentaire' => 'nullable|string'
        ]);

        // Note: You might want to create a separate Notes model/table
        // This is a simplified example
        return response()->json([
            'message' => 'Note added successfully',
            'student_id' => $request->student_id,
            'note' => $request->note
        ]);
    }
}