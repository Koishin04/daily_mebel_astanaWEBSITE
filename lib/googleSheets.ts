import { google } from "googleapis";

export type LeadRow = {
  createdAt: string;
  name: string;
  phone: string;
  furnitureType: string;
  message: string;
};

function getGoogleAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error(
      "Отсутствуют переменные окружения Google Sheets. Убедитесь, что заданы GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY, GOOGLE_SHEETS_SPREADSHEET_ID."
    );
  }

  // ключ из .env приходит с \n, нужно превратить их в реальные переводы строк
  const formattedKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT(
    clientEmail,
    undefined,
    formattedKey,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  return { auth, spreadsheetId };
}

/**
 * Добавляет строку в Google Sheets
 *
 * Формат строки:
 * Дата/время | Имя | Телефон | Тип мебели | Комментарий
 */
export async function appendLeadRow(lead: LeadRow) {
  const { auth, spreadsheetId } = getGoogleAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const values = [
    [lead.createdAt, lead.name, lead.phone, lead.furnitureType, lead.message]
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Листы1!A:E", // TODO: при необходимости поменяй имя листа
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values
    }
  });
}

/*
TODO:

1. В Google Cloud Console создать проект и включить Google Sheets API.
2. Создать Service Account и сгенерировать ключ в формате JSON.
3. Взять из JSON поля:
   - client_email → GOOGLE_SHEETS_CLIENT_EMAIL
   - private_key → GOOGLE_SHEETS_PRIVATE_KEY
4. Создать таблицу Google Sheets и поделиться доступом на
   client_email (как "Редактор").
5. Взять ID таблицы из URL и записать в GOOGLE_SHEETS_SPREADSHEET_ID.
6. Эти переменные добавить в:
   - .env.local локально
   - Project Settings → Environment Variables на Vercel.
*/
