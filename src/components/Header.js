import { NavBar } from "@components/NavBar";
import { Title } from "@components/SiteTitle";

export function Header() {
   const $header = document.createElement('header');
   $header.id = "header";
   $header.classList.add("header");

   $header.appendChild(Title());
   $header.appendChild(NavBar());

   return $header;
}