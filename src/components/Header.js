import { NavBar } from "./NavBar.js";
import { Title } from "./SiteTitle.js";

export function Header() {
   const $header = document.createElement('header');
   $header.id = "header";
   $header.classList.add("header");

   $header.appendChild(Title());
   $header.appendChild(NavBar());

   return $header;
}