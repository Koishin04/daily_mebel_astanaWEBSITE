import { NextResponse } from "next/server";
import { appendLeadRow } from "@/lib/googleSheets";

export const runtime = "nodejs"; // явно укажем Node runtime для Vercel

type LeadPayload = {
  name: string;
  phone: string;
  furnitureType: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;

    if (!body.name || !body.phone || !body.furnitureType) {
      return NextResponse.json(
        { success: false, error: "Заполните обязательные поля." },
        { status: 400 }
      );
    }

    const payload: LeadPayload = {
      name: body.name,
      phone: body.phone,
      furnitureType: body.furnitureType,
      message: body.message ?? ""
    };

    const createdAt = new Date().toISOString();

    await appendLeadRow({
      createdAt,
      ...payload
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in /api/lead:", err);
    return NextResponse.json(
      { success: false, error: "Не удалось отправить заявку. Попробуйте ещё раз." },
      { status: 500 }
    );
  }
}
