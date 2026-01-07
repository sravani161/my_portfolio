import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-center">
      <h2
        className="
          text-4xl font-bold mb-8
          bg-gradient-to-r
          from-cyan-400
          via-teal-500
          to-emerald-600
          bg-clip-text
          text-transparent
        "
      >
        Contact Me
      </h2>

      <div className="flex justify-center gap-6">
        {[ 
          { icon: Linkedin, link: "https://www.linkedin.com/in/sravani-balguri-b56a561b1/", label: "LinkedIn" },
          { icon: Mail, link: "mailto:sravanibalguri6@email.com", label: "Email" },
          { icon: Phone, link: "tel:+1(602)300-9624", label: "Phone" },
        ].map(({ icon: Icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            className="
              p-4 rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-teal-500
              to-emerald-600
              text-black
              hover:scale-110 transition
            "
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}
