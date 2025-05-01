<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FormateurController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\EntrepriseController;

// Route publique pour le login
Route::post('/login', [AuthController::class, 'login']);

// Routes protégées pour l'admin
Route::middleware(['auth:sanctum', 'role:admin'])->prefix('admin')->group(function () {
    Route::post('/add-user', [AdminController::class, 'addUser']);
    Route::post('/assign-formateur', [AdminController::class, 'assignFormateur']);
});

// Routes protégées pour le formateur
Route::middleware(['auth:sanctum', 'role:formateur'])->prefix('formateur')->group(function () {
    Route::get('/etudiants', [FormateurController::class, 'getEtudiants']);
    Route::post('/note', [FormateurController::class, 'addNote']);
});

// Routes protégées pour l'étudiant
Route::middleware(['auth:sanctum', 'role:etudiant'])->prefix('etudiant')->group(function () {
    Route::get('/documents', [EtudiantController::class, 'getDocuments']);
    Route::get('/stage', [EtudiantController::class, 'getStage']);
});

// Routes protégées pour l'entreprise
Route::middleware(['auth:sanctum', 'role:entreprise'])->prefix('entreprise')->group(function () {
    Route::get('/offres', [EntrepriseController::class, 'getOffres']);
    Route::post('/note', [EntrepriseController::class, 'addNote']);
});
