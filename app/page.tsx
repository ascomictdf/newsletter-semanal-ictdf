"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  ChevronDown,
  Clock,
  Download,
  Heart,
  Loader2,
  LogOut,
  Megaphone,
  Plane,
  UserPlus,
  UsersRound,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type PersonRecord = {
  name: string;
  role: string;
  area: string;
  date?: string;
  period?: string;
};

type OpenLists = Record<string, boolean>;

const admissions: PersonRecord[] = [
  {
    name: "Ana Laura Pereira Batista",
    role: "Técnico de Enfermagem",
    area: "CME",
    date: "24/08/2026",
  },
  {
    name: "Cristiana da Cruz Tristao",
    role: "Aux. de Serv. Gerais",
    area: "Higienização",
    date: "24/08/2026",
  },
  {
    name: "Franciangela Daniele Ferreira de Lima",
    role: "Técnico de Laboratório",
    area: "Laboratório",
    date: "24/08/2026",
  },
  {
    name: "Kathleen Loyane Alves Pereira",
    role: "Roupeiro",
    area: "Hotelaria",
    date: "24/08/2026",
  },
  {
    name: "Marina Oliveira Santana",
    role: "Auxiliar de Farmácia",
    area: "Farmácia Central",
    date: "24/08/2026",
  },
  {
    name: "Valdirene Cardoso Rowe",
    role: "Auxiliar de Farmácia",
    area: "Farmácia Central",
    date: "24/08/2026",
  },
];

const departures: PersonRecord[] = [
  {
    name: "Weberth de Oliveira",
    role: "Analista de Orçamento",
    area: "Núcleo de Programação Orçamentária de Prestação de Contas",
    date: "25/08/2026",
  },
  {
    name: "Scarlett Ferreira de Araujo",
    role: "Nutricionista",
    area: "Nutrição",
    date: "26/08/2026",
  },
  {
    name: "Dayana Barros Nogueira Mendes",
    role: "Aux. de Serv. Gerais",
    area: "Higienização",
    date: "25/08/2026",
  },
];

const vacations: PersonRecord[] = [
  {
    name: "Glaucia Pires Figueira de Mello",
    role: "Psicólogo Hospitalar",
    area: "Psicologia Clínica",
    period: "24/08/2026 a 29/08/2026",
  },
  {
    name: "Patricia da Silva Pereira",
    role: "Recepcionista I",
    area: "Recepção Central",
    period: "24/08/2026 a 08/09/2026",
  },
  {
    name: "Maria Ayumi Antunes Sato",
    role: "Assistente Social",
    area: "Serviço Social",
    period: "26/08/2026 a 05/09/2026",
  },
];

const featureArticle = {
  title:
    "I Simpósio Multidisciplinar do ICTDF debate boas práticas e inovação",
  url: "https://www.instagram.com/p/DeHhAvMju3I/",
  meta: "05/10/2026 · @ictdf_",
  summary:
    "Três dias de imersão com teoria, workshops práticos e exposição de trabalhos científicos focados na excelência da assistência cardiovascular e transplantes.",
  image: "/simposio-multidisciplinar.png",
  imageAlt: "Arte do Simpósio Multidisciplinar: boas práticas de assistência cardiovascular e transplantes",
};

const giroItems = [
  {
    tag: "Institucional",
    title: "Espaço para nova matéria do ICTDF",
    summary: "Inclua aqui o resumo de outra notícia publicada no portal ou nos canais internos.",
    image: "/congresso-cmb.png",
    accent: "text-[#008f5b]",
  },
  {
    tag: "Educação",
    title: "Espaço para ações de capacitação",
    summary: "Use este card para divulgar treinamentos, encontros técnicos e atividades de desenvolvimento.",
    image: "/og.png",
    accent: "text-[#0b62b4]",
  },
  {
    tag: "Comunidade",
    title: "Espaço para iniciativas solidárias",
    summary: "Reserve este espaço para campanhas, mutirões e iniciativas de cuidado com a comunidade.",
    image: "/ictdf-logo.png",
    accent: "text-[#ee1b35]",
  },
];

type AgendaItem = {
  month: string;
  day: string;
  dayNote?: string;
  time?: string;
  date: string;
  title: string;
  detail: string;
  sessions?: { date: string; topic: string }[];
  url: string;
  linkLabel?: string;
};

const agendaItems: AgendaItem[] = [
  {
    month: "Out",
    day: "08",
    time: "07:30",
    date: "08/10 às 7h30",
    title: "Sessão clínico-científica",
    detail: "Tema: Estado da arte da terapia renal substitutiva.",
    url: "#",
  },
  {
    month: "Out",
    day: "19",
    dayNote: "a 31",
    date: "19 a 31/10",
    title: "Treinamento RCP",
    detail:
      "Convidamos todos os colaboradores das áreas assistenciais e administrativas para participar do treinamento.",
    url: "https://drive.google.com/file/d/1oRnU5ZvN5VhJZLtZDL1oC4B1w-iyBlNe/view?usp=sharing",
    linkLabel: "Acessar cronograma",
  },
  {
    month: "Out",
    day: "21",
    dayNote: "e 28",
    date: "21 e 28/10",
    title: "Projeto Entre Nós",
    detail: "Próximos encontros:",
    sessions: [
      { date: "21/10", topic: "Como lidar melhor com críticas" },
      { date: "28/10", topic: "Desenvolvendo empatia nas relações" },
    ],
    url: "#",
  },
];

const agendaBadgeStyles = [
  "bg-[#082a63] text-white",
  "bg-[#ee1b35] text-white",
  "border-2 border-[#d9e2ef] bg-white text-[#082a63]",
];

const highlightPerson = {
  name: "Fulano de Tal da Silva",
  area: "Farmácia",
  tenure: "16 anos de casa",
  text: "Entrou no ICTDF em 2010 e há 16 anos faz a diferença, com um trabalho de excelência na Farmácia, trazendo inovações e melhorias para os processos.",
  photo: "/gente-que-faz.png",
};

async function loadImageDataUrl(src: string) {
  try {
    const response = await fetch(src);
    const blob = await response.blob();

    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export default function Home() {
  const newsletterRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [openLists, setOpenLists] = useState<OpenLists>({});

  async function downloadPdf() {
    if (!newsletterRef.current || isDownloading) return;

    setIsDownloading(true);

    try {
      const { jsPDF } = await import("jspdf");
      const logoDataUrl = await loadImageDataUrl("/ictdf-logo.png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 16;
      const maxWidth = pageWidth - margin * 2;
      const blue: [number, number, number] = [8, 42, 99];
      const red: [number, number, number] = [238, 27, 53];
      const green: [number, number, number] = [0, 143, 91];
      const lightBlue: [number, number, number] = [237, 244, 251];
      const slate: [number, number, number] = [48, 65, 95];
      let y = 58;

      const ensureSpace = (height: number) => {
        if (y + height > pageHeight - 24) {
          pdf.addPage();
          y = 18;
        }
      };

      const writeLines = (
        text: string,
        size = 10,
        color: [number, number, number] = slate,
        style: "normal" | "bold" = "normal",
        x = margin,
        width = maxWidth,
      ) => {
        pdf.setFont("helvetica", style);
        pdf.setFontSize(size);
        pdf.setTextColor(...color);
        const lines = pdf.splitTextToSize(text, width);
        ensureSpace(lines.length * (size * 0.42) + 4);
        pdf.text(lines, x, y);
        y += lines.length * (size * 0.42) + 5;
      };

      const sectionHeader = (title: string, accent: [number, number, number] = blue) => {
        ensureSpace(16);
        pdf.setFillColor(...accent);
        pdf.roundedRect(margin, y, maxWidth, 13, 2, 2, "F");
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.setTextColor(255, 255, 255);
        pdf.text(title, margin + 5, y + 8.5);
        y += 19;
      };

      const drawHeader = () => {
        pdf.setFillColor(...blue);
        pdf.rect(0, 0, pageWidth, 45, "F");
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(margin, 8, 25, 28, 3, 3, "F");

        if (logoDataUrl) {
          pdf.addImage(logoDataUrl, "PNG", margin + 3.7, 10, 17.5, 23.5);
        }

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(25);
        pdf.setTextColor(255, 255, 255);
        pdf.text("ICTDF", margin + 33, 22);
        pdf.setFont("helvetica", "normal");
        pdf.text("Informa", margin + 66, 22);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        pdf.text("Edição 01 | Setembro de 2026", margin + 33, 31);
        pdf.setFillColor(...red);
        pdf.roundedRect(margin + 33, 35, 44, 1.3, 0.6, 0.6, "F");
      };

      const drawInfoCard = (title: string, value: string, accent: [number, number, number], x: number, width: number) => {
        pdf.setFillColor(247, 250, 252);
        pdf.setDrawColor(217, 226, 239);
        pdf.roundedRect(x, y, width, 19, 2, 2, "FD");
        pdf.setFillColor(...accent);
        pdf.roundedRect(x + 3, y + 3, 15, 13, 2, 2, "F");
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(13);
        pdf.setTextColor(255, 255, 255);
        pdf.text(value, x + 7.5, y + 11.5, { align: "center" });
        pdf.setFontSize(8.5);
        pdf.setTextColor(...blue);
        pdf.text(title, x + 22, y + 11);
      };

      const drawFooter = (page: number, totalPages: number) => {
        pdf.setDrawColor(217, 226, 239);
        pdf.line(margin, pageHeight - 17, pageWidth - margin, pageHeight - 17);
        if (logoDataUrl) {
          pdf.addImage(logoDataUrl, "PNG", margin, pageHeight - 15, 8, 10);
        }
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(7.5);
        pdf.setTextColor(...blue);
        pdf.text("Instituto de Cardiologia e Transplantes do Distrito Federal", margin + 11, pageHeight - 9);
        pdf.setTextColor(...slate);
        pdf.text(`${page}/${totalPages}`, pageWidth - margin, pageHeight - 9, { align: "right" });
      };

      const peopleList = (title: string, people: PersonRecord[], dateLabel = "Data") => {
        ensureSpace(18);
        const accent = title === "Admissões" ? green : title === "Desligamentos" ? red : [11, 98, 180] as [number, number, number];
        pdf.setFillColor(255, 255, 255);
        pdf.setDrawColor(217, 226, 239);
        pdf.roundedRect(margin, y - 2, maxWidth, 14, 2, 2, "FD");
        pdf.setFillColor(...accent);
        pdf.roundedRect(margin, y - 2, 2.5, 14, 1, 1, "F");
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        pdf.setTextColor(...blue);
        pdf.text(`${title} (${people.length.toString().padStart(2, "0")} registros)`, margin + 6, y + 6.5);
        y += 18;

        people.forEach((person) => {
          const date = person.date ?? person.period ?? "";
          const text = `${person.name}  |  ${person.role}  |  ${person.area}  |  ${dateLabel}: ${date}`;
          const lines = pdf.splitTextToSize(text, maxWidth - 8);
          ensureSpace(lines.length * 4.8 + 8);
          pdf.setFillColor(247, 250, 252);
          pdf.setDrawColor(217, 226, 239);
          pdf.roundedRect(margin, y - 4, maxWidth, lines.length * 4.8 + 5, 2, 2, "FD");
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(9);
          pdf.setTextColor(...slate);
          pdf.text(lines, margin + 4, y + 1);
          y += lines.length * 4.8 + 7;
        });
      };

      drawHeader();

      writeLines(
        "Newsletter do Instituto de Cardiologia e Transplantes do Distrito Federal. Documento com comunicados e movimentações de interesse dos colaboradores.",
        10.5,
        slate,
      );

      ensureSpace(24);
      const statGap = 4;
      const statWidth = (maxWidth - statGap * 2) / 3;
      drawInfoCard("ADMISSÕES", admissions.length.toString().padStart(2, "0"), green, margin, statWidth);
      drawInfoCard("DESLIGAMENTOS", departures.length.toString().padStart(2, "0"), red, margin + statWidth + statGap, statWidth);
      drawInfoCard("FÉRIAS", vacations.length.toString().padStart(2, "0"), [11, 98, 180], margin + (statWidth + statGap) * 2, statWidth);
      y += 28;

      sectionHeader("Giro ICTDF", blue);
      giroItems.forEach((item) => {
        ensureSpace(24);
        pdf.setFillColor(255, 255, 255);
        pdf.setDrawColor(217, 226, 239);
        pdf.roundedRect(margin, y - 3, maxWidth, 24, 2, 2, "FD");
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(8);
        pdf.setTextColor(...red);
        pdf.text(item.tag.toUpperCase(), margin + 4, y + 3);
        pdf.setFontSize(10);
        pdf.setTextColor(...blue);
        pdf.text(pdf.splitTextToSize(item.title, maxWidth - 8), margin + 4, y + 9);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8.5);
        pdf.setTextColor(...slate);
        pdf.text(pdf.splitTextToSize(item.summary, maxWidth - 8), margin + 4, y + 16);
        y += 29;
      });

      sectionHeader("Acontece no ICTDF", red);
      agendaItems.forEach((item) => {
        ensureSpace(22);
        pdf.setFillColor(...blue);
        pdf.roundedRect(margin, y - 3, maxWidth, 22, 2, 2, "F");
        pdf.setFillColor(...red);
        pdf.roundedRect(margin + 4, y + 1, 27, 13, 2, 2, "F");
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(7.8);
        pdf.setTextColor(255, 255, 255);
        pdf.text(item.date.toUpperCase(), margin + 17.5, y + 9, { align: "center" });
        pdf.setFontSize(10);
        pdf.text(item.title, margin + 36, y + 5);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8.5);
        pdf.setTextColor(201, 216, 236);
        const detail = [item.detail, ...(item.sessions ?? []).map((session) => `${session.date}: ${session.topic}.`)].join(" ");
        pdf.text(pdf.splitTextToSize(detail, maxWidth - 42), margin + 36, y + 11);
        y += 27;
      });

      sectionHeader("Gente que faz", [11, 98, 180]);
      pdf.setFillColor(...lightBlue);
      pdf.setDrawColor(217, 226, 239);
      pdf.roundedRect(margin, y - 3, maxWidth, 32, 2, 2, "FD");
      y += 5;
      writeLines(highlightPerson.name, 11, blue, "bold", margin + 5, maxWidth - 10);
      writeLines(
        highlightPerson.text,
        9.5,
        slate,
        "normal",
        margin + 5,
        maxWidth - 10,
      );
      y += 7;

      sectionHeader("Comunicados Institucionais", blue);
      writeLines("Setor: Gestão de Pessoas", 12, blue, "bold");
      writeLines("A Gerência de Gestão de Pessoas informa movimentações de colaboradores registradas nesta edição.");
      peopleList("Admissões", admissions);
      peopleList("Desligamentos", departures);
      peopleList("Férias", vacations, "Período");

      const totalPages = pdf.getNumberOfPages();
      for (let page = 1; page <= totalPages; page += 1) {
        pdf.setPage(page);
        drawFooter(page, totalPages);
      }

      pdf.setProperties({
        title: "ICTDF Informa - Edição 01",
        subject: "Newsletter corporativa ICTDF",
      });

      pdf.save("newsletter-ictdf-edicao-01.pdf");
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#14213d]">
      <div className="fixed bottom-4 right-4 z-40 flex gap-2 sm:bottom-5 sm:right-5 print:hidden">
        <Button
          aria-label="Baixar PDF"
          className="size-12 rounded-full bg-[#ee1b35] p-0 text-sm font-bold sm:h-12 sm:w-auto sm:rounded-lg sm:px-4 text-white shadow-[0_14px_34px_rgba(238,27,53,0.22)] hover:bg-[#c8142a]"
          onClick={downloadPdf}
          type="button"
        >
          {isDownloading ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
          <span className="hidden sm:inline">{isDownloading ? "Preparando PDF" : "Baixar PDF"}</span>
        </Button>
      </div>

      <section ref={newsletterRef} className="newsletter-shell mx-auto max-w-[1180px] bg-[#f6f8fb] px-0 py-0 sm:px-6 sm:py-6 lg:px-8">
        <div className="overflow-hidden border-[#d9e2ef] bg-white sm:rounded-lg sm:border sm:shadow-[0_24px_70px_rgba(10,47,107,0.12)]">
          <header className="relative bg-white px-5 pb-6 pt-5 sm:px-9 sm:pb-8 sm:pt-7 lg:px-12">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4 sm:gap-6">
                <Image
                  alt="Logo ICTDF"
                  className="h-auto w-14 shrink-0 sm:w-20"
                  height={225}
                  priority
                  src="/ictdf-logo.png"
                  width={190}
                />
                <span className="h-16 w-px shrink-0 bg-[#c7d2e4] sm:h-20" />
                <div className="animate-rise min-w-0">
                  <h1 className="whitespace-nowrap text-[2rem] leading-none text-[#082a63] sm:text-6xl">
                    <span className="font-black">ICTDF</span>{" "}
                    <span className="font-extralight">Informa</span>
                  </h1>
                  <p className="mt-2 text-xs font-bold leading-5 text-[#607089] sm:text-sm">
                    Boletim semanal do Instituto de Cardiologia e Transplantes do DF
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-sm font-bold text-[#082a63] sm:gap-3 lg:justify-end">
                <span className="inline-flex items-center gap-2 rounded-lg border border-[#d9e2ef] bg-[#f7fafc] px-3 py-2">
                  <CalendarDays className="size-4 text-[#ee1b35]" />
                  Edição 01
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-[#d9e2ef] bg-[#f7fafc] px-3 py-2">
                  <Megaphone className="size-4 text-[#ee1b35]" />
                  Setembro de 2026
                </span>
              </div>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#082a63] via-[#0b62b4] to-[#ee1b35]" />
          </header>

          <section className="border-y border-[#d9e2ef] bg-[#f7fafc] px-4 py-5 sm:px-9 sm:py-6 lg:px-12">
            <article className="animate-rise relative overflow-hidden rounded-2xl bg-[#082a63] text-white shadow-[0_18px_44px_rgba(8,42,99,0.28)]">
              <div className="relative">
                <Image
                  alt={featureArticle.imageAlt}
                  className="h-auto w-full"
                  height={349}
                  priority
                  src={featureArticle.image}
                  width={728}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#082a63] to-transparent sm:h-36" />
              </div>
              <div className="relative -mt-4 flex max-w-3xl flex-col px-5 pb-6 sm:-mt-10 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#ee1b35] px-3 py-1 text-xs font-black uppercase text-white">
                    Matéria da semana
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c9d8ec]">
                    <CalendarDays className="size-3.5" />
                    {featureArticle.meta}
                  </span>
                </div>
                <h2 className="mt-4 text-[1.625rem] font-black leading-[1.12] sm:text-4xl lg:text-[2.625rem]">{featureArticle.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#dbe6f5] sm:text-base sm:leading-7">{featureArticle.summary}</p>
                <a
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ee1b35] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(238,27,53,0.35)] transition hover:bg-[#c8142a] sm:w-auto sm:self-start"
                  href={featureArticle.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ler matéria completa
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          </section>

          <GiroSection />

          <AgendaAndPeopleSection />

          <CommunicationsSection openLists={openLists} setOpenLists={setOpenLists} />

          <footer className="bg-[#082a63] px-5 pb-20 pt-6 text-white sm:px-9 sm:pb-6 lg:px-12">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex items-center gap-4">
                <Bell className="size-10 rounded-lg bg-[#ee1b35] p-2" />
                <div>
                  <p className="text-lg font-black uppercase">Fique atento</p>
                  <p className="text-sm leading-6 text-[#c9d8ec]">
                    Acompanhe os comunicados oficiais para não perder informações importantes.
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold text-[#c9d8ec]">Instituto de Cardiologia e Transplantes do Distrito Federal</p>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  action,
  icon,
  inverted = false,
  title,
}: {
  action?: string;
  icon: ReactNode;
  inverted?: boolean;
  title: string;
}) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span className={`grid size-11 place-items-center rounded-full ${inverted ? "bg-white text-[#082a63]" : "bg-[#082a63] text-white"}`}>
          {icon}
        </span>
        <h2 className={`text-xl font-black sm:text-2xl ${inverted ? "text-white" : "text-[#082a63]"}`}>{title}</h2>
        <span className={`hidden h-px w-28 sm:block ${inverted ? "bg-white/40" : "bg-[#ee1b35]"}`} />
      </div>
      {action ? <p className={`text-sm font-bold ${inverted ? "text-[#c9d8ec]" : "text-[#607089]"}`}>{action}</p> : null}
    </div>
  );
}

function PlaceholderLinkButton() {
  return (
    <button
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg text-sm font-bold transition"
      style={{ color: "#082a63" }}
      type="button"
    >
      Inserir link da matéria
      <ArrowUpRight className="size-4" />
    </button>
  );
}

function GiroSection() {
  return (
    <section className="px-4 py-6 sm:px-9 sm:py-7 lg:px-12">
      <SectionHeading action="Veja outras notícias" icon={<Megaphone className="size-5" />} title="Giro ICTDF" />
      <div className="grid gap-4 md:grid-cols-3">
        {giroItems.map((item) => (
          <article className="overflow-hidden rounded-lg border border-[#d9e2ef] bg-white shadow-[0_10px_26px_rgba(10,47,107,0.08)]" key={item.title}>
            <div className="h-44 bg-[#f7fafc] md:h-36">
              <Image
                alt=""
                className={`h-full w-full object-cover ${item.image.includes("ictdf-logo") ? "object-contain p-7" : ""}`}
                height={420}
                src={item.image}
                width={640}
              />
            </div>
            <div className="p-4">
              <span className={`inline-flex rounded-lg bg-[#edf4fb] px-3 py-1 text-xs font-black uppercase ${item.accent}`}>
                {item.tag}
              </span>
              <h3 className="mt-3 min-h-14 text-base font-black leading-tight text-[#082a63]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#607089]">{item.summary}</p>
              <PlaceholderLinkButton />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AgendaAndPeopleSection() {
  return (
    <section className="grid gap-6 px-4 pb-6 sm:px-9 sm:pb-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-8 lg:px-12">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[#edf4fb] text-[#0b62b4]">
            <CalendarDays className="size-5" />
          </span>
          <h2 className="text-xl font-black text-[#082a63] sm:text-2xl">Acontece no ICTDF</h2>
        </div>
        <div className="space-y-3">
          {agendaItems.map((item, index) => (
            <article
              className="flex items-start gap-4 rounded-xl border border-[#e6ecf4] bg-white p-4 shadow-[0_4px_14px_rgba(10,47,107,0.05)] transition hover:border-[#c7d2e4] hover:shadow-[0_8px_22px_rgba(10,47,107,0.09)]"
              key={item.title}
            >
              <div
                className={`flex w-16 shrink-0 flex-col items-center justify-center rounded-lg py-2 text-center ${agendaBadgeStyles[index % agendaBadgeStyles.length]}`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">{item.month}</span>
                <span className="text-2xl font-black leading-none">{item.day}</span>
                {item.dayNote ? <span className="mt-0.5 text-xs font-bold">{item.dayNote}</span> : null}
              </div>
              <div className="min-w-0 flex-1 self-center">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-black leading-snug text-[#082a63]">{item.title}</h3>
                  {item.time ? (
                    <span className="inline-flex items-center gap-1 rounded-md border border-[#e6ecf4] bg-[#f7fafc] px-2 py-0.5 text-xs font-bold text-[#30415f]">
                      <Clock className="size-3.5" />
                      {item.time}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm leading-6 text-[#607089]">{item.detail}</p>
                {item.sessions ? (
                  <ul className="mt-2 space-y-1.5">
                    {item.sessions.map((session) => (
                      <li className="flex items-start gap-2 text-sm leading-5 text-[#30415f]" key={session.date}>
                        <span className="shrink-0 rounded-md bg-[#edf4fb] px-2 py-0.5 text-xs font-black text-[#0b62b4]">
                          {session.date}
                        </span>
                        <span>{session.topic}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <AgendaItemButton label={item.linkLabel} url={item.url} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <article className="relative self-start overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f47b0] to-[#0b2a7a] p-6 text-white shadow-[0_18px_44px_rgba(11,42,122,0.3)] sm:p-7">
        <Heart className="pointer-events-none absolute -right-8 -top-6 size-48 fill-white/5 text-white/5" />
        <span className="relative inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-[#a9c8ff]">
          Gente que faz
        </span>
        <div className="relative mt-5 flex flex-col items-center text-center">
          <div className="size-28 overflow-hidden rounded-full border-4 border-white/25 bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]">
            <Image
              alt={`Foto de ${highlightPerson.name}`}
              className="size-full object-cover"
              height={220}
              src={highlightPerson.photo}
              width={220}
            />
          </div>
          <p className="mt-4 text-xl font-black">{highlightPerson.name}</p>
          <p className="mt-1 text-sm font-bold text-[#c9d8ec]">
            {highlightPerson.area} • {highlightPerson.tenure}
          </p>
        </div>
        <p className="relative mt-5 rounded-xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-[#eef3fb]">
          {highlightPerson.text}
        </p>
        <p className="relative mt-4 text-center text-xs font-bold text-[#a9c8ff]">
          Cada história fortalece a cultura de cuidado do Instituto.
        </p>
      </article>
    </section>
  );
}

function AgendaItemButton({ label = "Ver notícia", url }: { label?: string; url: string }) {
  if (url === "#") {
    return null;
  }

  return (
    <a
      className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#0b62b4] transition hover:text-[#082a63] hover:underline"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      {label}
      <ArrowRight className="size-4" />
    </a>
  );
}

function CommunicationsSection({
  openLists,
  setOpenLists,
}: {
  openLists: OpenLists;
  setOpenLists: React.Dispatch<React.SetStateAction<OpenLists>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const totalUpdates = admissions.length + departures.length + vacations.length;

  if (totalUpdates === 0) {
    return null;
  }

  return (
    <section className="space-y-4 px-4 pb-8 sm:px-9 lg:px-12">
      <h2 className="text-xl font-black text-[#082a63] sm:text-2xl">Comunicados Institucionais</h2>
      <button
        className="group grid w-full gap-3 rounded-lg border border-[#d9e2ef] bg-white p-4 text-left shadow-[0_10px_26px_rgba(10,47,107,0.07)] transition hover:-translate-y-0.5 hover:border-[#9bb4d4] hover:shadow-[0_16px_36px_rgba(10,47,107,0.12)] sm:grid-cols-[auto_1fr_auto] sm:items-center"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span className="grid size-11 place-items-center rounded-lg bg-[#082a63] text-white">
          <UsersRound className="size-5" />
        </span>
        <span>
          <span className="block text-xs font-black uppercase text-[#ee1b35]">Setor com atualizações</span>
          <span className="mt-1 block text-lg font-black text-[#082a63]">Gestão de Pessoas</span>
          <span className="mt-1 block text-sm leading-6 text-[#607089]">
            {totalUpdates.toString().padStart(2, "0")} registros nesta edição
          </span>
        </span>
        <span className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#edf4fb] px-4 text-sm font-black text-[#082a63] transition group-hover:bg-[#082a63] group-hover:text-white">
          Abrir
          <ArrowUpRight className="size-4" />
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#082a63]/20 p-3 backdrop-blur-sm sm:p-4"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            aria-modal="true"
            className="animate-rise relative max-h-[90vh] w-full max-w-5xl sm:max-h-[86vh] overflow-y-auto rounded-[22px] border border-[#d9e2ef] bg-white shadow-[0_28px_90px_rgba(8,42,99,0.25)]"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <header className="rounded-t-[22px] bg-[#082a63] px-5 py-5 pr-16 text-white sm:px-7 sm:pr-28">
              <p className="text-xs font-black uppercase text-[#7fd0ff]">Comunicados Institucionais</p>
              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">Gestão de Pessoas</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#c9d8ec]">
                A Gerência de Gestão de Pessoas informa movimentações de colaboradores registradas nesta edição.
              </p>
            </header>

            <button
              aria-label="Fechar comunicados"
              className="absolute right-3 top-3 grid size-10 sm:right-4 sm:top-4 sm:size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X className="size-6 stroke-[3] sm:size-8" />
            </button>

            <div className="space-y-4 bg-[#f7fafc] p-3 sm:space-y-5 sm:p-6">
              {admissions.length > 0 ? (
                <PeopleSection
                  accent="#008f5b"
                  id="admissions"
                  icon={<UserPlus className="size-5" />}
                  openLists={openLists}
                  people={admissions}
                  setOpenLists={setOpenLists}
                  subtitle="Novos colaboradores passam a integrar o quadro de funcionários do ICTDF."
                  title="Admissões"
                />
              ) : null}

              {departures.length > 0 ? (
                <PeopleSection
                  accent="#ee1b35"
                  id="departures"
                  icon={<LogOut className="size-5" />}
                  openLists={openLists}
                  people={departures}
                  setOpenLists={setOpenLists}
                  subtitle="Colaboradores abaixo deixam de fazer parte do quadro de funcionários da instituição."
                  title="Desligamentos"
                />
              ) : null}

              {vacations.length > 0 ? (
                <PeopleSection
                  accent="#0b62b4"
                  dateLabel="Período"
                  id="vacations"
                  icon={<Plane className="size-5" />}
                  openLists={openLists}
                  people={vacations}
                  setOpenLists={setOpenLists}
                  subtitle="Relação de colaboradores em gozo de férias."
                  title="Férias"
                />
              ) : null}
            </div>

            <div className="flex justify-end border-t border-[#d9e2ef] bg-white px-4 py-4 sm:px-6">
              <Button
                className="h-11 rounded-lg bg-[#082a63] px-6 text-sm font-black text-white hover:bg-[#0b3f88]"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function PeopleSection({
  accent,
  dateLabel = "Data",
  id,
  icon,
  openLists,
  people,
  setOpenLists,
  subtitle,
  title,
}: {
  accent: string;
  dateLabel?: string;
  id: string;
  icon: ReactNode;
  openLists: OpenLists;
  people: PersonRecord[];
  setOpenLists: React.Dispatch<React.SetStateAction<OpenLists>>;
  subtitle: string;
  title: string;
}) {
  const expanded = Boolean(openLists[id]);
  const visiblePeople = expanded ? people : people.slice(0, 3);
  const hiddenCount = people.length - 3;

  return (
    <section className="rounded-lg border border-[#d9e2ef] bg-white p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase" style={{ color: accent }}>
            {icon}
            {title}
          </span>
          <p className="mt-1 text-sm leading-6 text-[#607089]">{subtitle}</p>
        </div>
        <span className="rounded-lg border border-[#d9e2ef] px-3 py-2 text-sm font-black text-[#082a63]">
          {people.length.toString().padStart(2, "0")} registros
        </span>
      </div>

      <div className="space-y-2">
        {visiblePeople.map((person, index) => (
          <article
            className="grid gap-2 rounded-lg border border-[#d9e2ef] bg-[#f7fafc] px-3 py-3 text-sm transition hover:border-[#9bb4d4] hover:bg-white md:grid-cols-[1.1fr_0.9fr_0.9fr_120px] md:items-center"
            key={person.name}
            style={{ animationDelay: `${index * 45}ms` }}
          >
            <p className="font-black text-[#14213d]">{person.name}</p>
            <p className="font-bold text-[#30415f]">{person.role}</p>
            <p className="text-[#607089]">{person.area}</p>
            <p className="font-black text-[#082a63]">{person.date ?? person.period}</p>
          </article>
        ))}
      </div>

      {hiddenCount > 0 ? (
        <Button
          className="mt-3 h-9 rounded-lg border-[#d9e2ef] text-[#082a63]"
          onClick={() => setOpenLists((current) => ({ ...current, [id]: !current[id] }))}
          type="button"
          variant="outline"
        >
          {expanded ? "Visualizar menos" : `Visualizar mais ${hiddenCount}`}
          <ChevronDown className={`size-4 transition ${expanded ? "rotate-180" : ""}`} />
        </Button>
      ) : null}

      <p className="mt-3 text-xs font-bold uppercase text-[#9aa8ba]">{dateLabel}</p>
    </section>
  );
}
