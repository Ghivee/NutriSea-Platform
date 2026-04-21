import { Globe, BarChart3 } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { SpatialShowcase } from "@/components/spatial-showcase";
import { AnimatedHero } from "@/components/animated-hero";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-blue-900 selection:text-white">

            {/* NAVBAR LOGO */}
            <nav className="w-full py-8 flex justify-center sticky top-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/5">
                <img
                    src="/IMG_3136 (1).jpg"
                    alt="NUTRISEA Logo"
                    className="h-12 md:h-16 object-contain"
                />
            </nav>

            {/* HALAMAN 1: Data Context */}
            <section className="w-full py-24 px-6 flex flex-col items-center justify-center min-h-[60vh] max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-3xl text-neutral-400 leading-relaxed mb-12">
                    Pantau{" "}
                    <LinkPreview url="https://www.who.int/data/gho" className="text-blue-400 border-blue-400/50 hover:text-blue-300">
                        [Status Gizi Global <Globe className="w-5 h-5 inline-block mb-1" />]
                    </LinkPreview>{" "}
                    secara real-time untuk melihat urgensi penanganan stunting di seluruh dunia melalui data terbaru WHO.
                </p>

                <p className="text-xl md:text-3xl text-neutral-400 leading-relaxed">
                    Kami mengintegrasikan solusi gizi dengan{" "}
                    <LinkPreview url="https://satudata.kemkes.go.id/" className="text-emerald-400 border-emerald-400/50 hover:text-emerald-300">
                        [Dashboard Prevalensi Nasional <BarChart3 className="w-5 h-5 inline-block mb-1" />]
                    </LinkPreview>{" "}
                    agar setiap intervensi selaras dengan target penurunan stunting Indonesia.
                </p>
            </section>

            {/* HALAMAN 2: Toggle Superfood & IoT */}
            <SpatialShowcase />

            {/* HALAMAN 3: Animated Call to Action */}
            <AnimatedHero />

        </div>
    );
}