import { timingSafeEqual } from "crypto";
import type { ContactInquiry } from "@/types/fashion";

/** In-memory content storage fallback when database is not connected */
const inMemoryStore = new Map<string, { content: unknown; updated_at: string }>();

/** In-memory media storage fallback for uploaded assets */
export const inMemoryMedia = new Map<string, { buffer: Buffer; type: string }>();

/** In-memory inquiry storage fallback */
export const inMemoryInquiries: ContactInquiry[] = [
  {
    id: "inq-demo-1",
    type: "enrollment",
    name: "Zainab Abubakar",
    email: "zainab@example.com",
    phone: "08031234567",
    subjectOrCourse: "Fashion Design & Garment Construction",
    messageOrGoals: "Interested in the 6-month intensive diploma to launch my ready-to-wear label.",
    studyMode: "Full-Time (Weekday)",
    experienceLevel: "Complete Beginner",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
  {
    id: "inq-demo-2",
    type: "contact",
    name: "David Pam",
    email: "david.pam@example.com",
    phone: "07039876543",
    subjectOrCourse: "Corporate / Bulk Training",
    messageOrGoals:
      "Requesting quote for institutional training of 20 vocational craftspeople in Plateau State.",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
];

/** Throws unless the supplied key matches the server-side admin access key. Defaults to "admin". */
export function assertAdminKey(key: string) {
  const expected = process.env["ADMIN_ACCESS_KEY"] || "admin";
  const a = Buffer.from(String(key ?? ""));
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) throw new Error("Invalid admin key.");
}

export async function readRow(id: "draft" | "published") {
  try {
    const hasConfig =
      (process.env["SUPABASE_URL"] || process.env["VITE_SUPABASE_URL"]) &&
      process.env["SUPABASE_SERVICE_ROLE_KEY"];
    if (hasConfig) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data, error } = await supabaseAdmin
        .from("site_content")
        .select("content, updated_at")
        .eq("id", id)
        .maybeSingle();
      if (!error && data) return data;
    }
  } catch (err) {
    console.warn("[Site Content] Supabase read failed — falling back to memory", err);
  }
  return inMemoryStore.get(id) ?? null;
}

export async function writeRow(id: "draft" | "published", content: unknown) {
  const row = { content, updated_at: new Date().toISOString() };
  inMemoryStore.set(id, row);
  try {
    const hasConfig =
      (process.env["SUPABASE_URL"] || process.env["VITE_SUPABASE_URL"]) &&
      process.env["SUPABASE_SERVICE_ROLE_KEY"];
    if (hasConfig) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await supabaseAdmin
        .from("site_content")
        .upsert({ id, content: content as never, updated_at: row.updated_at });
    }
  } catch (err) {
    console.warn("[Site Content] Supabase write failed — persisted in memory", err);
  }
}

interface SupabaseTableHelper {
  from: (table: string) => {
    insert: (row: unknown) => Promise<unknown>;
    select: (cols: string) => {
      order: (
        col: string,
        opts: { ascending: boolean },
      ) => Promise<{ data: unknown; error: unknown }>;
    };
    delete: () => {
      eq: (col: string, val: unknown) => Promise<unknown>;
    };
  };
}

export async function saveInquiryRow(inquiry: ContactInquiry) {
  inMemoryInquiries.unshift(inquiry);
  try {
    const hasConfig =
      (process.env["SUPABASE_URL"] || process.env["VITE_SUPABASE_URL"]) &&
      process.env["SUPABASE_SERVICE_ROLE_KEY"];
    if (hasConfig) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await (supabaseAdmin as unknown as SupabaseTableHelper).from("inquiries").insert(inquiry);
    }
  } catch (err) {
    console.warn("[Inquiries] Supabase insert failed — stored in memory", err);
  }
}

export async function listInquiriesRow(): Promise<ContactInquiry[]> {
  try {
    const hasConfig =
      (process.env["SUPABASE_URL"] || process.env["VITE_SUPABASE_URL"]) &&
      process.env["SUPABASE_SERVICE_ROLE_KEY"];
    if (hasConfig) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data, error } = await (supabaseAdmin as unknown as SupabaseTableHelper)
        .from("inquiries")
        .select("*")
        .order("createdAt", { ascending: false });
      if (!error && data && Array.isArray(data) && data.length > 0) return data as ContactInquiry[];
    }
  } catch (err) {
    console.warn("[Inquiries] Supabase read failed — falling back to memory", err);
  }
  return inMemoryInquiries;
}

export async function deleteInquiryRow(id: string) {
  const idx = inMemoryInquiries.findIndex((x) => x.id === id);
  if (idx !== -1) inMemoryInquiries.splice(idx, 1);
  try {
    const hasConfig =
      (process.env["SUPABASE_URL"] || process.env["VITE_SUPABASE_URL"]) &&
      process.env["SUPABASE_SERVICE_ROLE_KEY"];
    if (hasConfig) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await (supabaseAdmin as unknown as SupabaseTableHelper)
        .from("inquiries")
        .delete()
        .eq("id", id);
    }
  } catch (err) {
    console.warn("[Inquiries] Supabase delete failed — removed from memory", err);
  }
}
