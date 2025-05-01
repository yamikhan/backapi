<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Admin;
use App\Models\Student;
use App\Models\Formateur;
use App\Models\Entreprise;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Création d'un admin
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin'
        ]);

        Admin::create([
            'user_id' => $admin->id,
            'department' => 'IT'
        ]);

        // Création d'un formateur
        $formateur = User::create([
            'name' => 'Formateur Test',
            'email' => 'formateur@example.com',
            'password' => Hash::make('password'),
            'role' => 'formateur'
        ]);

        Formateur::create([
            'user_id' => $formateur->id,
            'specialite' => 'Développement Web',
            'description' => 'Formateur en développement web et mobile'
        ]);

        // Création d'un étudiant
        $etudiant = User::create([
            'name' => 'Étudiant Test',
            'email' => 'etudiant@example.com',
            'password' => Hash::make('password'),
            'role' => 'etudiant'
        ]);

        Student::create([
            'user_id' => $etudiant->id,
            'promotion' => '2025',
            'specialite' => 'Développement Web'
        ]);

        // Création d'une entreprise
        $entreprise = User::create([
            'name' => 'Entreprise Test',
            'email' => 'entreprise@example.com',
            'password' => Hash::make('password'),
            'role' => 'entreprise'
        ]);

        Entreprise::create([
            'user_id' => $entreprise->id,
            'nom_entreprise' => 'Tech Solutions',
            'siret' => '12345678901234',
            'description' => 'Entreprise de développement logiciel',
            'adresse' => '123 rue de la Tech, 75000 Paris'
        ]);
    }
}
