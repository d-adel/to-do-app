<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Log;
use Exception;
use App\Models\Item;
use Intervention\Image\Facades\Image;

class ItemsController extends Controller
{
    public function getToDoList() {
        try {
            $toDoList = Item::all();
            return response()->json($toDoList);
        } catch(Exception $e) {
            Log::error($e);
        }
    }

    public function updateItemDescription(Request $request) {
        try {
            Item::where('id', $request->get('id'))->update([
                'item_description' => $request->get('description')
            ]);
            return response(200);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function updateItemFinished(Request $request) {
        try {
            Item::where('id', $request->get('id'))->update([
                'finished' => $request->get('updateFinished')
            ]);
            return response(200);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function destroy($id) {
        try {
            Item::where('id', $id)->delete();
            return response(200);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function insert(Request $request) {
        try {
            $filename = '';
            if ($request->hasFile('file')) {
                $file= $request->file('file');
                $filename= date('YmdHi').$file->getClientOriginalName();
                $file-> move(public_path('public/Image'), $filename);
            }
            DB::table('items')->insertGetId(
                ['item_description' => $request->get('description'), 'finished' => 0, "file_path" => $filename]
            );
            return response(200);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
