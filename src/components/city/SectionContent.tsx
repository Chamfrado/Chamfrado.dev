import {
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  MessageSquare,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { SectionItem } from "../../types/section";

type IconType = React.ComponentType<{ className?: string }>;

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectItem = {
  title: string;
  status: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
};

type CareerItem = {
  title: string;
  company: string;
  engagement: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
};

const contactLinks = {
  email: "mailto:prog.lohran@gmail.com",
  github: "https://github.com/Chamfrado",
  linkedin: "https://www.linkedin.com/in/lohrancintra",
  website: "https://chamfrado.dev",
  whatsapp: "https://wa.me/5535992025205",
  phone: "tel:+5535992025205",
};

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Product",
    items: ["Company sites", "Desktop apps", "Portfolio systems", "Interactive UX"],
  },
];

const projects: ProjectItem[] = [
  {
    title: "Chamfrado.dev",
    status: "Work in progress",
    description:
      "My personal website: a neon city portfolio with animated buildings, CRT panels, and mobile-first navigation.",
    stack: ["React", "Tailwind CSS", "Vite"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Chamfrado/Chamfrado.dev",
      },
    ],
  },
  {
    title: "PlantaHUB",
    status: "v1.0 released",
    description:
      "A company website and platform foundation built with a full-stack Java and React workflow.",
    stack: ["Java", "React", "PostgreSQL", "Spring Boot", "Tailwind CSS", "Vite"],
    links: [
      {
        label: "Live site",
        href: "https://www.plantahub.com.br",
      },
      {
        label: "Repository",
        href: "https://github.com/Chamfrado/PlantaHUB",
      },
    ],
  },
  {
    title: "Shelfy",
    status: "v1.0 released",
    description:
      "An offline desktop app for managing book inventory, lending records, and loan control.",
    stack: ["Electron", "HTML", "CSS"],
    links: [
      {
        label: "Download",
        href: "https://github.com/Chamfrado/Shelfy/releases/tag/release",
      },
      {
        label: "Repository",
        href: "https://github.com/Chamfrado/Shelfy",
      },
    ],
  },
];

const careerItems: CareerItem[] = [
  {
    title: "Programming Teacher",
    company: "Government of the State of Minas Gerais",
    engagement: "Full-time",
    period: "Mar 2024 - Present",
    location: "Santa Rita do Sapucai, Minas Gerais, Brazil - On-site",
    highlights: [
      "Teach Programming Logic, Computational Thinking, Basic Computer Science, Java, Python, HTML/CSS, Databases, AI, and React.js.",
      "Prepare students to understand programming fundamentals through practical exercises and accessible technical explanations.",
    ],
    skills: ["Teaching", "Java", "Python", "HTML/CSS", "Databases", "AI", "React.js"],
  },
  {
    title: "Educational Content Developer and Researcher",
    company: "Exxer",
    engagement: "Freelance",
    period: "Aug 2024 - Sep 2025",
    location: "Santa Rita do Sapucai, Minas Gerais, Brazil - Remote",
    highlights: [
      "Researched and developed educational content on Robotics and Artificial Intelligence for high school students.",
      "Coached the programming team and prepared students for the Iron Cup competition.",
      "Collaborated with educators to design engaging and accessible learning materials.",
    ],
    skills: ["Research", "Educational technology", "Robotics", "Artificial Intelligence", "Coaching"],
  },
  {
    title: "Systems Development Analyst",
    company: "Advance Technology Industria e Comercio LTDA",
    engagement: "Full-time",
    period: "Aug 2021 - Aug 2024",
    location: "Santa Rita do Sapucai, Minas Gerais, Brazil - On-site",
    highlights: [
      "Built full-stack applications for different internal needs across the company.",
      "Delivered web applications and interface work with a practical focus on business workflows.",
    ],
    skills: ["Full-stack development", "Web applications", "CSS", "Frontend", "Backend"],
  },
];

const linkHub = [
  {
    label: "GitHub",
    description: "Repositories, experiments, and source code.",
    href: contactLinks.github,
    icon: Code2,
  },
  {
    label: "LinkedIn",
    description: "Professional profile and work history.",
    href: contactLinks.linkedin,
    icon: Briefcase,
  },
  {
    label: "chamfrado.dev",
    description: "Main portfolio home base.",
    href: contactLinks.website,
    icon: Globe,
  },
];

function InfoCard({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: IconType;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-fuchsia-200">
        <Icon className="h-4 w-4" />
        <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300/80">
          {title}
        </p>
      </div>

      <div className="mt-3 text-sm leading-6 text-zinc-300">{children}</div>
    </div>
  );
}

function ActionLink({ href, children, external = true }: ActionLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
    >
      {children}
      {external ? (
        <ExternalLink className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </a>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-fuchsia-300/15 bg-fuchsia-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-fuchsia-100"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({
  title,
  status,
  description,
  stack,
  links,
}: ProjectItem) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-200">
          {status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>
      <TagList items={stack} />
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
          >
            {link.label}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </article>
  );
}

function CareerCard({
  title,
  company,
  engagement,
  period,
  location,
  highlights,
  skills,
}: CareerItem) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="mt-1 text-xs text-zinc-400">
            {company} - {engagement}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-200">
          {period}
        </span>
      </div>

      <p className="mt-3 text-xs text-fuchsia-200/80">{location}</p>

      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <TagList items={skills} />
    </article>
  );
}

export default function SectionContent({ section }: { section: SectionItem }) {
  switch (section.id) {
    case "career":
      return (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard title="Professional focus" icon={Briefcase}>
              I build interfaces and product experiences that connect clean
              engineering with strong visual identity. The focus is practical:
              usable flows, maintainable code, and memorable interactions.
            </InfoCard>

            <InfoCard title="Current direction" icon={Sparkles}>
              Frontend-heavy product work, full-stack prototypes, teaching, and
              interactive web experiences that feel more crafted than default.
            </InfoCard>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {group.title}
                </p>
                <TagList items={group.items} />
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Recent work
            </p>
            <div className="grid gap-3">
              {careerItems.map((item) => (
                <CareerCard key={`${item.company}-${item.title}`} {...item} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <ActionLink href={contactLinks.email} external={false}>
              Start a project
            </ActionLink>
            <ActionLink href={contactLinks.github}>
              View code
            </ActionLink>
          </div>
        </div>
      );

    case "bio":
      return (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard title="Who I am" icon={UserRound}>
              I am Lohran Cintra, also known as Chamfrado: a mid-level software
              developer, engineer, and programming teacher from Santa Rita do
              Sapucai, Minas Gerais. I am available for local, remote, and
              international work.
            </InfoCard>

            <InfoCard title="Builder profile" icon={Code2}>
              I am a software developer who genuinely loves the craft. I do not
              lock myself to one favorite stack; I enjoy learning new tools,
              facing different problems, and turning difficult requirements into
              working systems.
            </InfoCard>

            <InfoCard title="Origin story" icon={Sparkles}>
              I grew up alongside the evolution of technology and watched it
              transform the world around me. My first real contact with
              programming came from making GTA San Andreas mods, and after that
              I never stopped building.
            </InfoCard>

            <InfoCard title="How I work" icon={MessageSquare}>
              My style is practical, versatile, and challenge-driven. I like
              solving large problems, learning while I build, and keeping the
              final result useful for the people who will actually use it.
            </InfoCard>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Strongest skills
              </p>
              <TagList items={["React", "Java", "Teaching", "Full-stack systems"]} />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Work I want
              </p>
              <TagList items={["Freelance sites", "Internal tools", "Product prototypes", "Startups"]} />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Languages
              </p>
              <TagList items={["Portuguese - Native", "English - Advanced", "International work"]} />
            </div>
          </div>

          <InfoCard title="Proof points" icon={Briefcase}>
            I have worked as a developer since 2018, starting with small
            inventory control systems, BI tools, and company websites. Later I
            moved into firmware edits for ONU/ONT devices, streaming websites,
            full ERP applications, and internal solutions around OMIE workflows.
            I also became a teacher and educational content developer, writing
            three years of high school material for Robotics and Artificial
            Intelligence.
          </InfoCard>

          <div className="flex flex-wrap gap-3">
            <ActionLink href={contactLinks.email} external={false}>
              Work with me
            </ActionLink>
            <ActionLink href={contactLinks.linkedin}>
              LinkedIn
            </ActionLink>
          </div>
        </div>
      );

    case "projects":
      return (
        <div className="space-y-4">
          <div className="grid gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ActionLink href={contactLinks.github}>
              Open repositories
            </ActionLink>
            <ActionLink href={contactLinks.website}>
              Visit chamfrado.dev
            </ActionLink>
          </div>
        </div>
      );

    case "links":
      return (
        <div className="space-y-4">
          <div className="grid gap-3">
            {linkHub.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-fuchsia-300/35 hover:bg-fuchsia-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
              >
                <link.icon className="h-5 w-5 shrink-0 text-fuchsia-200" />
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-zinc-400">
                    {link.description}
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-cyan-200 transition group-hover:text-cyan-100" />
              </a>
            ))}
          </div>

          <InfoCard title="Link cafe mode" icon={Globe}>
            This stop keeps the public presence compact: source code, work
            history, live apps, writing, teaching material, and important
            destinations stay one tap away.
          </InfoCard>
        </div>
      );

    case "contact":
      return (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard title="Direct line" icon={Mail}>
              For freelance work, product ideas, teaching, collaborations, or
              technical help, send an email or WhatsApp message with a short
              description of what you want to build.
            </InfoCard>

            <InfoCard title="Best fit" icon={Sparkles}>
              Interactive sites, React interfaces, full-stack prototypes,
              portfolio systems, internal tools, and polished learning
              experiences.
            </InfoCard>

            <InfoCard title="WhatsApp" icon={MessageCircle}>
              +55 (35) 9 9202-5205 for direct project conversations and quick
              follow-up messages.
            </InfoCard>

            <InfoCard title="Phone" icon={Phone}>
              +55 (35) 9 9202-5205 is also available as a standard phone
              contact.
            </InfoCard>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
              Message checklist
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
              <li>Project goal and rough deadline.</li>
              <li>Current state: idea, prototype, redesign, or production.</li>
              <li>Useful links, references, or technical constraints.</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <ActionLink href={contactLinks.email} external={false}>
              Email
            </ActionLink>
            <ActionLink href={contactLinks.whatsapp}>
              WhatsApp
            </ActionLink>
            <ActionLink href={contactLinks.phone} external={false}>
              Call
            </ActionLink>
            <ActionLink href={contactLinks.linkedin}>
              LinkedIn
            </ActionLink>
          </div>
        </div>
      );

    default:
      return null;
  }
}
