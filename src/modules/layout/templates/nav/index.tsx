import NavMobile from "./NavMobile"
import NavDesktop from "./NavDesktop"

export default async function Nav() {
  return (
    <div>
      <NavMobile />
      <NavDesktop />
    </div>
  )
}
