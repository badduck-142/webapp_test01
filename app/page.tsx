
import { Hero } from "@/components/home/hero"
import { ServicesSection } from "@/components/home/services-section"
import { NewsAndActivities } from "@/components/home/news-and-activities"
import { ArticlesSection } from "@/components/home/articles-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <NewsAndActivities />
      <ArticlesSection />
    </>
  )
}
