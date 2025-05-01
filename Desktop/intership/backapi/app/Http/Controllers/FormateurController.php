<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Student;
use Illuminate\Http\Request;

class FormateurController extends Controller
{
    public function getEtudiants()
    {
        $etudiants = User::where('role', 'etudiant')
            ->with('student')
            ->get();

        return response()->json(['etudiants' => $etudiants]);
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