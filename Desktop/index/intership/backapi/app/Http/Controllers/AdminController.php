<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Formateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function addUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'role' => 'required|in:admin,formateur,etudiant,entreprise'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role
        ]);

        return response()->json(['message' => 'User created successfully', 'user' => $user]);
    }

    public function assignFormateur(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'specialite' => 'required|string'
        ]);

        $user = User::findOrFail($request->user_id);
        
        if ($user->role !== 'formateur') {
            return response()->json(['message' => 'User is not a formateur'], 400);
        }

        $formateur = Formateur::create([
            'user_id' => $user->id,
            'specialite' => $request->specialite
        ]);

        return response()->json(['message' => 'Formateur assigned successfully', 'formateur' => $formateur]);
    }
}