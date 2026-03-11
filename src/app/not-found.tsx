import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, Container } from "@/components/layout";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center pt-20">
        <Container size="sm" className="text-center py-20">
          <div className="mb-8">
            <span className="text-8xl font-bold text-gradient">404</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
            been moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
