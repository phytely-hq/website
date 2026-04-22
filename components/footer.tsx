"use client";

import Link from "next/link";
import { LinkedinLogoIcon, FacebookLogoIcon, XLogoIcon, MailboxIcon } from "@phosphor-icons/react";

export default function PhytelyFooter() {
  return (
    <footer className="w-full bg-muted/20 text-neutral-300 flex flex-col pt-16 md:pt-24 pb-8 px-4 md:px-8 overflow-hidden font-sans selection:bg-primary selection:text-primary-foreground">
      <div className="max-w-screen-2xl px-6 sm:px-8 mx-auto w-full flex flex-col h-full">
        
        {/* Top Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-16 md:mb-24 text-xs sm:text-sm tracking-widest">
          <div className="flex flex-col gap-1.5 mr-4">
            <p>
              Agriculture is evolving, and so are we. 
              Join a community of modern growers dedicated to smarter land management.

            </p>
          </div>
          
          <div className="flex flex-col gap-1.5 md:items-center">
            <span className="uppercase text-neutral-600 mb-2 text-[10px] font-bold w-full md:text-center">Case Studies</span>
            <Link 
              href="/partnerships" 
              className="hover:text-white transition-colors underline decoration-neutral-700 hover:decoration-neutral-400 underline-offset-4"
            >
              Partner Solutions
            </Link>
          </div>
          
          <div className="flex flex-col gap-1.5 md:items-end text-left md:text-right">
            <span className="uppercase text-neutral-600 mb-2 text-[10px] font-bold">Headquarters</span>
            <span>Berea District, Lesotho</span>
            <span>Established 2025</span>
          </div>
        </div>

        {/* Massive Brand Name */}
        <div className="w-full flex justify-center items-center mb-16 md:mb-24 select-none">
          <h2 className="text-[20vw] font-black text-muted uppercase leading-[0.75] tracking-tighter drop-shadow-sm mr-2">
            phytely
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pt-8 border-t border-neutral-800/60 font-mono text-[10px] sm:text-xs tracking-widest text-neutral-500">
          
          {/* Contact & Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <MailboxIcon size={18} weight="fill" />
              <a href="mailto:info@phytely.com" className="hover:text-white transition-colors">
                info@phytely.com
              </a>
            </div>
            <p>© {new Date().getFullYear()} Phytely (Pty) Ltd.</p>
          </div>

          {/* Socials & Legal */}
          <div className="flex flex-col lg:items-end gap-5">
            <div className="flex items-center gap-6">
              <Link href="https://www.linkedin.com/company/phytely" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <LinkedinLogoIcon size={18} weight="fill" />
              </Link>
              <Link href="https://www.facebook.com/phytely" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <FacebookLogoIcon size={18} weight="fill" />
              </Link>
              <Link href="https://twitter.com/phytely" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <XLogoIcon size={18} weight="fill" />
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}