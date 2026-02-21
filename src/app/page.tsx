import { TestimonialsOverlay } from "@/components/TestimonialsOverlay";
import { Reveal } from "@/components/Reveal";
// import { Hero3D } from "@/components/Hero3D";

const services = [
  {
    number: "01",
    title: "MVP Development",
    description:
      "Launch-ready products built with clean code and scalable architecture.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "High-performance marketing sites and product experiences that convert.",
  },
  {
    number: "03",
    title: "App Development",
    description:
      "Cross-platform apps designed for speed, reliability, and growth.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description:
      "We start by understanding your vision, market, and technical requirements.",
  },
  {
    number: "2",
    title: "Design & Build",
    description:
      "We craft clean interfaces and ship a maintainable codebase with speed.",
  },
  {
    number: "3",
    title: "Launch & Improve",
    description:
      "We deploy, monitor, and refine based on real user feedback.",
  },
];

const caseStudies = [
  {
    label: "CASE STUDY",
    title: "Harbor",
    description:
      "A fintech MVP launched in 6 weeks with a scalable API and secure onboarding.",
    metrics: ["50% faster launch", "10k users in 3 months", "99.9% uptime"],
  },
  {
    label: "CASE STUDY",
    title: "Arcade Health",
    description:
      "A healthcare platform rebuilt for reliability and compliance at scale.",
    metrics: ["2x release velocity", "40% fewer bugs", "HIPAA-ready stack"],
  },
];

const testimonials = [
  {
    quote:
      "The team consistently delivered high-quality work on time. Their attention to detail was outstanding throughout the build.",
    author: "Vikram Shastry",
    role: "CEO, Black Lotus",
  },
  {
    quote:
      "Professional, communicative, and efficient. They delivered a product that has been instrumental in our growth.",
    author: "Gautami Raiker",
    role: "Co-Founder, Contractzy",
  },
  {
    quote:
      "Highly recommend for anyone looking for outstanding design and clean execution. Their expertise was invaluable.",
    author: "Vaishali Chitnis",
    role: "Founder, Spicy Tango",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative flex min-h-[90svh] items-center overflow-hidden">
        {/* 3D Background */}
        {/* <Hero3D /> */}

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
          <Reveal>
            <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[1.1] text-gray-900 md:text-[5.5rem] lg:max-w-2xl">
              Clean MVPs for{" "}
              <span className="text-gray-400">Tech Startups</span>
            </h1>
          </Reveal>
          <p className="mt-8 max-w-lg text-lg text-gray-700 md:text-xl xl:max-w-xl">
            From concept to deployment, we create functional, scalable products
            for tech startups - and maintain them as you grow.
          </p>
          <div className="mt-8">
            <a
              className="btn-border-animate inline-flex h-12 items-center justify-center rounded-sm border border-gray-800 bg-gray-900 px-8 text-sm font-medium text-white"
              href="/contact"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Services Overview
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group flex flex-col justify-between rounded-sm border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:border-gray-300 hover:bg-white hover:shadow-sm">
                <div>
                  <div className="font-serif text-4xl text-gray-900">
                    {service.number}
                  </div>
                  <h3 className="mt-6 font-sans text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-700">
                    {service.description}
                  </p>
                </div>
                <span className="mt-8 flex items-center text-sm font-semibold text-gray-900 group-hover:underline">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Process & Approach
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-20">
            {processSteps.map((step) => (
              <div key={step.title}>
                <div className="font-serif text-6xl text-gray-900">
                  {step.number}
                </div>
                <h3 className="mt-4 font-sans text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Case Studies
          </h2>
          <div className="mt-12 space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div
                    role="img"
                    aria-label={`${study.title} product preview`}
                    className="flex aspect-[4/3] w-full items-center justify-center border border-gray-200 bg-gray-50 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-12 w-12 opacity-50"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lg:px-8">
                  <p className="text-xs font-medium uppercase tracking-[0.05em] text-gray-600">
                    {study.label}
                  </p>
                  <h3 className="mt-4 font-sans text-2xl font-semibold text-gray-900 md:text-[2.5rem]">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-700">
                    {study.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-base font-medium text-gray-900">
                    {study.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-block text-sm font-medium text-gray-800">
                    View case study
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsOverlay testimonials={testimonials} />
    </main>
  );
}
