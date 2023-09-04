import { NextResponse } from "next/server";

import authors from '../../authors.json';

export async function GET(req) {
    return NextResponse.json(authors)
}