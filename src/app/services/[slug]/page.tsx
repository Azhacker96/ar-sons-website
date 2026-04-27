import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Service Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-surface border-b border-border">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-10 h-10 md:w-14 md:h-14 text-primary" />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  service.category === "fitness"
                    ? "bg-blue-500/10 text-blue-500"
                    : service.category === "wellness"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-amber-500/10 text-amber-500"
                }`}>
                  {service.category.toUpperCase()}
                </span>
                <div className="flex gap-2">
                  {service.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs text-muted font-medium bg-background border border-border px-2 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left Content (Details) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Image Carousel */}
              {service.images && service.images.length > 0 && (
                <div className="mb-10">
                  <ImageCarousel images={service.images} />
                </div>
              )}

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Overview</h2>
                <div className="prose prose-lg dark:prose-invert text-muted max-w-none">
                  <p>{service.longDescription}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Key Features & Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-surface border border-border">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (CTA) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 rounded-3xl bg-surface border border-border shadow-xl shadow-black/5">
                <h3 className="text-2xl font-bold text-foreground mb-4">Interested in {service.title}?</h3>
                <p className="text-muted mb-8">
                  Get in touch with our team of experts for a tailored consultation and a customized quote for your facility.
                </p>
                <Link 
                  href="/#contact"
                  className="block w-full py-4 px-6 bg-primary text-white text-center font-bold rounded-xl hover:bg-primary-light transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 mb-4"
                >
                  Get a Quote Now
                </Link>
                <div className="text-center">
                  <p className="text-sm text-muted">Or call us directly</p>
                  <a href="tel:+923000000000" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                    +92 (300) 000-0000
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
