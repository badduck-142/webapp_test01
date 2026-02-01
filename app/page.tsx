
import { Header } from "@/components/layout/header"
import { Hero } from "@/components/home/hero"
import { ServicesSection } from "@/components/home/services-section"
import { NewsAndActivities } from "@/components/home/news-and-activities"
import { ArticlesSection } from "@/components/home/articles-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <NewsAndActivities />
        <ArticlesSection />
      </main>
    </div>
  )
}
