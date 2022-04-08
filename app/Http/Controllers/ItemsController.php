<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Log;
use Exception;
use App\Models\Item;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

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

    public function getItem(Request $request) {
        try {
            $item = Item::where('id', $request->get('id'))->get();
            return responsse()->json($item);
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
            $finished = $request->get('updateFinished');
            Item::where('id', $request->get('id'))->update([
                'finished' => $finished
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
                $file->storeAs('public/images',$filename);
            }
            DB::table('items')->insertGetId(
                ['item_description' => $request->get('description'), 'finished' => 0, "file_name" => $filename]
            );
            return response(200);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
