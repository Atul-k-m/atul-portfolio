"use client";

const SOCIAL_LINKS = [
  { name: "Github", href: "https://github.com/Atul-k-m" },
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/atul-kumar-458aa1275/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#e4e4e4] py-16 px-6 md:px-12 border-t border-zinc-300/40 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Massive Tagline Banner */}
        <div className="w-full text-center select-none">
          <h2 className="font-instrument text-[clamp(44px,11vw,140px)] font-normal italic uppercase tracking-tighter leading-none text-[#D4411A]">
            {/* EDIT: replace with your footer tagline */}
            STAY CURIOUS
          </h2>
        </div>

        {/* Minimal Row: Email and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-zinc-300/40">
          
          {/* Email Left Aligned */}
          <div className="text-center md:text-left">
            <a
              href="mailto:hello@atul.design"
              className="font-poppins text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-black)] transition-colors hover:underline"
            >
              {/* EDIT: replace with your footer email */}
              atulkm189@gmail.com
            </a>
          </div>

          {/* Socials Right Aligned */}
          <div className="flex flex-wrap justify-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-black)] transition-colors relative hover:underline"
              >
                {/* EDIT: replace with your social link names */}
                {link.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
