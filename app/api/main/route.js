import { NextResponse } from "next/server";

import your_output_file from '../../your_output_file.json';

export async function GET(req) {
    return NextResponse.json(your_output_file)
}