export default function Home() {
  const services = [
    {
      title: 'Security Architecture',
      description: 'Secure-by-design architecture for cloud, hybrid and enterprise platforms with governance, risk and resilience built in.',
    },
    {
      title: 'Cloud Security',
      description: 'Azure, AWS and multi-cloud security design, landing zones, segmentation, identity, monitoring and assurance.',
    },
    {
      title: 'Risk & Assurance',
      description: 'Threat modelling, security requirements, control definition and documentation aligned to NCSC, NIST and Zero Trust principles.',
    },
  ];

  const strengths = [
    'SC-cleared security architecture experience',
    'Government and enterprise delivery background',
    'NCSC and Zero Trust aligned approach',
    'Cloud, network and security design authority capability',
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_28%),radial-gradient(circle_at_left,rgba(168,85,247,0.18),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="text-lg font-semibold tracking-wide">Nirvan Cyber</div>
            <nav className="hidden gap-8 text-sm text-white/80 md:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#approach" className="hover:text-white">Approach</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:scale-[1.02]">
              Book a Call
            </a>
          </header>

          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                Security architecture for regulated and high-trust environments
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
                Secure digital transformation, designed with confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Nirvan Cyber Security Solutions helps organisations design secure, resilient and scalable technology platforms across cloud, network and security domains.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
                  Discuss a Project
                </a>
                <a href="#services" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                  View Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 p-6">
                    <div className="text-sm text-white/80">Secure by design</div>
                    <div className="mt-2 text-2xl font-semibold">Risk-led architecture for serious organisations</div>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-sm text-slate-400">Focus</div>
                      <div className="mt-2 text-3xl font-semibold">Zero Trust</div>
                      <p className="mt-2 text-sm text-slate-300">Identity, least privilege and segmentation.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-sm text-slate-400">Outcome</div>
                      <div className="mt-2 text-3xl font-semibold">Assurance</div>
                      <p className="mt-2 text-sm text-slate-300">Audit-ready design and governance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">Services</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Security expertise from strategy to delivery.</h2>
          <p className="mt-4 text-lg text-slate-300">Practical, senior-level architecture support for organisations that need secure and resilient delivery.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Approach</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Risk-led. Secure by design. Governance-ready.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              We translate business risk into clear security requirements, threat models and practical controls that can be implemented, tested and assured.
            </p>
          </div>
          <div className="grid gap-4">
            {strengths.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/20 via-slate-900 to-violet-500/20 p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Let’s discuss secure architecture.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Contact Nirvan Cyber Security Solutions for security architecture, cloud security and assurance support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:info@nirvancyber.com" className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950">
                info@nirvancyber.com
              </a>
              <a href="https://nirvancyber.com" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white">
                nirvancyber.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
