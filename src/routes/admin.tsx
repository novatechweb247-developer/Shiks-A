import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Plus,
  Trash2,
  Upload,
  ExternalLink,
  LogOut,
  Inbox,
  Mail,
  Phone,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import {
  adminGetDraft,
  adminPublish,
  adminSaveDraft,
  adminUpload,
  adminVerify,
  adminGetInquiries,
  adminDeleteInquiry,
} from "@/lib/content.functions";
import { ADMIN_KEY_STORAGE } from "@/lib/site-content-context";
import { imageUrl, type SiteContent } from "@/content/site";
import type { ContactInquiry } from "@/types/fashion";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Center — Shiks Fashion Academy" },
      {
        name: "description",
        content: "Administrative management portal for Shiks Fashion Academy & Innovation Hub.",
      },
      { property: "og:title", content: "Admin Center — Shiks Fashion Academy" },
      { property: "og:description", content: "Administrative management portal." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type AdminSectionKey = keyof SiteContent | "inquiries";

const SECTIONS: { key: AdminSectionKey; label: string }[] = [
  { key: "inquiries", label: "Inquiries & Applications" },
  { key: "brand", label: "Brand Identity" },
  { key: "heroSlides", label: "Hero Slides (3 slides)" },
  { key: "about", label: "About Academy" },
  { key: "courses", label: "Courses & Curriculum" },
  { key: "tutorials", label: "Practical Tutorials" },
  { key: "hub", label: "3-in-1 Innovation Hub" },
  { key: "founder", label: "Founder Profile" },
  { key: "studentWorks", label: "Student Showcase" },
  { key: "gallery", label: "Runway Gallery" },
  { key: "testimonials", label: "Testimonials" },
  { key: "contact", label: "Contact Details" },
  { key: "socials", label: "Social Channels" },
  { key: "footer", label: "Footer Info" },
  { key: "seo", label: "SEO Metadata" },
];

const isImageKey = (k: string) => /image$|^logo$|^image\d?$|Image\d?$/i.test(k) && !/alt$/i.test(k);
const isLong = (k: string, v: string) =>
  v.length > 70 ||
  /body|description|detail|story|intro|short|curriculum|skills|tips|bio|quote|purpose|vision|mission/i.test(
    k,
  );
const human = (k: string) => k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

function AdminPage() {
  const [key, setKey] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [section, setSection] = useState<AdminSectionKey>("inquiries");
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [inquiryFilter, setInquiryFilter] = useState<"all" | "enrollment" | "contact">("all");
  const [busy, setBusy] = useState(false);
  const [dirty, setDirty] = useState(false);

  const verify = useServerFn(adminVerify);
  const getDraft = useServerFn(adminGetDraft);
  const save = useServerFn(adminSaveDraft);
  const publish = useServerFn(adminPublish);
  const fetchInquiries = useServerFn(adminGetInquiries);
  const removeInquiry = useServerFn(adminDeleteInquiry);

  const load = async (k: string) => {
    const r = await getDraft({ data: { key: k } });
    setContent(r.content);
    setKey(k);
    try {
      const inqs = await fetchInquiries({ data: { key: k } });
      setInquiries(inqs);
    } catch (e) {
      console.warn("Could not fetch inquiries", e);
    }
  };

  useEffect(() => {
    const k = sessionStorage.getItem(ADMIN_KEY_STORAGE);
    if (k) load(k).catch(() => sessionStorage.removeItem(ADMIN_KEY_STORAGE));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshInquiryList = async () => {
    if (!key) return;
    try {
      const inqs = await fetchInquiries({ data: { key } });
      setInquiries(inqs);
      toast.success("Inquiries refreshed.");
    } catch {
      toast.error("Failed to refresh inquiries.");
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!key) return;
    try {
      await removeInquiry({ data: { key, id } });
      setInquiries((prev) => prev.filter((x) => x.id !== id));
      toast.success("Inquiry deleted.");
    } catch {
      toast.error("Failed to delete inquiry.");
    }
  };

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await verify({ data: { key: input } });
      sessionStorage.setItem(ADMIN_KEY_STORAGE, input);
      await load(input);
    } catch {
      toast.error("That access key is not valid.");
    } finally {
      setBusy(false);
    }
  };

  const run = async (kind: "save" | "publish") => {
    if (!key || !content) return;
    setBusy(true);
    try {
      if (kind === "save")
        await save({ data: { key, content: content as unknown as Record<string, unknown> } });
      else await publish({ data: { key, content: content as unknown as Record<string, unknown> } });
      setDirty(false);
      toast.success(
        kind === "save"
          ? "Draft saved successfully."
          : "Published — changes are live across the public site.",
      );
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  if (!key || !content) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
        <Toaster />
        <form
          onSubmit={signIn}
          className="w-full max-w-sm space-y-5 rounded-lg border bg-white p-8 shadow-sm"
        >
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-purple-900">
              ADMIN CENTER
            </p>
            <h1 className="mt-2 font-cinzel text-2xl font-bold text-zinc-950">Management Portal</h1>
            <p className="text-xs text-zinc-500 mt-1 font-light">
              Enter your admin access key to manage courses, content, images, and student inquiries.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="key" className="text-xs font-semibold">
              Access Key
            </Label>
            <Input
              id="key"
              type="password"
              placeholder="Enter access key (default: admin)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-950 hover:bg-purple-900 text-white"
            disabled={busy}
          >
            {busy ? "Authenticating…" : "Sign In to Admin"}
          </Button>
        </form>
      </main>
    );
  }

  const update = (v: unknown) => {
    if (section === "inquiries") return;
    setContent({ ...content, [section]: v } as SiteContent);
    setDirty(true);
  };

  const filteredInquiries = inquiries.filter((inq) => {
    if (inquiryFilter === "all") return true;
    return inq.type === inquiryFilter;
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <Toaster />
      <header className="sticky top-0 z-20 border-b bg-white shadow-2xs">
        <div className="flex flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            <h1 className="font-cinzel text-lg font-bold text-zinc-950">SHIKS ACADEMY ADMIN</h1>
          </div>
          <span className="text-xs text-zinc-400">
            {dirty ? "• Unsaved draft changes" : "• All changes saved"}
          </span>
          <div className="ml-auto flex flex-wrap gap-2">
            <Button variant="outline" size="sm" disabled={busy} onClick={() => run("save")}>
              Save Draft
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/?preview=draft" target="_blank" rel="noreferrer">
                Preview Draft <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </Button>
            <Button
              size="sm"
              disabled={busy}
              className="bg-purple-950 hover:bg-purple-900 text-white"
              onClick={() => run("publish")}
            >
              Publish Changes
            </Button>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Sign out"
              onClick={() => {
                sessionStorage.removeItem(ADMIN_KEY_STORAGE);
                setKey(null);
                setContent(null);
              }}
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Sections" className="flex gap-1 overflow-x-auto lg:flex-col">
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSection(s.key)}
              className={`flex items-center justify-between whitespace-nowrap rounded-md px-3.5 py-2.5 text-left text-xs font-semibold uppercase tracking-wider transition-colors ${
                section === s.key
                  ? "bg-purple-950 text-white shadow-xs"
                  : "text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              <span>{s.label}</span>
              {s.key === "inquiries" && inquiries.length > 0 && (
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    section === s.key ? "bg-purple-800 text-white" : "bg-purple-100 text-purple-900"
                  }`}
                >
                  {inquiries.length}
                </span>
              )}
            </button>
          ))}
        </nav>

        <section className="min-w-0 rounded-lg border bg-white p-5 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-zinc-950">
              {SECTIONS.find((s) => s.key === section)?.label}
            </h2>
            {section === "inquiries" && (
              <Button
                variant="outline"
                size="sm"
                onClick={refreshInquiryList}
                className="gap-1 text-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh Inquiries
              </Button>
            )}
          </div>

          {section === "inquiries" ? (
            <div className="space-y-6">
              {/* Filter tabs */}
              <div className="flex gap-2 border-b pb-3">
                <button
                  onClick={() => setInquiryFilter("all")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                    inquiryFilter === "all"
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  All ({inquiries.length})
                </button>
                <button
                  onClick={() => setInquiryFilter("enrollment")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                    inquiryFilter === "enrollment"
                      ? "bg-purple-950 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  Enrollment Applications ({inquiries.filter((x) => x.type === "enrollment").length}
                  )
                </button>
                <button
                  onClick={() => setInquiryFilter("contact")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                    inquiryFilter === "contact"
                      ? "bg-purple-950 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  Contact Messages ({inquiries.filter((x) => x.type === "contact").length})
                </button>
              </div>

              {filteredInquiries.length === 0 ? (
                <div className="text-center py-12 text-zinc-400 space-y-2">
                  <Inbox className="w-10 h-10 mx-auto text-zinc-300" />
                  <p className="text-sm font-medium">No inquiries in this category yet.</p>
                  <p className="text-xs">
                    When users submit on the public contact form or admissions modal, they appear
                    here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredInquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-5 border rounded-lg bg-zinc-50/60 hover:bg-white transition-all space-y-3"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b pb-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded ${
                                inq.type === "enrollment"
                                  ? "bg-purple-100 text-purple-900 border border-purple-200"
                                  : "bg-emerald-100 text-emerald-900 border border-emerald-200"
                              }`}
                            >
                              {inq.type === "enrollment"
                                ? "Admissions Application"
                                : "Contact Inquiry"}
                            </span>
                            <span className="font-mono text-xs text-zinc-400">ID: {inq.id}</span>
                          </div>
                          <h3 className="font-cinzel text-base font-bold text-zinc-950">
                            {inq.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-zinc-500 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(inq.createdAt).toLocaleString()}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleDeleteInquiry(inq.id)}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2 text-zinc-700">
                          <Phone className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                          <a
                            href={`tel:${inq.phone}`}
                            className="hover:underline font-mono font-medium"
                          >
                            {inq.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-700">
                          <Mail className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                          <a href={`mailto:${inq.email}`} className="hover:underline">
                            {inq.email}
                          </a>
                        </div>
                      </div>

                      <div className="bg-white p-3 border rounded text-xs space-y-1.5">
                        <div className="font-semibold text-zinc-900">
                          <span className="text-zinc-500 uppercase tracking-wider text-[10px] mr-2">
                            Subject / Program:
                          </span>
                          {inq.subjectOrCourse}
                        </div>
                        {inq.studyMode && (
                          <div className="text-zinc-600">
                            <span className="text-zinc-500 uppercase tracking-wider text-[10px] mr-2">
                              Mode & Experience:
                            </span>
                            {inq.studyMode} • {inq.experienceLevel || "Beginner"}
                          </div>
                        )}
                        {inq.messageOrGoals && (
                          <div className="text-zinc-700 pt-1 border-t text-xs leading-relaxed font-light">
                            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block mb-0.5">
                              Details / Goals:
                            </span>
                            {inq.messageOrGoals}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <FieldEditor
              value={content[section]}
              onChange={update}
              adminKey={key}
              fixedLength={section === "heroSlides"}
              path={String(section)}
            />
          )}
        </section>
      </div>
    </div>
  );
}

function FieldEditor({
  value,
  onChange,
  adminKey,
  fixedLength,
  path,
}: {
  value: unknown;
  onChange: (v: unknown) => void;
  adminKey: string;
  fixedLength?: boolean;
  path: string;
}) {
  if (Array.isArray(value)) {
    return (
      <div className="space-y-4">
        {value.map((item, i) => (
          <div key={i} className="rounded-md border p-4 bg-zinc-50/40">
            <div className="mb-3 flex items-center justify-between border-b pb-2">
              <span className="text-xs font-semibold tracking-wider text-purple-900">
                ITEM {i + 1}
              </span>
              {!fixedLength && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs"
                  onClick={() => onChange(value.filter((_, j) => j !== i))}
                >
                  <Trash2 className="w-3.5 h-3.5 mr-1" /> Remove
                </Button>
              )}
            </div>
            <FieldEditor
              value={item}
              adminKey={adminKey}
              path={`${path}.${i}`}
              onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))}
            />
          </div>
        ))}
        {!fixedLength && value.length > 0 && (
          <Button
            variant="outline"
            className="text-xs"
            onClick={() => onChange([...value, structuredClone(value[value.length - 1])])}
          >
            <Plus className="w-3.5 h-3.5 mr-1" /> Add New Item
          </Button>
        )}
      </div>
    );
  }
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    return (
      <div className="space-y-5">
        {Object.entries(obj).map(([k, v]) => {
          const id = `${path}.${k}`;
          const set = (nv: unknown) => onChange({ ...obj, [k]: nv });
          if (typeof v === "string") {
            if (isImageKey(k))
              return (
                <ImageField
                  key={k}
                  id={id}
                  label={human(k)}
                  value={v}
                  onChange={set}
                  adminKey={adminKey}
                />
              );
            return (
              <div key={k} className="space-y-1.5">
                <Label htmlFor={id} className="text-xs font-semibold text-zinc-800">
                  {human(k)}
                </Label>
                {isLong(k, v) ? (
                  <Textarea
                    id={id}
                    rows={4}
                    value={v}
                    onChange={(e) => set(e.target.value)}
                    className="text-xs"
                  />
                ) : (
                  <Input
                    id={id}
                    value={v}
                    onChange={(e) => set(e.target.value)}
                    className="text-xs"
                  />
                )}
              </div>
            );
          }
          return (
            <fieldset key={k} className="space-y-3 border-t pt-4">
              <legend className="text-xs font-bold uppercase tracking-wider text-purple-900">
                {human(k)}
              </legend>
              <FieldEditor value={v} onChange={set} adminKey={adminKey} path={id} />
            </fieldset>
          );
        })}
      </div>
    );
  }
  return null;
}

function ImageField({
  id,
  label,
  value,
  onChange,
  adminKey,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  adminKey: string;
}) {
  const upload = useServerFn(adminUpload);
  const [busy, setBusy] = useState(false);
  const onFile = async (file?: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5 MB.");
      return;
    }
    setBusy(true);
    try {
      const buf = new Uint8Array(await file.arrayBuffer());
      let bin = "";
      for (let i = 0; i < buf.length; i += 0x8000)
        bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
      const r = await upload({
        data: { key: adminKey, name: file.name, type: file.type, base64: btoa(bin) },
      });
      onChange(r.path);
      toast.success("Image uploaded. Click Save Draft or Publish to keep it permanently.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs font-semibold text-zinc-800">
        {label}
      </Label>
      <div className="flex flex-wrap items-center gap-4">
        {value ? (
          <img src={imageUrl(value)} alt="" className="h-20 w-28 rounded object-cover border" />
        ) : (
          <div className="flex h-20 w-28 items-center justify-center rounded border border-dashed text-xs text-zinc-400">
            No image
          </div>
        )}
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border bg-white px-3 py-2 text-xs font-semibold hover:bg-zinc-50 shadow-2xs">
          <Upload className="size-3.5" /> {busy ? "Uploading…" : "Replace / Upload Image"}
          <input
            id={id}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="sr-only"
            disabled={busy}
            onChange={(e) => onFile(e.target.files?.[0])}
          />
        </label>
        {value && (
          <Button variant="ghost" size="sm" className="text-xs" onClick={() => onChange("")}>
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
