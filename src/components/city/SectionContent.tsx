import {
  Briefcase,
  Code2,
  ExternalLink,
  Gamepad2,
  Globe,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { SectionItem } from "../../types/section";

function InfoCard({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
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

export default function SectionContent({ section }: { section: SectionItem }) {
  switch (section.id) {
    case "career":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Focus" icon={Briefcase}>
            Front-end and back-end development, product building, teaching, and
            crafting interactive digital experiences.
          </InfoCard>

          <InfoCard title="Stack" icon={Code2}>
            React, TypeScript, Tailwind, Java, Spring Boot, APIs, relational
            databases, UI systems, and scalable project structure.
          </InfoCard>

          <InfoCard title="What to show here" icon={Sparkles}>
            Timeline, featured companies, teaching work, case studies,
            certifications, and technology highlights.
          </InfoCard>

          <InfoCard title="Good CTA" icon={ExternalLink}>
            Download résumé, view project history, open GitHub, or start a
            conversation for freelance and product work.
          </InfoCard>
        </div>
      );

    case "bio":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Identity" icon={UserRound}>
            This area can present who you are, your mindset, what inspires you,
            and the kind of creative and technical work you enjoy.
          </InfoCard>

          <InfoCard title="Tone" icon={Sparkles}>
            Keep it personal but intentional. Use short story-driven blocks
            instead of one long biography wall.
          </InfoCard>

          <InfoCard title="Nice ideas" icon={Code2}>
            Add a personal manifesto, favorite tools, fun facts, and your design
            philosophy inside this retro TV layout.
          </InfoCard>

          <InfoCard title="Good CTA" icon={ExternalLink}>
            Invite the visitor to continue into Projects after they understand
            the person behind the work.
          </InfoCard>
        </div>
      );

    case "projects":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Featured builds" icon={Gamepad2}>
            Show your strongest projects first, especially the ones with clean
            visuals, problem-solving, and real technical depth.
          </InfoCard>

          <InfoCard title="Project card idea" icon={Code2}>
            Each project can show name, stack, challenge, solution, screenshots,
            and a direct link to repository or demo.
          </InfoCard>

          <InfoCard title="Nice categories" icon={Sparkles}>
            Web apps, teaching materials, experiments, portfolio pieces,
            business systems, and personal labs.
          </InfoCard>

          <InfoCard title="Good CTA" icon={ExternalLink}>
            Open live demo, view repository, or read a mini case study directly
            inside the CRT screen.
          </InfoCard>
        </div>
      );

    case "links":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Main links" icon={Globe}>
            GitHub, LinkedIn, portfolio references, live apps, teaching
            materials, and any important platforms around your brand.
          </InfoCard>

          <InfoCard title="Layout idea" icon={Sparkles}>
            Use this as a stylish link hub with icon buttons, status tags, short
            descriptions, and highlighted destinations.
          </InfoCard>

          <InfoCard title="Extra touch" icon={Code2}>
            You can make this store feel like an internet café or terminal
            station with clickable neon chips.
          </InfoCard>

          <InfoCard title="Good CTA" icon={ExternalLink}>
            Open external profiles in new tabs and keep the city experience
            intact in the background.
          </InfoCard>
        </div>
      );

    case "contact":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Direct contact" icon={Mail}>
            Email, contact form, business inquiries, collaborations, and project
            invitations should live here.
          </InfoCard>

          <InfoCard title="Keep it simple" icon={Sparkles}>
            On mobile, fast contact wins. Use a compact form or direct actions
            like email and social profile shortcuts.
          </InfoCard>

          <InfoCard title="Good fields" icon={Code2}>
            Name, email, project type, short message, and maybe budget or
            timeline when you want qualified leads.
          </InfoCard>

          <InfoCard title="Good CTA" icon={ExternalLink}>
            Send message, schedule a call, or jump to a preferred channel where
            you respond faster.
          </InfoCard>
        </div>
      );

    default:
      return null;
  }
}
