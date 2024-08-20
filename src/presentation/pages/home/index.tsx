import { Button } from "@ui/button"
import { ROUTES } from "@/utils/routes"
import { ChevronsRightIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function HomePage() {
  return (
    <>
      {/* <header className="fixed w-full">
        <div className="container mx-auto p-3 flex items-center justify-between lg:p-5">
          <h1 className="text-xl font-bold">Atlas chat</h1>
          <Link to={ROUTES.LOGIN}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </header> */}

      <main>
        <section className="text-center p-5 h-screen flex flex-col items-center justify-center gap-3 container max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
          <img
            src="/icon.png"
            alt="Atlas"
            className="animate-fade-down duration-500 md:max-w-xs"
          />
          <div className="space-y-3 animate-fade-up duration-500 md:max-w-xs lg:max-w-md xl:max-w-lg">
            <h2 className="text-3xl font-black bg-primary text-transparent bg-clip-text lg:text-4xl xl:text-5xl">
              Connect with friends, colleagues, and loved ones effortlessly.
            </h2>
            <p className="px-3 md:p-0">
              Enjoy real-time messaging, and group chats. Stay connected, anytime,
              anywhere.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
